import Industry from '../models/Industry.js';

// Deep default fallback data
const FALLBACK_INDUSTRIES = [
  {
    slug: 'pharma',
    title: 'Pharmaceuticals',
    tagline: 'Enterprise-grade cloud tools for small-molecule therapeutic discovery and synthesis.',
    description: 'We orchestrate data for rigorous regulatory compliance, GxP tracking, and formulation analytics. Accelerate clinical trials while retaining strict GxP manufacturing data standards.',
    heroImage: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800',
    accentColor: '#0A2F5C', // Deep navy theme accent
    painPoints: [
      'Disjointed data streams across discovery and manufacturing pipelines.',
      'Complex FDA and EMA dynamic compliance tracking for chemistry records.',
      'Manual, error-prone data audits leading to delayed batch releases.'
    ],
    solutions: [
      'Centralized GxP directory indexing for automated batch record lineage.',
      'Unified data pipelines connecting experimental drug compounds to active ingredients catalog.',
      'Automated audit trials designed with immutable ledger technology.'
    ],
    relatedProducts: ['cGxP.Directory', 'cGxP.Jobs', 'cGxP.Wire']
  },
  {
    slug: 'biopharma',
    title: 'Biopharmaceuticals',
    tagline: 'Powering cellular and genomic research with unified bioinformatics structures.',
    description: 'Biopharmaceutical synthesis demands deep clinical tracking. We integrate genomic databases, bioreactor sensor logs, and assay results into standard data models.',
    heroImage: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=800',
    accentColor: '#00C4B4', // Teal theme accent
    painPoints: [
      'Scale-up discrepancies from research assays to massive bioreactors.',
      'Raw DNA sequencing data silos that delay therapeutic target identification.',
      'High operational costs due to lack of real-time monitoring inside cleanrooms.'
    ],
    solutions: [
      'Vast clinical research datasets optimized for fast query execution.',
      'Predictive models forecasting protein folding rates and stability variables.',
      'Integration layers for connecting high-throughput screening outputs to analysis platforms.'
    ],
    relatedProducts: ['cGxP.Directory', 'cGxP.Wire']
  },
  {
    slug: 'meddev',
    title: 'Medical Devices',
    tagline: 'IoT sensor synchronization and robust compliance for embedded medical technologies.',
    description: 'From pacemakers to diagnostic imagery, medical devices require strict quality control systems. We specialize in dynamic telemetry parsing and GxP validation tools.',
    heroImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
    accentColor: '#F4A900', // Amber theme accent
    painPoints: [
      'Post-market surveillance data scattering across thousands of clinical logs.',
      'Validating real-time firmware data flows against FDA Class II and III requirements.',
      'Fragmented engineering blueprints and quality records under ISO 13485.'
    ],
    solutions: [
      'Dynamic sensor pipelines designed to parse remote patient monitoring device output.',
      'Automated device historical file generation mapping each design alteration.',
      'Real-time anomaly alarm triggers connecting clinical telemetry to health support teams.'
    ],
    relatedProducts: ['cGxP.Directory', 'cGxP.Jobs']
  },
  {
    slug: 'veterinary',
    title: 'Veterinary Medicine',
    tagline: 'Translating human health science breakthroughs to veterinary clinical applications.',
    description: 'We connect veterinary trials, veterinary drug approvals, and companion animal diagnostics into centralized databases, simplifying animal health workflows.',
    heroImage: 'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=800',
    accentColor: '#10B981', // Emerald green theme accent
    painPoints: [
      'Fragmented veterinary clinical trial studies and case record sheets.',
      'Poor cross-compatibility between human active pharmaceutical ingredient logs and animal drug formulations.',
      'Slow reporting times for companion animal clinical studies.'
    ],
    solutions: [
      'Dynamic veterinary trial registries tracking patient parameters in real-time.',
      'Comprehensive comparative drug mapping tables linking compound effects across species.',
      'Standardized diagnostic telemetry APIs for vet practices and animal research centers.'
    ],
    relatedProducts: ['cGxP.Directory', 'cGxP.Wire']
  },
  {
    slug: 'cosmetics',
    title: 'Cosmetics & Personal Care',
    tagline: 'Safety formulation archives and trace-element purity testing databases.',
    description: 'With increasing global cosmetic safety compliance acts, cGxP provides database solutions to trace raw chemical sourcing and formulation safety dossiers.',
    heroImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
    accentColor: '#EC4899', // Pink theme accent
    painPoints: [
      'Strict new cosmetic regulation compliance guidelines (e.g. MoCRA in the USA).',
      'Undocumented raw material sourcing certificates and heavy metal traces.',
      'Inconsistent shelf-life stability data reporting across contract manufacturers.'
    ],
    solutions: [
      'Digital raw ingredient traceability index storing active supplier compliance certificates.',
      'Automated stability test trackers mapping pH, separation, and microbial counts over time.',
      'Regulatory dossier generators consolidating all safety records into printable PDF binders.'
    ],
    relatedProducts: ['cGxP.Directory']
  },
  {
    slug: 'food',
    title: 'Food & Beverage Sciences',
    tagline: 'Critical control points tracking and functional nutrition data engineering.',
    description: 'From farm to fork, we implement HACCP integration models, functional food analytical frameworks, and dynamic pathogen screening logs for safety at scale.',
    heroImage: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&q=80&w=800',
    accentColor: '#D97706', // Orange theme accent
    painPoints: [
      'Fragmented cold-chain temperature telemetry logs resulting in shelf-life decay.',
      'Slow allergen traceback reports across layered international supply routes.',
      'Manual monitoring of Critical Control Points (CCPs) in high-throughput bakeries and packaging facilities.'
    ],
    solutions: [
      'Real-time IoT temperature telemetry ingest pipelines with instant violation alerts.',
      'Automated batch composition graphs indexing chemical traces and farm-level identifiers.',
      'Digital HACCP monitoring registers that log inspector credentials and sanitation logs.'
    ],
    relatedProducts: ['cGxP.Directory', 'cGxP.Jobs', 'cGxP.Wire']
  }
];

// Fetch all industries
export const getIndustries = async (req, res) => {
  try {
    const industries = await Industry.find({});
    if (!industries || industries.length === 0) {
      return res.status(200).json(FALLBACK_INDUSTRIES);
    }
    res.status(200).json(industries);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving industries', error: error.message });
  }
};

// Fetch single industry by slug
export const getIndustryBySlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const industry = await Industry.findOne({ slug });
    if (!industry) {
      // Look up inside fallbacks
      const fallback = FALLBACK_INDUSTRIES.find(ind => ind.slug === slug);
      if (fallback) {
        return res.status(200).json(fallback);
      }
      return res.status(404).json({ message: `Industry not found with slug: ${slug}` });
    }
    res.status(200).json(industry);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving industry details', error: error.message });
  }
};
