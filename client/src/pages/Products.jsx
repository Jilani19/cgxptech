import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Database, Briefcase, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

function Products() {
  const products = [
    {
      name: 'cGxP.Directory',
      tagline: 'Life Sciences Indexing Hub',
      description: 'The premier online directory mapping registered pharmaceutical, biotech, research, and veterinary organisations globally. Query, filter, and inspect verified facilities and operations.',
      url: 'https://cgxp.directory/',
      taglineColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
      icon: <Database className="w-6 h-6 text-blue-500" />,
      features: [
        'Advanced multi-select filters by standard therapeutic focus and coordinates.',
        'Verified corporate facility GxP status indicators.',
        'Embedded manufacturing capability registers.'
      ]
    },
    {
      name: 'cGxP.Jobs',
      tagline: 'Precision Career Board',
      description: 'Find verified roles in validation, quality assurance, statistical programming, clinical trials, regulatory affairs, and bio-informatics. Formulated specifically for life sciences.',
      url: 'https://cgxpjobs.com/',
      taglineColor: 'text-teal-500 bg-teal-500/10 border-teal-500/20',
      icon: <Briefcase className="w-6 h-6 text-teal-500" />,
      features: [
        '100% GxP, QA, and validation targeted professional postings.',
        'Direct recruiter networking with life sciences corporations.',
        'Automated alert digests mapped to strict certifications.'
      ]
    },
    {
      name: 'cGxP.Wire',
      tagline: 'Press & Regulatory Releases',
      description: 'Real-time syndication of FDA approvals, EMA quality mandates, clinical milestone announcements, and therapeutic developments. The heartbeat of life sciences corporate press.',
      url: 'https://www.cgxpwire.com/',
      taglineColor: 'text-amber-600 bg-amber-500/10 border-amber-500/20',
      icon: <FileText className="w-6 h-6 text-amber-500" />,
      features: [
        'Aggregated regulatory agency updates parsed inside minutes.',
        'Intelligent impact metrics mapping filings to clinical phases.',
        'Custom corporate journal subscription APIs.'
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-bg-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Header Hero */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-accent font-mono font-bold">The cGxP ecosystem</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">Product Spotlight</h1>
          <p className="text-slate-500 text-lg">
            Connect with our cloud portals. We build highly optimized, specialized indexing registries to link researchers, candidates, and industry developments.
          </p>
        </div>

        {/* Products Matrix */}
        <div className="space-y-12">
          {products.map((prod, idx) => (
            <motion.div
              key={prod.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-slate-200/60 p-8 md:p-12 shadow-premium hover:shadow-premium-hover hover:border-slate-300 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden group"
            >
              
              {/* Product Info (Left Column) */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center space-x-3 flex-wrap gap-y-2">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {prod.icon}
                  </div>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${prod.taglineColor}`}>
                    {prod.tagline}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-500" /> Active Platform
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl font-display font-bold text-primary group-hover:text-accent-dark transition-colors">{prod.name}</h2>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl">
                    {prod.description}
                  </p>
                </div>

                {/* Bullets List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {prod.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-xs text-slate-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Direct CTA (Right Column) */}
              <div className="lg:col-span-4 bg-slate-50/50 rounded-2xl p-8 border border-slate-100/50 flex flex-col justify-center space-y-4 text-center lg:text-left h-full">
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold block">Direct Redirect Link</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Open a secure, dedicated connection to the active {prod.name} portal index inside a separate window tab.
                </p>
                <div className="pt-2">
                  <a 
                    href={prod.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-accent text-white font-bold hover:bg-accent-dark active:scale-95 transition-all text-sm group"
                  >
                    Visit Portal <ExternalLink className="w-4 h-4 ml-1.5" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Products;
