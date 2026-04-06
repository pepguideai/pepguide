// api/pubmed.js
// Fetches latest PubMed studies for a peptide and summarizes with Claude

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { peptide } = req.query;
  if (!peptide) return res.status(400).json({ error: 'Peptide name required' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API key not configured' });

  try {
    // ── Step 1: Search PubMed for study IDs ──
    const searchQuery = encodeURIComponent(`"${peptide}"[Title/Abstract] AND (peptide OR therapy OR treatment)`);
    const searchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${searchQuery}&retmax=8&sort=date&retmode=json`;

    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();
    const ids = searchData.esearchresult?.idlist || [];

    if (!ids.length) {
      return res.status(200).json({
        peptide,
        studies: [],
        summary: `No recent PubMed studies found for ${peptide}.`,
        totalFound: 0,
      });
    }

    // ── Step 2: Fetch abstracts for those IDs ──
    const fetchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=${ids.join(',')}&rettype=abstract&retmode=json`;
    const fetchRes = await fetch(fetchUrl);
    const fetchData = await fetchRes.json();

    const articles = fetchData.PubmedArticleSet?.PubmedArticle || [];

    // ── Step 3: Extract key fields from each article ──
    const studies = articles.map(article => {
      const medline = article.MedlineCitation;
      const articleData = medline?.Article;
      const pmid = medline?.PMID?.['#text'] || medline?.PMID || '';
      const title = articleData?.ArticleTitle?.['#text'] || articleData?.ArticleTitle || 'Untitled';
      const abstractText = articleData?.Abstract?.AbstractText;
      let abstract = '';
      if (typeof abstractText === 'string') abstract = abstractText;
      else if (Array.isArray(abstractText)) abstract = abstractText.map(a => a['#text'] || a).join(' ');
      else if (abstractText?.['#text']) abstract = abstractText['#text'];
      const journal = articleData?.Journal?.Title || '';
      const pubDate = articleData?.Journal?.JournalIssue?.PubDate;
      const year = pubDate?.Year || pubDate?.MedlineDate?.substring(0,4) || 'Unknown';
      const authors = articleData?.AuthorList?.Author;
      let firstAuthor = '';
      if (Array.isArray(authors) && authors[0]) {
        firstAuthor = authors[0].LastName || '';
      }
      return { pmid, title, abstract, journal, year, firstAuthor };
    }).filter(s => s.abstract.length > 50);

    if (!studies.length) {
      return res.status(200).json({ peptide, studies: [], summary: `Found studies but abstracts were unavailable for ${peptide}.`, totalFound: ids.length });
    }

    // ── Step 4: Summarize with Claude ──
    const studyText = studies.map((s, i) =>
      `Study ${i+1} (${s.year}, ${s.journal}):\nTitle: ${s.title}\nAbstract: ${s.abstract.substring(0, 800)}`
    ).join('\n\n---\n\n');

    const prompt = `You are a medical research summarizer for PepGuide, a research peptide platform. Your audience ranges from complete beginners to advanced researchers.

Here are ${studies.length} recent PubMed studies about ${peptide}:

${studyText}

Please provide:

1. RESEARCH SNAPSHOT (2-3 sentences): What does the current body of research say about ${peptide}? What is proven, what is promising, what is unclear?

2. KEY FINDINGS (bullet points, one per study that has something meaningful):
For each relevant finding, write: "• [Plain English finding] ([Year])"
Translate all medical jargon into language a smart non-scientist can understand.

3. WHAT THIS MEANS FOR RESEARCHERS (2-3 sentences):
Practical takeaway for someone considering ${peptide} in their protocol. Be balanced — note both promising findings and limitations.

4. EVIDENCE QUALITY: Rate the overall evidence as one of: "Strong", "Moderate", "Preliminary", or "Emerging" and explain why in one sentence.

Keep the tone informative, balanced, and honest about what the research does and doesn't show. Never overstate findings.`;

    const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 800,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    const claudeData = await claudeRes.json();
    const summary = claudeData.content?.map(b => b.text || '').join('') || 'Summary unavailable.';

    return res.status(200).json({
      peptide,
      studies: studies.map(s => ({
        pmid: s.pmid,
        title: s.title,
        journal: s.journal,
        year: s.year,
        firstAuthor: s.firstAuthor,
        url: `https://pubmed.ncbi.nlm.nih.gov/${s.pmid}/`,
      })),
      summary,
      totalFound: parseInt(searchData.esearchresult?.count || ids.length),
      fetchedAt: new Date().toISOString(),
    });

  } catch (err) {
    console.error('PubMed error:', err);
    return res.status(500).json({ error: 'Failed to fetch research data. Please try again.' });
  }
}
