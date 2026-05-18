import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useFetch } from '../hooks/useFetch';
import { 
  Database, 
  Activity, 
  FlaskConical, 
  Binary, 
  TrendingUp, 
  FolderGit, 
  ExternalLink,
  ChevronRight,
  ShieldAlert,
  Dna,
  HeartPulse,
  Syringe,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

function Home() {
  const { data: stats, loading: statsLoading } = useFetch('/stats');
  const { data: industries, loading: industriesLoading } = useFetch('/industries');

  // Static items in case of completely disconnected / failing environments
  const defaultStats = [
    { label: 'Industries Covered', value: '6+' },
    { label: 'R&D Databases Loaded', value: '450+' },
    { label: 'Clinical Trial Profiles', value: '25,000+' },
    { label: 'Active Jobs Scraped', value: '1,200+' }
  ];

  const displayStats = stats || defaultStats;

  const displayIndustries = (industries && industries.length > 0) 
    ? industries.slice(0, 6) 
    : [
        { title: 'Pharmaceuticals', slug: 'pharma', tagline: 'Small-molecule therapeutics workflows.', accentColor: '#0A2F5C' },
        { title: 'Biopharmaceuticals', slug: 'biopharma', tagline: 'Genomic targets and bioreactor logs.', accentColor: '#00C4B4' },
        { title: 'Medical Devices', slug: 'meddev', tagline: 'IoT sensor synchronization and ISO 13485.', accentColor: '#F4A900' },
        { title: 'Veterinary Medicine', slug: 'veterinary', tagline: 'Translating human health science breakthroughs.', accentColor: '#10B981' },
        { title: 'Cosmetics & Care', slug: 'cosmetics', tagline: 'Formulation stability and regulatory dossiers.', accentColor: '#EC4899' },
        { title: 'Food & Beverage Sciences', slug: 'food', tagline: 'Critical control points & dynamic pathogen logs.', accentColor: '#D97706' }
      ];

  const products = [
    {
      name: 'cGxP.Directory',
      tagline: 'Life Sciences Indexing Hub',
      description: 'The premier online directory mapping registered pharmaceutical, biotech, and research companies. Search and filter across global organizations.',
      url: 'https://cgxp.directory/',
      theme: 'from-blue-600 to-indigo-700'
    },
    {
      name: 'cGxP.Jobs',
      tagline: 'Precision Career Board',
      description: 'Find verified roles in validation, quality assurance, statistical programming, clinical trials, and data science. Dedicated exclusively to GxP careers.',
      url: 'https://cgxpjobs.com/',
      theme: 'from-teal-500 to-emerald-600'
    },
    {
      name: 'cGxP.Wire',
      tagline: 'Life Sciences Press & Regulatory Releases',
      description: 'Real-time syndication of FDA approvals, EMA mandates, therapeutic developments, and corporate mergers. The pulse of life sciences news.',
      url: 'https://www.cgxpwire.com/',
      theme: 'from-amber-500 to-orange-600'
    }
  ];

  const getIndustryIcon = (slug) => {
    switch (slug) {
      case 'pharma': return <FlaskConical className="w-6 h-6" />;
      case 'biopharma': return <Dna className="w-6 h-6" />;
      case 'meddev': return <HeartPulse className="w-6 h-6" />;
      case 'veterinary': return <Syringe className="w-6 h-6" />;
      case 'cosmetics': return <Activity className="w-6 h-6" />;
      case 'food': return <AlertCircle className="w-6 h-6" />;
      default: return <Database className="w-6 h-6" />;
    }
  };

  return (
    <div className="relative overflow-hidden pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-[#03152b] via-[#051d3b] to-bg-light px-6 py-20 overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-[-10%] w-[550px] h-[550px] bg-primary-light/10 rounded-full blur-[140px] pointer-events-none" />
        
        {/* Technical Grid Background Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">Introducing GxP Data Mesh v3.1</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] text-white"
            >
              The Industry Cloud for <br/>
              <span className="bg-gradient-to-r from-accent via-accent-light to-highlight bg-clip-text text-transparent">
                cGxP Life Sciences
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl font-light"
            >
              cGxP Tech integrates drug discovery datasets, clinical trial data, and IoT manufacturing registers into a secure, GxP-validated architecture to accelerate breakthroughs.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
            >
              <Link 
                to="/contact" 
                className="px-8 py-4 rounded-xl bg-accent text-white font-bold hover:bg-accent-dark hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-accent/25 transition-all text-center"
              >
                Schedule Demo
              </Link>
              <Link 
                to="/industries" 
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all text-center"
              >
                Explore Solutions
              </Link>
            </motion.div>
          </div>

          {/* Hero Visual Card Stack */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[450px]"
            >
              {/* Premium Layer 1 */}
              <div className="absolute top-10 right-4 w-72 h-80 rounded-2xl glass-panel p-6 shadow-premium animate-float-slow select-none z-10 border border-slate-300">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">GxP Register</span>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-400 font-mono">COMPOUND ID</span>
                    <p className="text-sm font-mono font-bold text-primary">CGXP-9082-CX</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-400 font-mono">PURITY SCORE</span>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[99.8%] bg-gradient-to-r from-accent to-emerald-400" />
                    </div>
                    <span className="text-[10px] text-emerald-500 font-mono font-bold">99.85% (GxP Passed)</span>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex justify-between text-xs">
                    <span className="text-slate-400">FDA Dossier:</span>
                    <span className="font-semibold text-primary">Ready</span>
                  </div>
                </div>
              </div>

              {/* Premium Layer 2 */}
              <div className="absolute bottom-6 left-0 w-80 h-72 rounded-2xl glass-panel p-6 shadow-premium animate-float-fast border border-slate-300 bg-white/80 z-20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent-dark">
                    <Dna className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-semibold border border-emerald-500/20">LIVE DATA FEED</span>
                </div>
                <p className="text-sm font-semibold text-primary">Bioreactor Cell-Density Logs</p>
                <div className="mt-4 space-y-2 font-mono text-[10px] text-slate-500">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span>Batch #441:</span>
                    <span className="text-emerald-500">8.42 x 10⁶ cells/mL</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span>Cleanroom Temp:</span>
                    <span className="text-primary font-bold">21.8°C</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Sensor Outflow:</span>
                    <span className="text-accent-dark font-bold">120 L/min</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 -mt-16">
        <div className="glass-panel border-slate-200/80 rounded-3xl p-8 md:p-10 shadow-premium grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {displayStats.map((item, idx) => (
            <div key={idx} className="text-center lg:text-left space-y-1 relative group">
              <span className="text-3xl md:text-4xl font-display font-extrabold text-primary block tracking-tight group-hover:text-accent transition-colors duration-300">
                {item.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-mono font-bold block">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INDUSTRIES GRID */}
      <section className="py-24 bg-bg-light px-6 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-accent font-mono font-bold">Tailored Compliance Solutions</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Industries We Serve</h2>
            <p className="text-slate-500 text-base md:text-lg">
              Each dynamic division leverages tailored metadata mappings and strict operational control frameworks matching regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayIndustries.map((ind, idx) => (
              <motion.div
                key={ind.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Link 
                  to={`/industries/${ind.slug}`}
                  className="block h-full bg-white rounded-2xl p-8 border border-slate-200/60 shadow-premium hover:shadow-premium-hover hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Floating light highlight */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-colors" />
                  
                  {/* Brand Color Left Strip */}
                  <div 
                    className="absolute top-0 left-0 bottom-0 w-1.5 transition-all duration-300"
                    style={{ backgroundColor: ind.accentColor || '#00C4B4' }}
                  />

                  <div className="space-y-6">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: ind.accentColor || '#00C4B4' }}
                    >
                      {getIndustryIcon(ind.slug)}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-primary group-hover:text-accent-dark transition-colors">{ind.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{ind.tagline}</p>
                    </div>
                    <div className="text-xs font-bold text-accent-dark flex items-center group-hover:translate-x-1 transition-transform duration-300 pt-2">
                      Explore Division <ChevronRight className="w-4 h-4 ml-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCT SPOTLIGHT SECTION */}
      <section className="py-24 bg-primary-dark text-white px-6 relative overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-highlight/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-accent font-mono font-bold">The cGxP ecosystem</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Product Spotlight</h2>
            <p className="text-slate-400 text-base md:text-lg">
              Explore our core intelligence portals. Each represents a highly optimized specialized application linking users, data, and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((prod, idx) => (
              <motion.div
                key={prod.name}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-accent font-mono font-bold">{prod.tagline}</span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      <FolderGit className="w-4 h-4 text-slate-300" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white font-display">{prod.name}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{prod.description}</p>
                  </div>
                </div>
                <div className="pt-8">
                  <a 
                    href={prod.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-white font-bold hover:bg-accent-light active:scale-95 transition-all text-sm group"
                  >
                    Visit Portal 
                    <ExternalLink className="w-4 h-4 ml-1.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES MATRIX SECTION */}
      <section className="py-24 bg-bg-light px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Grid */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-accent font-mono font-bold">Data Engineering & Analytics</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Advanced GxP Core Services</h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              We provide life science corporations with elite integration engineers and data scientists to support pipeline engineering, machine learning modeling, and validated business intelligence.
            </p>
            <div className="pt-4">
              <Link 
                to="/services" 
                className="inline-flex items-center text-accent-dark hover:text-primary font-bold transition-colors group"
              >
                Learn about Services <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Cards Stack */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Service card 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-premium flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-primary text-base">Data Engineering</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Build secure, AWS/Azure compliant GxP data lakes and automated pipeline inceptions.</p>
              </div>
              <Link to="/services/data-engineering" className="text-xs font-bold text-accent-dark hover:text-primary flex items-center mt-4">
                Details →
              </Link>
            </div>

            {/* Service card 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-premium flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                  <Binary className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-primary text-base">Data Science</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Deploy molecular folding models, screening filters, and assay yield predictors.</p>
              </div>
              <Link to="/services/data-science" className="text-xs font-bold text-accent-dark hover:text-primary flex items-center mt-4">
                Details →
              </Link>
            </div>

            {/* Service card 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-premium flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-primary text-base">Data Analytics</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Build GxP audit ready dashboards, yield trends, and regulatory audit visualizations.</p>
              </div>
              <Link to="/services/data-analytics" className="text-xs font-bold text-accent-dark hover:text-primary flex items-center mt-4">
                Details →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-[#051c38] text-white text-center relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
            Ready to Accelerate Your <br/>
            <span className="text-accent">GxP Compliance & Data Capabilities?</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Consult with our CEO C Pavan Kumar and our team of senior life sciences engineers to design your secure, audit-ready data ecosystem today.
          </p>
          <div className="pt-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 rounded-xl bg-accent text-white font-bold text-base hover:bg-accent-light hover:scale-105 active:scale-95 shadow-lg shadow-accent/20 transition-all group"
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

export default Home;
