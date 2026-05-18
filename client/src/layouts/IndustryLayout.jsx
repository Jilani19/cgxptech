import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useFetch } from '../hooks/useFetch';
import { 
  ShieldAlert, 
  CheckCircle2, 
  ExternalLink, 
  ArrowRight,
  Database,
  Briefcase,
  Layers,
  ArrowLeft
} from 'lucide-react';

function IndustryLayout() {
  const { slug } = useParams();
  const { data: industry, loading, error } = useFetch(`/industries/${slug}`);

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-light flex items-center justify-center pt-20">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-accent animate-spin" />
          <p className="text-slate-500 font-mono text-sm">Loading Division Profile...</p>
        </div>
      </div>
    );
  }

  if (error || !industry) {
    return (
      <div className="min-h-screen bg-bg-light flex items-center justify-center pt-20">
        <div className="text-center space-y-4 max-w-md p-6">
          <h2 className="text-2xl font-bold text-primary font-display">Division Profile Offline</h2>
          <p className="text-slate-500 text-sm">
            We are unable to download the requested division parameters. Please return to the homepage or try again.
          </p>
          <div className="pt-4">
            <Link to="/" className="px-6 py-3 bg-accent text-white font-bold rounded-xl text-sm hover:bg-accent-dark transition-all">
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const themeColor = industry.accentColor || '#00C4B4';

  const productsMap = {
    'cGxP.Directory': { url: 'https://cgxp.directory/', desc: 'Life sciences company directory portal.' },
    'cGxP.Jobs': { url: 'https://cgxpjobs.com/', desc: 'Exclusive GxP careers & verification.' },
    'cGxP.Wire': { url: 'https://www.cgxpwire.com/', desc: 'FDA, EMA regulatory and life sciences news.' }
  };

  return (
    <div className="pt-20 bg-bg-light min-h-screen">
      
      {/* 1. BRANDED HERO SECTION */}
      <section 
        className="relative py-24 text-white overflow-hidden"
        style={{ backgroundColor: `${themeColor}E5` }} // E5 represents roughly 90% opacity
      >
        {/* Glow Spheres */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-6">
          <Link 
            to="/industries" 
            className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> <span>Back to Industries Overview</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs uppercase tracking-widest bg-white/15 px-3 py-1.5 rounded-full font-mono text-white font-bold">
                cGxP Sector: {industry.title}
              </span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
              >
                {industry.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white/90 text-xl font-light leading-relaxed max-w-3xl"
              >
                {industry.tagline}
              </motion.p>
              <p className="text-white/80 text-base leading-relaxed max-w-2xl font-light">
                {industry.description}
              </p>
            </div>

            {/* Right Graphic/Avatar */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="w-full h-64 rounded-3xl overflow-hidden border border-white/20 shadow-lg relative group">
                <img 
                  src={industry.heroImage || 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800'} 
                  alt={industry.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CHALLENGES & SOLUTIONS GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Pain Points (Left Column) */}
        <div className="space-y-8 bg-white border border-slate-200/60 p-8 md:p-12 rounded-3xl shadow-premium">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-rose-500 font-mono font-bold">Sector Barriers</span>
            <h2 className="text-3xl font-display font-bold text-primary flex items-center">
              <ShieldAlert className="w-7 h-7 text-rose-500 mr-2.5 shrink-0" /> Primary Pain Points
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Standard operations are continually impacted by compliance friction and architectural hurdles:
            </p>
          </div>

          <div className="space-y-6">
            {industry.painPoints?.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0 text-rose-500 font-bold font-mono text-sm">
                  {idx + 1}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed pt-0.5">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions (Right Column) */}
        <div className="space-y-8 bg-white border border-slate-200/60 p-8 md:p-12 rounded-3xl shadow-premium relative overflow-hidden">
          {/* Subtle themed accent background */}
          <div 
            className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-10"
            style={{ backgroundColor: themeColor }}
          />

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-mono font-bold" style={{ color: themeColor }}>cGxP Capabilities</span>
            <h2 className="text-3xl font-display font-bold text-primary flex items-center">
              <CheckCircle2 className="w-7 h-7 mr-2.5 shrink-0" style={{ color: themeColor }} /> How cGxP Helps
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our specialized life sciences framework resolves deep compliance barriers and accelerates workflows:
            </p>
          </div>

          <div className="space-y-6">
            {industry.solutions?.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-white font-bold font-mono text-sm"
                  style={{ backgroundColor: themeColor }}
                >
                  ✓
                </div>
                <p className="text-slate-600 text-sm leading-relaxed pt-0.5">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 3. RELEVANT PRODUCT SPOTLIGHT */}
      {industry.relatedProducts && industry.relatedProducts.length > 0 && (
        <section className="py-20 bg-primary-dark text-white px-6">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase tracking-widest text-accent font-mono font-bold">Related Systems</span>
              <h2 className="text-3xl font-display font-bold">Integrated Products Spotlight</h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
                These core modules in the cGxP ecosystem support operations within {industry.title}:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industry.relatedProducts.map((pName) => {
                const pInfo = productsMap[pName] || { url: 'https://cgxp.directory/', desc: 'GxP ecosystem platform.' };
                return (
                  <div key={pName} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                        <Layers className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{pName}</h3>
                      <p className="text-slate-300 text-xs leading-relaxed">{pInfo.desc}</p>
                    </div>
                    <div className="pt-6">
                      <a 
                        href={pInfo.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-xs font-bold text-accent hover:text-white transition-colors group"
                      >
                        Visit Portal <ExternalLink className="w-3.5 h-3.5 ml-1 group-hover:scale-105" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4. GENERAL SECTION CTA */}
      <section className="py-24 bg-white border-t border-slate-100 text-center px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
            Launch {industry.title} Data Workflows with cGxP Tech
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Design compliant data lakes, configure remote IoT sensor ingestion logs, and coordinate safety dossiers with our CEO C Pavan Kumar and our engineering team today.
          </p>
          <div className="pt-4">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-xl text-white font-bold text-base hover:scale-105 active:scale-95 shadow-lg transition-all group"
              style={{ 
                backgroundColor: themeColor,
                boxShadow: `0 8px 25px ${themeColor}25`
              }}
            >
              Talk to Our Experts 
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default IndustryLayout;
