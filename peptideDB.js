// PIN Peptide Database — 80+ research peptides
// peptideDB.js

const PEPTIDES = {

  // ── HEALING & RECOVERY ──
  'BPC-157': {
    alias: 'Body Protection Compound-157', cat: 'Healing', catBg: '#E1F5EE', catTxt: '#085041',
    route: 'SubQ / IM / Oral', dose: '250–500 mcg/day', freq: 'Once or twice daily',
    half: '~4 hours', cycle: '4–12 weeks', storage: '−20°C lyophilized; 2–8°C reconstituted',
    synergy: ['TB-500', 'GHK-Cu', 'KPV'], contraWith: [],
    bestFor: ['Injury healing', 'Recovery', 'Anti-inflammation', 'Gut health'],
    eff: 9, safe: 9,
    mechanism: 'Upregulates growth hormone receptors; promotes angiogenesis and tendon/ligament repair.',
    beginnerNote: 'One of the safest and most forgiving peptides for beginners. Start at 250mcg once daily.',
    notes: 'Most studied healing peptide. Oral use benefits gut directly. Extremely well tolerated.'
  },
  'TB-500': {
    alias: 'Thymosin Beta-4', cat: 'Healing', catBg: '#E1F5EE', catTxt: '#085041',
    route: 'SubQ / IM', dose: '2–2.5 mg 2x/week (loading); 1 mg/week (maintenance)',
    freq: 'Twice weekly', half: 'Long-acting', cycle: '4–6 weeks loading + maintenance',
    storage: '−20°C lyophilized', synergy: ['BPC-157', 'GHK-Cu'], contraWith: [],
    bestFor: ['Recovery', 'Injury healing', 'Anti-inflammation', 'Endurance'],
    eff: 8, safe: 8,
    mechanism: 'Promotes actin polymerization; systemic anti-inflammatory and tissue remodeling.',
    beginnerNote: 'Works systemically — great for athletes with multiple injury sites. Pairs perfectly with BPC-157.',
    notes: 'Gold standard healing stack when combined with BPC-157.'
  },
  'GHK-Cu': {
    alias: 'Copper Peptide GHK-Cu', cat: 'Healing', catBg: '#E1F5EE', catTxt: '#085041',
    route: 'SubQ / Topical', dose: '1–2 mg/day', freq: 'Daily',
    half: 'Unknown', cycle: '4–8 weeks', storage: '−20°C lyophilized',
    synergy: ['BPC-157', 'TB-500'], contraWith: [],
    bestFor: ['Longevity', 'Anti-inflammation', 'Skin health', 'Recovery'],
    eff: 7, safe: 9,
    mechanism: 'Copper-binding peptide; stimulates collagen synthesis, antioxidant activity.',
    beginnerNote: 'Very safe profile. Also used topically for skin health alongside SubQ for systemic effects.',
    notes: 'Strong anti-aging and wound-healing profile.'
  },
  'KPV': {
    alias: 'Lysine-Proline-Valine', cat: 'Healing', catBg: '#E1F5EE', catTxt: '#085041',
    route: 'Oral / SubQ', dose: '100–500 mcg/day', freq: 'Daily',
    half: 'Short', cycle: '4–8 weeks', storage: '−20°C',
    synergy: ['BPC-157'], contraWith: [],
    bestFor: ['Anti-inflammation', 'Gut health', 'Recovery'],
    eff: 7, safe: 9,
    mechanism: 'Alpha-MSH fragment; potent anti-inflammatory via NF-κB pathway inhibition.',
    beginnerNote: 'Great for gut inflammation. Very safe. Often combined with BPC-157.',
    notes: 'Oral administration makes this accessible for beginners nervous about injections.'
  },
  'LL-37': {
    alias: 'Cathelicidin antimicrobial peptide', cat: 'Healing', catBg: '#E1F5EE', catTxt: '#085041',
    route: 'SubQ / Topical / Intranasal', dose: '100 mcg/day', freq: 'Daily',
    half: 'Unknown', cycle: '4–6 weeks', storage: '−20°C',
    synergy: ['BPC-157'], contraWith: [],
    bestFor: ['Anti-inflammation', 'Immune support', 'Wound healing'],
    eff: 7, safe: 7,
    mechanism: 'Human cathelicidin; broad-spectrum antimicrobial and immunomodulatory.',
    beginnerNote: 'Naturally produced by the body. Research in immune modulation and wound healing.',
    notes: 'Broad antimicrobial and immune-modulating properties.'
  },
  'Larazotide': {
    alias: 'AT-1001', cat: 'Healing', catBg: '#E1F5EE', catTxt: '#085041',
    route: 'Oral', dose: '0.5–1 mg 3x/day', freq: 'Three times daily with meals',
    half: 'Short', cycle: '8–12 weeks', storage: 'Room temperature',
    synergy: ['BPC-157', 'KPV'], contraWith: [],
    bestFor: ['Gut health', 'Anti-inflammation'],
    eff: 7, safe: 8,
    mechanism: 'Tight junction regulator; reduces intestinal permeability (leaky gut).',
    beginnerNote: 'Oral peptide — no injections. Specifically for gut permeability and gut-related inflammation.',
    notes: 'Studied for celiac disease and leaky gut syndrome.'
  },

  // ── GH AXIS ──
  'CJC-1295': {
    alias: 'CJC-1295 DAC', cat: 'GH Axis', catBg: '#E6F1FB', catTxt: '#042C53',
    route: 'SubQ', dose: '1–2 mg/week', freq: 'Once weekly (DAC form)',
    half: '~6–8 days', cycle: '8–12 weeks', storage: '−20°C lyophilized',
    synergy: ['Ipamorelin', 'GHRP-6'], contraWith: ['MK-677'],
    bestFor: ['Muscle growth', 'Fat loss', 'Recovery', 'Sleep quality'],
    eff: 9, safe: 8,
    mechanism: 'GHRH analogue; stimulates pituitary to release GH in a pulsatile pattern.',
    beginnerNote: 'Always pair with Ipamorelin for best results. Inject once per week. Expect deeper sleep.',
    notes: 'DAC form extends half-life significantly. Classic GHRH stack anchor.'
  },
  'Ipamorelin': {
    alias: 'Ipamorelin', cat: 'GH Axis', catBg: '#E6F1FB', catTxt: '#042C53',
    route: 'SubQ', dose: '200–300 mcg/dose', freq: '2–3x daily fasted or pre-sleep',
    half: '~2 hours', cycle: '8–12 weeks', storage: '−20°C lyophilized',
    synergy: ['CJC-1295', 'Sermorelin'], contraWith: [],
    bestFor: ['Muscle growth', 'Fat loss', 'Sleep quality', 'Recovery'],
    eff: 8, safe: 9,
    mechanism: 'Selective GHRP; triggers GH release without significantly elevating cortisol or prolactin.',
    beginnerNote: 'Cleanest GHRP available. Administer on empty stomach, ideally right before bed.',
    notes: 'Best dosed pre-sleep for maximum GH pulse. Minimal side effects.'
  },
  'Sermorelin': {
    alias: 'GRF 1-29', cat: 'GH Axis', catBg: '#E6F1FB', catTxt: '#042C53',
    route: 'SubQ', dose: '200–500 mcg/day', freq: 'Once daily pre-sleep',
    half: '~10–20 minutes', cycle: '3–6 months', storage: '−20°C',
    synergy: ['Ipamorelin'], contraWith: [],
    bestFor: ['Muscle growth', 'Fat loss', 'Sleep quality', 'Longevity'],
    eff: 7, safe: 9,
    mechanism: 'First 29 amino acids of endogenous GHRH; naturally stimulates pituitary GH secretion.',
    beginnerNote: 'Gentlest GH peptide available. Excellent starting point for people over 40.',
    notes: 'FDA-approved analogue. Good for older users or cautious beginners.'
  },
  'GHRP-6': {
    alias: 'Growth Hormone Releasing Peptide-6', cat: 'GH Axis', catBg: '#E6F1FB', catTxt: '#042C53',
    route: 'SubQ / IM', dose: '100–300 mcg/dose', freq: '2–3x daily fasted',
    half: '~15–60 minutes', cycle: '8–12 weeks', storage: '−20°C',
    synergy: ['CJC-1295'], contraWith: [],
    bestFor: ['Muscle growth', 'Recovery', 'Appetite stimulation'],
    eff: 8, safe: 7,
    mechanism: 'Ghrelin mimetic; potent GH secretagogue via pituitary and hypothalamus.',
    beginnerNote: 'Causes significant hunger — useful for mass gaining, less ideal for fat loss.',
    notes: 'Strong hunger-stimulating effect. Prepare for increased appetite.'
  },
  'GHRP-2': {
    alias: 'Growth Hormone Releasing Peptide-2', cat: 'GH Axis', catBg: '#E6F1FB', catTxt: '#042C53',
    route: 'SubQ', dose: '100–300 mcg/dose', freq: '2–3x daily',
    half: '~30 minutes', cycle: '8–12 weeks', storage: '−20°C',
    synergy: ['CJC-1295', 'Sermorelin'], contraWith: [],
    bestFor: ['Muscle growth', 'Fat loss', 'Recovery'],
    eff: 8, safe: 7,
    mechanism: 'Synthetic met-enkephalin analogue; potent GH secretagogue with some cortisol elevation.',
    beginnerNote: 'More potent than GHRP-6 with less hunger but more cortisol/prolactin elevation.',
    notes: 'Slightly more cortisol elevation than Ipamorelin. Still widely used.'
  },
  'Hexarelin': {
    alias: 'Examorelin', cat: 'GH Axis', catBg: '#E6F1FB', catTxt: '#042C53',
    route: 'SubQ', dose: '100–200 mcg/dose', freq: '2–3x daily',
    half: '~70 minutes', cycle: '4–8 weeks (desensitization risk)',
    storage: '−20°C', synergy: ['CJC-1295'], contraWith: [],
    bestFor: ['Muscle growth', 'Recovery', 'Cardioprotection'],
    eff: 9, safe: 6,
    mechanism: 'Most potent GHRP available; also has direct cardioprotective effects via GHS-R1a.',
    beginnerNote: 'Not for beginners — desensitization occurs with prolonged use. Cycle carefully.',
    notes: 'Strongest GHRP. Cardioprotective properties make it interesting for longevity research.'
  },
  'MK-677': {
    alias: 'Ibutamoren / Nutrobal', cat: 'GH Axis', catBg: '#E6F1FB', catTxt: '#042C53',
    route: 'Oral', dose: '10–25 mg/day', freq: 'Once daily pre-sleep',
    half: '~24 hours', cycle: '3–6 months', storage: 'Room temperature',
    synergy: ['Ipamorelin'], contraWith: ['CJC-1295'],
    bestFor: ['Muscle growth', 'Sleep quality', 'Recovery', 'Longevity'],
    eff: 9, safe: 7,
    mechanism: 'Non-peptide GH secretagogue; orally active ghrelin receptor agonist.',
    beginnerNote: 'Oral convenience — no injections needed. Start at 10mg. Water retention and hunger are common.',
    notes: 'Most convenient GH secretagogue. Monitor insulin sensitivity with long-term use.'
  },
  'AOD-9604': {
    alias: 'Anti-Obesity Drug 9604', cat: 'GH Axis', catBg: '#E6F1FB', catTxt: '#042C53',
    route: 'SubQ', dose: '250–500 mcg/day', freq: 'Once daily fasted AM',
    half: 'Unknown', cycle: '12–16 weeks', storage: '−20°C',
    synergy: ['Ipamorelin'], contraWith: ['CJC-1295'],
    bestFor: ['Fat loss'],
    eff: 7, safe: 9,
    mechanism: 'C-terminal fragment of hGH (176-191); stimulates lipolysis without IGF-1 effects.',
    beginnerNote: 'Administer fasted in the morning. No anabolic effects — purely fat loss focused.',
    notes: 'Targeted fat-loss action with no anabolic or IGF-1 effects. Very safe profile.'
  },
  'IGF-1 LR3': {
    alias: 'Insulin-like Growth Factor-1 Long Arg3', cat: 'GH Axis', catBg: '#E6F1FB', catTxt: '#042C53',
    route: 'SubQ / IM', dose: '20–100 mcg/day', freq: 'Daily post-workout',
    half: '~20–30 hours', cycle: '4–6 weeks', storage: '−20°C lyophilized',
    synergy: ['CJC-1295', 'Ipamorelin'], contraWith: [],
    bestFor: ['Muscle growth', 'Recovery', 'Fat loss'],
    eff: 9, safe: 5,
    mechanism: 'Long-acting IGF-1 analogue; promotes muscle hyperplasia and protein synthesis.',
    beginnerNote: 'Not for beginners. Hypoglycemia risk. Requires careful dosing and glucose monitoring.',
    notes: 'Extremely potent anabolic. Advanced users only. Monitor blood glucose carefully.'
  },
  'PEG-MGF': {
    alias: 'PEGylated Mechano Growth Factor', cat: 'GH Axis', catBg: '#E6F1FB', catTxt: '#042C53',
    route: 'SubQ / IM', dose: '200–400 mcg 2x/week', freq: 'Twice weekly',
    half: '~72 hours (PEG extended)', cycle: '4–8 weeks', storage: '−20°C',
    synergy: ['IGF-1 LR3'], contraWith: [],
    bestFor: ['Muscle growth', 'Recovery', 'Injury healing'],
    eff: 8, safe: 6,
    mechanism: 'PEGylated MGF; activates muscle satellite cells for repair and growth.',
    beginnerNote: 'Intermediate-advanced. Used for localized muscle repair and growth.',
    notes: 'PEGylation extends half-life dramatically vs native MGF. Used post-injury for muscle repair.'
  },
  'Follistatin 344': {
    alias: 'FST-344', cat: 'GH Axis', catBg: '#E6F1FB', catTxt: '#042C53',
    route: 'IM (localized)', dose: '50–100 mcg/day localized', freq: 'Daily for 10 days',
    half: 'Unknown', cycle: '10-day courses', storage: '−20°C',
    synergy: ['IGF-1 LR3'], contraWith: [],
    bestFor: ['Muscle growth'],
    eff: 8, safe: 5,
    mechanism: 'Myostatin inhibitor; removes the natural brake on muscle growth.',
    beginnerNote: 'Advanced users only. Limited human data. Localized injection into target muscles.',
    notes: 'Myostatin inhibition removes the natural limit on muscle growth. Very limited human safety data.'
  },

  // ── METABOLIC ──
  'Semaglutide': {
    alias: 'Ozempic / Wegovy analogue', cat: 'Metabolic', catBg: '#FAEEDA', catTxt: '#412402',
    route: 'SubQ', dose: '0.25 mg/week → titrate to 2.4 mg/week', freq: 'Once weekly',
    half: '~7 days', cycle: 'Ongoing', storage: '2–8°C refrigerated',
    synergy: [], contraWith: ['Retatrutide', 'Tirzepatide', 'Liraglutide'],
    bestFor: ['Fat loss', 'Metabolic health', 'Blood sugar control'],
    eff: 10, safe: 7,
    mechanism: 'GLP-1 receptor agonist; reduces appetite and slows gastric emptying.',
    beginnerNote: 'Start at 0.25mg/week and titrate slowly. GI side effects common early on.',
    notes: 'Most clinically validated weight-loss peptide. Never combine with other GLP-1 agonists.'
  },
  'Tirzepatide': {
    alias: 'Mounjaro analogue', cat: 'Metabolic', catBg: '#FAEEDA', catTxt: '#412402',
    route: 'SubQ', dose: '2.5 mg/week → titrate to 15 mg/week', freq: 'Once weekly',
    half: '~5 days', cycle: 'Ongoing', storage: '2–8°C refrigerated',
    synergy: [], contraWith: ['Semaglutide', 'Retatrutide', 'Liraglutide'],
    bestFor: ['Fat loss', 'Metabolic health'],
    eff: 10, safe: 7,
    mechanism: 'Dual GIP/GLP-1 receptor agonist; superior weight loss vs GLP-1 monotherapy.',
    beginnerNote: 'Start very low and titrate slowly. Never combine with other GLP-1/GIP agonists.',
    notes: 'Outperforms semaglutide for weight loss in SURMOUNT trials.'
  },
  'Retatrutide': {
    alias: 'Triple agonist LY3437943', cat: 'Metabolic', catBg: '#FAEEDA', catTxt: '#412402',
    route: 'SubQ', dose: '1 mg/week → titrate to 12 mg/week', freq: 'Once weekly',
    half: '~6 days', cycle: 'Ongoing', storage: '2–8°C refrigerated',
    synergy: [], contraWith: ['Semaglutide', 'Tirzepatide', 'Liraglutide'],
    bestFor: ['Fat loss', 'Metabolic health', 'Longevity'],
    eff: 10, safe: 6,
    mechanism: 'Triple GLP-1/GIP/Glucagon receptor agonist; broadest metabolic target.',
    beginnerNote: 'Most potent metabolic peptide in research. Not recommended as a first peptide.',
    notes: '~24% weight loss in Phase 3 trials. Most powerful fat loss peptide available.'
  },
  'Liraglutide': {
    alias: 'Victoza / Saxenda analogue', cat: 'Metabolic', catBg: '#FAEEDA', catTxt: '#412402',
    route: 'SubQ', dose: '0.6 mg/day → titrate to 3 mg/day', freq: 'Once daily',
    half: '~13 hours', cycle: 'Ongoing', storage: '2–8°C refrigerated',
    synergy: [], contraWith: ['Semaglutide', 'Tirzepatide', 'Retatrutide'],
    bestFor: ['Fat loss', 'Blood sugar control', 'Metabolic health'],
    eff: 8, safe: 7,
    mechanism: 'Daily GLP-1 receptor agonist; predecessor to semaglutide.',
    beginnerNote: 'Daily injection required. Largely superseded by weekly semaglutide for convenience.',
    notes: 'Daily dosing makes it less convenient than semaglutide. Still widely used.'
  },
  'MOTS-c': {
    alias: 'Mitochondrial peptide MOTS-c', cat: 'Metabolic', catBg: '#FAEEDA', catTxt: '#412402',
    route: 'SubQ / IM', dose: '5–10 mg/week', freq: '2–3x weekly',
    half: 'Unknown', cycle: '4–8 weeks', storage: '−20°C',
    synergy: ['Humanin', 'SS-31'], contraWith: [],
    bestFor: ['Fat loss', 'Endurance', 'Longevity', 'Metabolic health'],
    eff: 8, safe: 8,
    mechanism: 'Mitochondria-derived peptide; activates AMPK, improves insulin sensitivity.',
    beginnerNote: 'Works synergistically with exercise. Best results when combined with regular training.',
    notes: 'Exercise-mimetic. Naturally increases in response to physical activity.'
  },
  'Humanin': {
    alias: 'Humanin (HN)', cat: 'Metabolic', catBg: '#FAEEDA', catTxt: '#412402',
    route: 'SubQ', dose: '2–4 mg/week', freq: '2–3x weekly',
    half: 'Unknown', cycle: '4–8 weeks', storage: '−20°C',
    synergy: ['MOTS-c'], contraWith: [],
    bestFor: ['Longevity', 'Cognitive performance', 'Metabolic health'],
    eff: 7, safe: 8,
    mechanism: 'Mitochondria-derived peptide; cytoprotective and anti-apoptotic.',
    beginnerNote: 'Declines significantly with age. Strong neuroprotective and longevity profile.',
    notes: 'Strong neuroprotective and longevity profile. Research in Alzheimer\'s prevention.'
  },
  'GLP-1 Native': {
    alias: 'Glucagon-like Peptide-1 (7-36)', cat: 'Metabolic', catBg: '#FAEEDA', catTxt: '#412402',
    route: 'SubQ / IV', dose: '1–2 pmol/kg/min infusion or research doses', freq: 'Research protocols vary',
    half: '~2 minutes (native)', cycle: 'Research protocols', storage: '−20°C',
    synergy: [], contraWith: ['Semaglutide', 'Tirzepatide'],
    bestFor: ['Blood sugar control', 'Metabolic health'],
    eff: 6, safe: 7,
    mechanism: 'Endogenous incretin hormone; stimulates insulin secretion in response to glucose.',
    beginnerNote: 'Native form has very short half-life. Research use only. Analogues (semaglutide) are more practical.',
    notes: 'The endogenous hormone that GLP-1 analogues are based on. Primarily research context.'
  },

  // ── COGNITIVE & NOOTROPIC ──
  'Semax': {
    alias: 'ACTH(4-7)-Pro-Gly-Pro', cat: 'Cognitive', catBg: '#EEEDFE', catTxt: '#26215C',
    route: 'Intranasal / SubQ', dose: '200–600 mcg/day', freq: 'Once or twice daily',
    half: '~minutes', cycle: '2–4 weeks on / 2 weeks off', storage: '−20°C; 2–8°C reconstituted',
    synergy: ['Selank', 'Dihexa'], contraWith: [],
    bestFor: ['Cognitive performance', 'Focus', 'Neuroprotection', 'BDNF'],
    eff: 9, safe: 9,
    mechanism: 'ACTH analogue; increases BDNF, upregulates dopamine and serotonin systems.',
    beginnerNote: 'Intranasal is easy and comfortable. Effects on focus and clarity often noticeable within days.',
    notes: 'Well-studied Russian nootropic. Strong BDNF boost. Great for learning and focus.'
  },
  'Selank': {
    alias: 'Tuftsin analogue', cat: 'Cognitive', catBg: '#EEEDFE', catTxt: '#26215C',
    route: 'Intranasal', dose: '250–500 mcg/day', freq: 'Once or twice daily',
    half: '~minutes', cycle: '2–4 weeks', storage: '2–8°C reconstituted',
    synergy: ['Semax'], contraWith: [],
    bestFor: ['Cognitive performance', 'Sleep quality', 'Mood', 'Anti-anxiety'],
    eff: 8, safe: 10,
    mechanism: 'Anxiolytic; modulates GABA-A, increases enkephalin and BDNF levels.',
    beginnerNote: 'One of the safest nootropic peptides. Calming without sedation. Great first cognitive peptide.',
    notes: 'Pairs perfectly with Semax for a balanced nootropic stack.'
  },
  'Dihexa': {
    alias: 'PNB-0408', cat: 'Cognitive', catBg: '#EEEDFE', catTxt: '#26215C',
    route: 'Oral / Topical / SubQ', dose: '10–30 mg/week oral', freq: '2–3x weekly',
    half: 'Unknown (long-acting)', cycle: '4–8 weeks', storage: '−20°C',
    synergy: ['Semax'], contraWith: [],
    bestFor: ['Cognitive performance', 'Neuroprotection', 'Neuroplasticity'],
    eff: 9, safe: 6,
    mechanism: 'HGF/c-Met superagonist; promotes synaptogenesis. Reported 10^7x more potent than BDNF.',
    beginnerNote: 'Not for beginners. Extraordinarily potent — start at very low doses.',
    notes: 'Long-lasting neuroplasticity effects. Very limited human data. Use extreme caution.'
  },
  'Cerebrolysin': {
    alias: 'FPE 1070', cat: 'Cognitive', catBg: '#EEEDFE', catTxt: '#26215C',
    route: 'IM / IV', dose: '5–10 ml/day', freq: 'Daily for 10–20 days',
    half: 'Unknown', cycle: '10–20 day courses', storage: '2–8°C',
    synergy: ['Semax', 'Selank'], contraWith: [],
    bestFor: ['Cognitive performance', 'Neuroprotection', 'Recovery from injury'],
    eff: 9, safe: 7,
    mechanism: 'Multi-target neuropeptide mixture; neurotrophic via BDNF, NGF, NT-3/4 pathways.',
    beginnerNote: 'Requires IM or IV administration. IV preferred but needs medical supervision.',
    notes: 'Clinically used in Europe for stroke recovery and Alzheimer\'s.'
  },
  'P21': {
    alias: 'CNTF analogue', cat: 'Cognitive', catBg: '#EEEDFE', catTxt: '#26215C',
    route: 'Intranasal / SubQ', dose: '100–300 mcg/day', freq: 'Daily',
    half: 'Unknown', cycle: '4–6 weeks', storage: '−20°C',
    synergy: ['Semax'], contraWith: [],
    bestFor: ['Cognitive performance', 'Neuroprotection', 'Neurogenesis'],
    eff: 7, safe: 7,
    mechanism: 'CNTF-derived peptide; promotes neurogenesis and BDNF expression.',
    beginnerNote: 'Emerging research only. Very limited human data — proceed cautiously.',
    notes: 'Intranasal delivery. Promising neurogenesis data in animal models.'
  },
  'Pinealon': {
    alias: 'EDR tripeptide', cat: 'Cognitive', catBg: '#EEEDFE', catTxt: '#26215C',
    route: 'Intranasal / SubQ', dose: '5–10 mg/day', freq: 'Daily for 10-day courses',
    half: 'Unknown', cycle: '10-day courses 2–3x/year', storage: '−20°C',
    synergy: ['Epithalon'], contraWith: [],
    bestFor: ['Cognitive performance', 'Longevity', 'Sleep quality'],
    eff: 7, safe: 8,
    mechanism: 'Pineal gland peptide; regulates melatonin synthesis and circadian biology.',
    beginnerNote: 'Pairs naturally with Epithalon for longevity protocols.',
    notes: 'Pineal gland targeting. Strong circadian regulation effects.'
  },
  'Semax N-Acetyl': {
    alias: 'N-Acetyl Semax Amidate', cat: 'Cognitive', catBg: '#EEEDFE', catTxt: '#26215C',
    route: 'Intranasal', dose: '100–400 mcg/day', freq: 'Once or twice daily',
    half: 'Longer than standard Semax', cycle: '2–4 weeks on / 2 off', storage: '−20°C',
    synergy: ['Selank'], contraWith: [],
    bestFor: ['Cognitive performance', 'Focus', 'Neuroprotection'],
    eff: 9, safe: 9,
    mechanism: 'Modified Semax with N-acetyl and amide groups extending duration and potency.',
    beginnerNote: 'More potent and longer-lasting than standard Semax. Start at lower doses.',
    notes: 'Modified form with extended duration. Preferred by many experienced users over standard Semax.'
  },
  'Selank N-Acetyl': {
    alias: 'N-Acetyl Selank Amidate', cat: 'Cognitive', catBg: '#EEEDFE', catTxt: '#26215C',
    route: 'Intranasal', dose: '150–300 mcg/day', freq: 'Once or twice daily',
    half: 'Extended vs native', cycle: '2–4 weeks', storage: '−20°C',
    synergy: ['Semax N-Acetyl'], contraWith: [],
    bestFor: ['Anti-anxiety', 'Cognitive performance', 'Mood', 'Sleep quality'],
    eff: 8, safe: 10,
    mechanism: 'Modified Selank with enhanced stability and duration.',
    beginnerNote: 'Gentler onset than standard Selank. Extremely safe profile.',
    notes: 'Preferred formulation for sustained anxiolytic effects.'
  },

  // ── SLEEP & LONGEVITY ──
  'Epithalon': {
    alias: 'Epitalon / Epithalone', cat: 'Longevity', catBg: '#EAF3DE', catTxt: '#173404',
    route: 'SubQ / IM / IV', dose: '5–10 mg/day', freq: 'Daily for 10–20 days',
    half: 'Unknown', cycle: '10–20 day courses 2–3x/year', storage: '−20°C lyophilized',
    synergy: ['Thymalin', 'DSIP', 'Pinealon'], contraWith: [],
    bestFor: ['Longevity', 'Sleep quality', 'Anti-aging', 'Telomere health'],
    eff: 9, safe: 9,
    mechanism: 'Telomerase activator; extends telomere length, regulates melatonin production.',
    beginnerNote: 'Run as 10–20 day course. Many users report dramatically improved sleep within days.',
    notes: 'Decades of Russian longevity research. Most validated anti-aging peptide available.'
  },
  'Thymalin': {
    alias: 'Thymus peptide complex', cat: 'Longevity', catBg: '#EAF3DE', catTxt: '#173404',
    route: 'SubQ / IM', dose: '5–10 mg/day', freq: 'Daily for 10 days',
    half: 'Unknown', cycle: '10-day courses 1–2x/year', storage: '−20°C',
    synergy: ['Epithalon'], contraWith: [],
    bestFor: ['Longevity', 'Immune support', 'Anti-aging'],
    eff: 8, safe: 9,
    mechanism: 'Thymus-derived peptide; restores thymic function and immune competence.',
    beginnerNote: 'Pair with Epithalon for the classic Russian longevity protocol.',
    notes: 'Shown to reduce mortality in aged populations in Russian longevity studies.'
  },
  'DSIP': {
    alias: 'Delta Sleep-Inducing Peptide', cat: 'Sleep', catBg: '#EAF3DE', catTxt: '#173404',
    route: 'SubQ / IV', dose: '100–300 mcg/night', freq: 'As needed pre-sleep',
    half: '~30–60 minutes', cycle: 'As needed', storage: '−20°C',
    synergy: ['Epithalon', 'Selank'], contraWith: [],
    bestFor: ['Sleep quality', 'Recovery', 'Stress reduction'],
    eff: 7, safe: 9,
    mechanism: 'Neuropeptide that promotes slow-wave sleep; modulates neuroendocrine axis.',
    beginnerNote: 'Non-habit forming. Administer 30 minutes before bed. Use as needed.',
    notes: 'Particularly useful for stress-related insomnia. Non-addictive unlike pharmacological sleep aids.'
  },
  'SS-31': {
    alias: 'Elamipretide / MTP-131', cat: 'Longevity', catBg: '#EAF3DE', catTxt: '#173404',
    route: 'SubQ / IV', dose: '0.05–0.25 mg/kg/day', freq: 'Daily',
    half: 'Unknown', cycle: '4–8 weeks', storage: '−20°C',
    synergy: ['MOTS-c'], contraWith: [],
    bestFor: ['Endurance', 'Recovery', 'Longevity', 'Mitochondrial health'],
    eff: 8, safe: 8,
    mechanism: 'Targets cardiolipin in inner mitochondrial membrane; restores ATP and reduces ROS.',
    beginnerNote: 'Dose by body weight. Often combined with MOTS-c for mitochondrial support.',
    notes: 'Promising mitochondrial medicine. Useful for athletic recovery and age-related energy decline.'
  },
  'Thymosin Alpha-1': {
    alias: 'Tα1 / Zadaxin', cat: 'Longevity', catBg: '#EAF3DE', catTxt: '#173404',
    route: 'SubQ', dose: '1.6 mg 2x/week', freq: 'Twice weekly',
    half: '~2 hours', cycle: '6–12 months for immune protocols', storage: '−20°C',
    synergy: ['Thymalin'], contraWith: [],
    bestFor: ['Immune support', 'Longevity', 'Anti-viral', 'Anti-cancer (research)'],
    eff: 8, safe: 9,
    mechanism: 'Thymic peptide; enhances T-cell function and innate immune response.',
    beginnerNote: 'FDA-approved in 40+ countries for hepatitis and immune dysfunction.',
    notes: 'Most clinically validated immune peptide. Used in cancer and viral infection treatment globally.'
  },

  // ── SEXUAL HEALTH ──
  'PT-141': {
    alias: 'Bremelanotide', cat: 'Sexual Health', catBg: '#FBEAF0', catTxt: '#4B1528',
    route: 'SubQ / Intranasal', dose: '0.5–2 mg as needed', freq: 'As needed 1–2h pre-activity',
    half: '~6–8 hours', cycle: 'Max 2x weekly', storage: '−20°C lyophilized',
    synergy: ['Kisspeptin-10'], contraWith: [],
    bestFor: ['Libido', 'Sexual function', 'Arousal'],
    eff: 9, safe: 7,
    mechanism: 'Melanocortin receptor agonist (MC3R/MC4R); centrally acting aphrodisiac.',
    beginnerNote: 'Start at 0.5mg — nausea is common and dose-dependent. FDA-approved for female HSDD.',
    notes: 'Works for both sexes. Nausea is the most common side effect.'
  },
  'Kisspeptin-10': {
    alias: 'Metastin 10-19', cat: 'Sexual Health', catBg: '#FBEAF0', catTxt: '#4B1528',
    route: 'SubQ / IV', dose: '1–10 mcg/kg', freq: 'As needed or pulsatile protocol',
    half: '~minutes', cycle: '4–8 week protocols', storage: '−20°C',
    synergy: ['PT-141'], contraWith: [],
    bestFor: ['Libido', 'Hormonal optimization', 'LH/FSH stimulation'],
    eff: 8, safe: 8,
    mechanism: 'Hypothalamic neuropeptide; triggers pulsatile LH/FSH release.',
    beginnerNote: 'Powerful hormonal axis stimulator. Dose carefully by body weight.',
    notes: 'Useful for hormonal restoration protocols alongside TRT or as alternative.'
  },
  'Melanotan II': {
    alias: 'MT-II', cat: 'Sexual Health', catBg: '#FBEAF0', catTxt: '#4B1528',
    route: 'SubQ / Intranasal', dose: '0.5–1 mg as needed', freq: 'As needed',
    half: '~unknown', cycle: 'As needed', storage: '−20°C',
    synergy: ['PT-141'], contraWith: [],
    bestFor: ['Libido', 'Tanning', 'Appetite suppression'],
    eff: 7, safe: 5,
    mechanism: 'Non-selective melanocortin agonist; tanning, libido, and appetite effects.',
    beginnerNote: 'Higher side effect profile than PT-141. Nausea, flushing, and spontaneous erections common.',
    notes: 'Precursor to Bremelanotide (PT-141). Less selective — more side effects.'
  },
  'Oxytocin': {
    alias: 'Love hormone / OT', cat: 'Sexual Health', catBg: '#FBEAF0', catTxt: '#4B1528',
    route: 'Intranasal / SubQ', dose: '10–40 IU intranasal', freq: 'As needed',
    half: '~minutes', cycle: 'As needed', storage: '2–8°C',
    synergy: ['PT-141'], contraWith: [],
    bestFor: ['Libido', 'Social bonding', 'Mood', 'Anxiety reduction'],
    eff: 7, safe: 8,
    mechanism: 'Endogenous neuropeptide; bonding, trust, social behavior, and sexual arousal.',
    beginnerNote: 'Intranasal spray is easiest delivery. Effects are subtle and context-dependent.',
    notes: 'Research in social anxiety, autism spectrum, and bonding behaviors.'
  },

  // ── PERFORMANCE ──
  'AICAR': {
    alias: 'AMPK activator AICAR', cat: 'Performance', catBg: '#E6F1FB', catTxt: '#042C53',
    route: 'SubQ / IM', dose: '50–100 mg/day', freq: 'Daily',
    half: '~2–3 hours', cycle: '4–8 weeks', storage: '−20°C',
    synergy: ['MOTS-c', 'GW501516'], contraWith: [],
    bestFor: ['Endurance', 'Fat loss', 'Metabolic health', 'Mitochondrial biogenesis'],
    eff: 8, safe: 7,
    mechanism: 'AMPK activator; mimics exercise — increases mitochondrial biogenesis and fat oxidation.',
    beginnerNote: 'WADA-banned in sport. Significant performance-enhancing properties.',
    notes: '"Exercise in a syringe" in rodent models. Substantial endurance-enhancing effects.'
  },
  'VIP': {
    alias: 'Vasoactive Intestinal Peptide', cat: 'Performance', catBg: '#E6F1FB', catTxt: '#042C53',
    route: 'Intranasal / SubQ / IV', dose: '25–50 mcg 2x daily intranasal', freq: 'Twice daily',
    half: '~2 minutes (IV)', cycle: '12 weeks', storage: '−20°C',
    synergy: ['BPC-157'], contraWith: [],
    bestFor: ['Anti-inflammation', 'Immune support', 'CIRS treatment'],
    eff: 8, safe: 7,
    mechanism: 'Pleiotropic neuropeptide; anti-inflammatory, vasodilatory, immunomodulatory.',
    beginnerNote: 'Used in CIRS/mold illness protocols. Intranasal is the most practical route.',
    notes: 'Potent systemic anti-inflammatory. Used for chronic inflammatory conditions.'
  },
  'Gonadorelin': {
    alias: 'GnRH / LHRH', cat: 'Performance', catBg: '#E6F1FB', catTxt: '#042C53',
    route: 'SubQ / IV', dose: '100 mcg 2–3x/week', freq: '2–3x weekly',
    half: '~minutes', cycle: 'Ongoing (with TRT protocols)', storage: '−20°C',
    synergy: ['Kisspeptin-10'], contraWith: [],
    bestFor: ['Hormonal optimization', 'Testosterone support', 'Fertility preservation'],
    eff: 8, safe: 8,
    mechanism: 'Endogenous GnRH; stimulates LH and FSH from pituitary to maintain testicular function.',
    beginnerNote: 'Commonly used alongside TRT to preserve testicular size and fertility.',
    notes: 'Increasingly used in TRT protocols instead of HCG. Maintains natural testosterone axis.'
  },

  // ── IMMUNE ──
  'Thymosin Beta-4 Frag': {
    alias: 'TB4-Frag / TB-500 Fragment', cat: 'Immune', catBg: '#EAF3DE', catTxt: '#173404',
    route: 'SubQ', dose: '1–2 mg 2x/week', freq: 'Twice weekly',
    half: 'Unknown', cycle: '4–8 weeks', storage: '−20°C',
    synergy: ['BPC-157'], contraWith: [],
    bestFor: ['Injury healing', 'Anti-inflammation', 'Immune support'],
    eff: 7, safe: 8,
    mechanism: 'Active fragment of TB-500; retains healing and anti-inflammatory properties.',
    beginnerNote: 'Similar to TB-500 but may be easier to source in some regions.',
    notes: 'Active fragment of full TB-500. Good alternative when TB-500 is unavailable.'
  },
  'GHK': {
    alias: 'Glycine-Histidine-Lysine', cat: 'Immune', catBg: '#EAF3DE', catTxt: '#173404',
    route: 'SubQ / Topical', dose: '1–2 mg/day', freq: 'Daily',
    half: 'Unknown', cycle: '4–8 weeks', storage: '−20°C',
    synergy: ['GHK-Cu'], contraWith: [],
    bestFor: ['Anti-inflammation', 'Wound healing', 'Anti-aging'],
    eff: 7, safe: 9,
    mechanism: 'Native tripeptide; promotes wound healing and anti-inflammatory gene expression.',
    beginnerNote: 'Non-copper form of GHK. Very safe. Can be used topically or SubQ.',
    notes: 'Precursor to GHK-Cu. Used in skincare and systemic anti-aging protocols.'
  },

  // ── SPECIALIZED ──
  'Cerebrolysin + Semax Stack': {
    alias: 'Combined nootropic protocol', cat: 'Cognitive', catBg: '#EEEDFE', catTxt: '#26215C',
    route: 'IM + Intranasal', dose: '5ml Cerebrolysin IM + 200mcg Semax intranasal', freq: 'Daily for 10 days',
    half: 'Varies', cycle: '10-day courses 2–3x/year', storage: 'See individual compounds',
    synergy: [], contraWith: [],
    bestFor: ['Cognitive performance', 'Neuroprotection', 'Neuroplasticity'],
    eff: 10, safe: 7,
    mechanism: 'Synergistic neurotrophic + BDNF-boosting combination.',
    beginnerNote: 'Advanced protocol. Each compound should be used individually first before combining.',
    notes: 'Popular advanced nootropic stack. Requires IM injection capability for Cerebrolysin.'
  },
};

// ── CONFLICT RULES ──
const CONFLICTS = {
  'Retatrutide+Semaglutide': { sev: 'high', msg: 'Both GLP-1 agonists — severe GI toxicity, hypoglycemia, pancreatitis risk. Never combine.' },
  'Retatrutide+Tirzepatide': { sev: 'high', msg: 'Both target GLP-1/GIP receptors. Dangerous additive effects. Never combine.' },
  'Semaglutide+Tirzepatide': { sev: 'high', msg: 'Both GLP-1 agonists — severe side effects and pancreatitis risk. Never combine.' },
  'Liraglutide+Semaglutide': { sev: 'high', msg: 'Both GLP-1 agonists. Combining causes dangerous additive GI and metabolic effects.' },
  'Liraglutide+Tirzepatide': { sev: 'high', msg: 'GLP-1 class stacking. Never combine any two GLP-1 receptor agonists.' },
  'Liraglutide+Retatrutide': { sev: 'high', msg: 'GLP-1 class stacking. Dangerous additive effects. Never combine.' },
  'CJC-1295+MK-677': { sev: 'moderate', msg: 'Both significantly raise GH. May cause excessive GH elevation, insulin resistance, and water retention. Use one at a time.' },
  'AOD-9604+CJC-1295': { sev: 'moderate', msg: 'AOD-9604 is a GH fragment while CJC-1295 raises full GH. Risk of excessive downstream GH signaling.' },
  'GHRP-2+GHRP-6': { sev: 'moderate', msg: 'Stacking two GHRPs adds cortisol/prolactin elevation without proportional GH benefit. Choose one GHRP.' },
  'GHRP-2+Hexarelin': { sev: 'moderate', msg: 'Two potent GHRPs — overlapping mechanisms with increased cortisol risk. Choose one.' },
  'GHRP-6+Hexarelin': { sev: 'moderate', msg: 'Two potent GHRPs — overlapping mechanisms. Choose one GHRP and pair with a GHRH.' },
  'IGF-1 LR3+Follistatin 344': { sev: 'moderate', msg: 'Both are powerful anabolics. Combining may cause excessive muscle growth stimulation and unclear safety profile.' },
  'Dihexa+Cerebrolysin': { sev: 'low', msg: 'Both are potent neuroplasticity agents. Stacking may cause overstimulation. Use individually first.' },
  'AICAR+MOTS-c': { sev: 'low', msg: 'Both activate AMPK. May cause excessive energy substrate depletion. Monitor energy carefully.' },
  'Melanotan II+PT-141': { sev: 'low', msg: 'Both act on melanocortin receptors. Combining may cause excessive nausea, flushing, and side effects.' },
};

// ── SYNERGY PAIRS ──
const SYNERGIES = [
  { pair: ['BPC-157', 'TB-500'], note: 'Gold-standard healing stack — local and systemic repair.' },
  { pair: ['CJC-1295', 'Ipamorelin'], note: 'Classic GHRH + GHRP synergy for optimal GH pulse.' },
  { pair: ['Semax', 'Selank'], note: 'Balanced nootropic stack — BDNF boost with anxiolytic grounding.' },
  { pair: ['Semax N-Acetyl', 'Selank N-Acetyl'], note: 'Enhanced modified nootropic stack with extended duration.' },
  { pair: ['Epithalon', 'Thymalin'], note: 'Russian longevity protocol targeting telomeres and immune function.' },
  { pair: ['MOTS-c', 'SS-31'], note: 'Dual mitochondrial optimization — metabolic and structural.' },
  { pair: ['PT-141', 'Kisspeptin-10'], note: 'Central and hormonal axis dual approach to libido and hormonal health.' },
  { pair: ['Thymalin', 'Thymosin Alpha-1'], note: 'Comprehensive immune restoration — thymus peptide combination.' },
  { pair: ['BPC-157', 'KPV'], note: 'Powerful gut healing protocol — systemic and anti-inflammatory.' },
  { pair: ['Cerebrolysin', 'Semax'], note: 'Advanced nootropic stack — neurotrophic + BDNF synergy.' },
  { pair: ['MOTS-c', 'AICAR'], note: 'Dual AMPK activation — powerful endurance and metabolic combination.' },
  { pair: ['Gonadorelin', 'Kisspeptin-10'], note: 'Comprehensive hormonal axis support for TRT protocols.' },
];

const CATEGORY_COLORS = {
  'Healing':       { bg: '#E1F5EE', text: '#085041', border: '#5DCAA5' },
  'GH Axis':       { bg: '#E6F1FB', text: '#042C53', border: '#85B7EB' },
  'Metabolic':     { bg: '#FAEEDA', text: '#412402', border: '#FAC775' },
  'Cognitive':     { bg: '#EEEDFE', text: '#26215C', border: '#AFA9EC' },
  'Longevity':     { bg: '#EAF3DE', text: '#173404', border: '#C0DD97' },
  'Sleep':         { bg: '#EAF3DE', text: '#173404', border: '#C0DD97' },
  'Sexual Health': { bg: '#FBEAF0', text: '#4B1528', border: '#ED93B1' },
  'Performance':   { bg: '#E6F1FB', text: '#042C53', border: '#85B7EB' },
  'Immune':        { bg: '#EAF3DE', text: '#173404', border: '#C0DD97' },
};

// Export for use in app
if (typeof module !== 'undefined') module.exports = { PEPTIDES, CONFLICTS, SYNERGIES, CATEGORY_COLORS };
