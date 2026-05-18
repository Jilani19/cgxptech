import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import Stat from '../models/Stat.js';
import Industry from '../models/Industry.js';
import Team from '../models/Team.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config();

const statsData = [
  { label: 'Industries Covered', value: '6+' },
  { label: 'R&D Databases Loaded', value: '450+' },
  { label: 'Clinical Trial Profiles', value: '25,000+' },
  { label: 'Active Jobs Scraped', value: '1,200+' }
];

const teamData = [
  {
    name: 'C Pavan Kumar',
    role: 'Chief Executive Officer',
    bio: 'Over 15 years leading SaaS revolutions and data product architectures in biotechnology workflows. Expert in GxP cloud services and life sciences data structures.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    linkedIn: 'https://linkedin.com/in/c-pavan-kumar-mock'
  },
  {
    name: 'Marcus Vance',
    role: 'VP of Data Engineering',
    bio: 'Architected petabyte-scale distributed data warehouses at Amazon Health and Flatiron. Expert in GxP compliant data lakes, Spark pipeline optimization, and FDA data auditing structures.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    linkedIn: 'https://linkedin.com/in/marcus-vance-mock'
  },
  {
    name: 'Dr. Ananya Nair',
    role: 'Chief Data Scientist',
    bio: 'Specialist in deep generative modeling for molecular folding structures. Formerly Lead Scientist at Roche Informatics. Postdoctoral research fellow at MIT Lab for Science and AI.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    linkedIn: 'https://linkedin.com/in/dr-ananya-nair-mock'
  }
];

const industriesData = [
  {
    slug: 'pharma',
    title: 'Pharmaceuticals',
    tagline: 'Enterprise-grade cloud tools for small-molecule therapeutic discovery and synthesis.',
    description: 'We orchestrate data for rigorous regulatory compliance, GxP tracking, and formulation analytics. Accelerate clinical trials while retaining strict GxP manufacturing data standards.',
    heroImage: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800',
    accentColor: '#0A2F5C', // Deep navy
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
    accentColor: '#00C4B4', // Teal
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
    accentColor: '#F4A900', // Amber
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
    accentColor: '#10B981', // Emerald green
    painPoints: [
      'Fragmented veterinary clinical trial studies and case record sheets.',
      'Poor cross-compatibility between human active pharmaceutical ingredient logs and animal drug formulations.',
      'Slow reporting times for companion animal clinical studies.'
    ],
    solutions: [
      'Dynamic veterinary trial registries tracking patient parameters in real-time.',
      'Comparative drug mapping tables linking compound effects across species.',
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
    accentColor: '#EC4899', // Pink
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
    accentColor: '#D97706', // Orange
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

const seedDB = async () => {
  try {
    const connStr = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/cgxptech';
    console.log(`[SEEDER] Connecting to database: ${connStr}`);
    await mongoose.connect(connStr);
    console.log('[SEEDER] MongoDB connected.');

    // Clear stats
    await Stat.deleteMany({});
    console.log('[SEEDER] Stat collection cleared.');
    await Stat.insertMany(statsData);
    console.log('[SEEDER] Stat collection seeded successfully.');

    // Clear team
    await Team.deleteMany({});
    console.log('[SEEDER] Team collection cleared.');
    await Team.insertMany(teamData);
    console.log('[SEEDER] Team collection seeded successfully.');

    // Clear industries
    await Industry.deleteMany({});
    console.log('[SEEDER] Industry collection cleared.');
    await Industry.insertMany(industriesData);
    console.log('[SEEDER] Industry collection seeded successfully.');

    console.log('=========================================');
    console.log('🎉 [SEEDER] All collections seeded successfully!');
    console.log('=========================================');
    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error(`💥 [SEEDER] Error during seeding: ${error.message}`);
    process.exit(1);
  }
};

seedDB();
