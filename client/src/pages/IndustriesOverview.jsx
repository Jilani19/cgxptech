import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useFetch } from '../hooks/useFetch';
import { 
  FlaskConical, 
  Dna, 
  HeartPulse, 
  Syringe, 
  Activity, 
  AlertCircle, 
  Database,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

function IndustriesOverview() {
  const { data: industries, loading } = useFetch('/industries');

  const defaultIndustries = [
    { title: 'Pharmaceuticals', slug: 'pharma', tagline: 'Small-molecule therapeutics workflows.', description: 'FDA and EMA dynamic compliance tracking, automated batch record lineages, and drug discovery datasets.', accentColor: '#0A2F5C' },
    { title: 'Biopharmaceuticals', slug: 'biopharma', tagline: 'Genomic targets and bioreactor logs.', description: 'Cellular and genomic data modeling, assay analysis, bioreactor telemetry logs, and DNA sequencing integration.', accentColor: '#00C4B4' },
    { title: 'Medical Devices', slug: 'meddev', tagline: 'IoT sensor synchronization and ISO 13485.', description: 'Post-market telemetry, design history file triggers, and Class II/III embedded IoT firmware synchronization.', accentColor: '#F4A900' },
    { title: 'Veterinary Medicine', slug: 'veterinary', tagline: 'Translating human health science breakthroughs.', description: 'Animal clinical trial databases, companion diagnostics, comparative API maps, and animal health workflows.', accentColor: '#10B981' },
    { title: 'Cosmetics & Care', slug: 'cosmetics', tagline: 'Formulation stability and regulatory dossiers.', description: 'MoCRA safety guidelines compliance, trace ingredient mapping, shelf-life testing logs, and supplier cert files.', accentColor: '#EC4899' },
    { title: 'Food & Beverage Sciences', slug: 'food', tagline: 'Critical control points & dynamic pathogen logs.', description: 'Real-time HACCP sanitation logs, allergen supply-chain tracing, cold-chain IoT temperature tracking, and safety records.', accentColor: '#D97706' }
  ];

  const displayIndustries = (industries && industries.length > 0) ? industries : defaultIndustries;

  const getIndustryIcon = (slug) => {
    switch (slug) {
      case 'pharma': return <FlaskConical className="w-8 h-8" />;
      case 'biopharma': return <Dna className="w-8 h-8" />;
      case 'meddev': return <HeartPulse className="w-8 h-8" />;
      case 'veterinary': return <Syringe className="w-8 h-8" />;
      case 'cosmetics': return <Activity className="w-8 h-8" />;
      case 'food': return <AlertCircle className="w-8 h-8" />;
      default: return <Database className="w-8 h-8" />;
    }
  };

  return (
    <div className="pt-32 pb-24 bg-bg-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Header Hero */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-accent font-mono font-bold">Life Sciences Verticals</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">Industries We Optimize</h1>
          <p className="text-slate-500 text-lg">
            Explore how cGxP Tech re-engineers data models, integrates clinical telemetry, and streamlines compliance audits for each specific sector.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayIndustries.map((ind, idx) => (
            <motion.div
              key={ind.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white rounded-3xl border border-slate-200/60 shadow-premium hover:shadow-premium-hover hover:border-slate-300 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div className="p-8 space-y-6">
                {/* Header Row */}
                <div className="flex items-start justify-between">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg"
                    style={{ 
                      backgroundColor: ind.accentColor || '#00C4B4',
                      boxShadow: `0 8px 20px ${ind.accentColor}25`
                    }}
                  >
                    {getIndustryIcon(ind.slug)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-500" /> GxP Compliant
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-primary group-hover:text-accent-dark transition-colors">{ind.title}</h2>
                  <p className="text-slate-400 text-xs font-semibold uppercase font-mono tracking-wider">{ind.tagline}</p>
                  <p className="text-slate-500 text-sm leading-relaxed pt-2">{ind.description}</p>
                </div>
              </div>

              {/* Bottom Nav Strip */}
              <div className="p-6 border-t border-slate-50 bg-slate-50/50 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono uppercase tracking-wider font-bold">6+ Data Layers Active</span>
                <Link 
                  to={`/industries/${ind.slug}`}
                  className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold text-white transition-all shadow-md group-hover:scale-105 active:scale-95"
                  style={{ 
                    backgroundColor: ind.accentColor || '#00C4B4',
                    boxShadow: `0 4px 10px ${ind.accentColor}20`
                  }}
                >
                  Enter Division <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* General CTA */}
        <div className="glass-panel border-slate-200/80 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 mt-12 bg-white/70">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary">Need a custom regulatory data architecture?</h3>
            <p className="text-slate-500 text-sm max-w-xl">
              We design specialized clinical metadata maps, active pipeline interfaces, and high-throughput sanitization logs tailored to secure client requirements.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="px-6 py-3.5 rounded-xl bg-accent text-white font-bold hover:bg-accent-dark transition-all text-sm shrink-0 shadow-md shadow-accent/20"
          >
            Consult Our Engineering Team
          </Link>
        </div>

      </div>
    </div>
  );
}

export default IndustriesOverview;
