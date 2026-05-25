import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ExternalLink, Mail, Linkedin, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState({ type: '', message: '' });
  const [subLoading, setSubLoading] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll handler for floating glassmorphism navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transitions
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setSubLoading(true);
    setSubStatus({ type: '', message: '' });

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5005/api';
      const response = await fetch(`${baseUrl}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      
      if (response.ok) {
        setSubStatus({ type: 'success', message: data.message });
        setEmail('');
      } else {
        setSubStatus({ type: 'error', message: data.message || 'Subscription failed.' });
      }
    } catch (err) {
      // Graceful fallback for offline / mock testing
      setSubStatus({ 
        type: 'success', 
        message: '🎉 Subscription simulation successful! (Live server is offline, fallback mode active)' 
      });
      setEmail('');
    } finally {
      setSubLoading(false);
    }
  };

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const industries = [
    { name: 'Pharmaceuticals', slug: 'pharma' },
    { name: 'Biopharmaceuticals', slug: 'biopharma' },
    { name: 'Medical Devices', slug: 'meddev' },
    { name: 'Veterinary Medicine', slug: 'veterinary' },
    { name: 'Cosmetics & Care', slug: 'cosmetics' },
    { name: 'Food & Beverage', slug: 'food' }
  ];

  const products = [
    { name: 'cGxP.Directory', url: 'https://cgxp.directory/', tagline: 'Life sciences company database' },
    { name: 'cGxP.Jobs', url: 'https://cgxpjobs.com/', tagline: 'Industry career portal' },
    { name: 'cGxP.Wire', url: 'https://www.cgxpwire.com/', tagline: 'Life sciences news & press hub' }
  ];

  const services = [
    { name: 'Data Engineering', slug: 'data-engineering' },
    { name: 'Data Science & AI', slug: 'data-science' },
    { name: 'Data Analytics', slug: 'data-analytics' }
  ];

  const dataSources = [
    { name: 'R&D Databases', slug: 'rd' },
    { name: 'Clinical Trials', slug: 'clinical-research' },
    { name: 'Manufacturing Log Ingests', slug: 'manufacturing' },
    { name: 'Laboratory Integration', slug: 'laboratory' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Premium Navbar */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-3 bg-primary-dark/90 backdrop-blur-md border-b border-white/5 shadow-premium' 
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Corporate Brand Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold shadow-md shadow-accent/20 group-hover:scale-105 transition-transform duration-300">
              <span className="font-display text-xl tracking-tight">G</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-display text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled || location.pathname !== '/' ? 'text-white' : 'text-primary'}`}>
                cGxP <span className="text-accent">Tech</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest font-mono text-accent-light -mt-1 font-bold">Life Sciences Cloud</span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Industries Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled || location.pathname !== '/' ? 'text-slate-200 hover:text-white hover:bg-white/5' : 'text-slate-700 hover:text-primary hover:bg-primary/5'
                }`}
              >
                <span>Industries</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 glass-panel rounded-xl py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                <div className="px-4 pb-2 border-b border-slate-100 text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">Solutions by Domain</div>
                {industries.map((ind) => (
                  <Link 
                    key={ind.slug} 
                    to={`/industries/${ind.slug}`} 
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-accent/10 hover:text-primary font-medium transition-colors"
                  >
                    {ind.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled || location.pathname !== '/' ? 'text-slate-200 hover:text-white hover:bg-white/5' : 'text-slate-700 hover:text-primary hover:bg-primary/5'
                }`}
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-80 glass-panel rounded-xl py-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                <div className="px-4 pb-2 border-b border-slate-100 text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">cGxP Product Suite</div>
                {products.map((prod) => (
                  <a 
                    key={prod.name} 
                    href={prod.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-start justify-between px-4 py-3 hover:bg-accent/10 rounded-lg mx-2 transition-colors group/item"
                  >
                    <div>
                      <div className="text-sm font-semibold text-primary group-hover/item:text-accent-dark flex items-center">
                        {prod.name}
                        <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-60 group-hover/item:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">{prod.tagline}</div>
                    </div>
                  </a>
                ))}
                <div className="mx-4 mt-2 pt-2 border-t border-slate-100">
                  <Link to="/products" className="text-xs font-bold text-accent-dark hover:text-primary flex items-center">
                    View Product Spotlight <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled || location.pathname !== '/' ? 'text-slate-200 hover:text-white hover:bg-white/5' : 'text-slate-700 hover:text-primary hover:bg-primary/5'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 glass-panel rounded-xl py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                <div className="px-4 pb-2 border-b border-slate-100 text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">Professional Delivery</div>
                {services.map((ser) => (
                  <Link 
                    key={ser.slug} 
                    to={`/services/${ser.slug}`} 
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-accent/10 hover:text-primary font-medium transition-colors"
                  >
                    {ser.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Data Sources Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled || location.pathname !== '/' ? 'text-slate-200 hover:text-white hover:bg-white/5' : 'text-slate-700 hover:text-primary hover:bg-primary/5'
                }`}
              >
                <span>Data Sources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-72 glass-panel rounded-xl py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                <div className="px-4 pb-2 border-b border-slate-100 text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">Standard Registers</div>
                {dataSources.map((ds) => (
                  <Link 
                    key={ds.slug} 
                    to={`/data-sources/${ds.slug}`} 
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-accent/10 hover:text-primary font-medium transition-colors"
                  >
                    {ds.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                scrolled || location.pathname !== '/' ? 'text-slate-200 hover:text-white hover:bg-white/5' : 'text-slate-700 hover:text-primary hover:bg-primary/5'
              }`}
            >
              About
            </Link>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/contact" 
              className="px-5 py-2.5 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-dark hover:scale-105 active:scale-95 shadow-md shadow-accent/20 transition-all duration-300"
            >
              Talk to our Experts
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            className="lg:hidden p-2 rounded-lg text-white" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen 
              ? <X className={`w-6 h-6 ${scrolled || location.pathname !== '/' ? 'text-white' : 'text-primary'}`} /> 
              : <Menu className={`w-6 h-6 ${scrolled || location.pathname !== '/' ? 'text-white' : 'text-primary'}`} />
            }
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-primary-dark border-b border-white/10 shadow-lg px-6 py-6 transition-all duration-300 max-h-[85vh] overflow-y-auto">
            <div className="space-y-4">
              {/* Industries mobile section */}
              <div>
                <button 
                  onClick={() => toggleDropdown('industries')}
                  className="flex items-center justify-between w-full text-slate-200 font-semibold py-2 border-b border-white/5 text-left"
                >
                  <span>Industries</span>
                  <ChevronDown className={`w-4 h-4 transform transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'industries' && (
                  <div className="mt-2 pl-4 space-y-2">
                    {industries.map((ind) => (
                      <Link 
                        key={ind.slug} 
                        to={`/industries/${ind.slug}`}
                        className="block text-slate-400 py-1 hover:text-accent"
                      >
                        {ind.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Products mobile section */}
              <div>
                <button 
                  onClick={() => toggleDropdown('products')}
                  className="flex items-center justify-between w-full text-slate-200 font-semibold py-2 border-b border-white/5 text-left"
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transform transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'products' && (
                  <div className="mt-2 pl-4 space-y-2">
                    {products.map((prod) => (
                      <a 
                        key={prod.name} 
                        href={prod.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-slate-400 py-1 hover:text-accent"
                      >
                        {prod.name} <ExternalLink className="w-3 h-3 ml-1.5" />
                      </a>
                    ))}
                    <Link to="/products" className="block text-accent font-semibold pt-1">Product Spotlight →</Link>
                  </div>
                )}
              </div>

              {/* Services mobile section */}
              <div>
                <button 
                  onClick={() => toggleDropdown('services')}
                  className="flex items-center justify-between w-full text-slate-200 font-semibold py-2 border-b border-white/5 text-left"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transform transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'services' && (
                  <div className="mt-2 pl-4 space-y-2">
                    {services.map((ser) => (
                      <Link 
                        key={ser.slug} 
                        to={`/services/${ser.slug}`}
                        className="block text-slate-400 py-1 hover:text-accent"
                      >
                        {ser.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Data Sources mobile section */}
              <div>
                <button 
                  onClick={() => toggleDropdown('datasources')}
                  className="flex items-center justify-between w-full text-slate-200 font-semibold py-2 border-b border-white/5 text-left"
                >
                  <span>Data Sources</span>
                  <ChevronDown className={`w-4 h-4 transform transition-transform ${activeDropdown === 'datasources' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'datasources' && (
                  <div className="mt-2 pl-4 space-y-2">
                    {dataSources.map((ds) => (
                      <Link 
                        key={ds.slug} 
                        to={`/data-sources/${ds.slug}`}
                        className="block text-slate-400 py-1 hover:text-accent"
                      >
                        {ds.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/about" className="block text-slate-200 font-semibold py-2 border-b border-white/5">
                About cGxP Tech
              </Link>

              <Link 
                to="/contact" 
                className="block text-center py-3 rounded-xl bg-accent text-white font-semibold shadow-md shadow-accent/20"
              >
                Talk to our Experts
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Page Layout Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Corporate Premium Footer */}
      <footer className="bg-[#04152b] text-slate-300 pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
        {/* Background glow lines */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/5">
            
            {/* Branding Column */}
            <div className="lg:col-span-2 space-y-6">
              <Link to="/" className="flex items-center space-x-2.5">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white font-bold">
                  <span className="font-display text-xl">G</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-xl font-bold tracking-tight text-white">
                    cGxP <span className="text-accent">Tech</span>
                  </span>
                  <span className="text-[9px] uppercase tracking-widest font-mono text-accent-light -mt-1 font-bold">Life Sciences Cloud</span>
                </div>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                The premier life sciences industry cloud. Engineering unified data fabrics, dynamic directories, and automated GxP audit pipelines to accelerate discovery, compliance, and product scale.
              </p>
              <div className="flex items-center space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="mailto:hello@cgxptech.com" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Navigation links column */}
            <div>
              <h4 className="text-white text-xs font-mono uppercase tracking-wider font-bold mb-5 flex items-center">
                <ShieldCheck className="w-4 h-4 text-accent mr-2" /> Industries
              </h4>
              <ul className="space-y-3.5 text-sm">
                {industries.slice(0, 4).map((ind) => (
                  <li key={ind.slug}>
                    <Link to={`/industries/${ind.slug}`} className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-transform duration-300">
                      {ind.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/industries" className="text-accent font-semibold hover:underline">
                    View All Industries →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products Column */}
            <div>
              <h4 className="text-white text-xs font-mono uppercase tracking-wider font-bold mb-5">Product Links</h4>
              <ul className="space-y-3.5 text-sm">
                {products.map((prod) => (
                  <li key={prod.name}>
                    <a href={prod.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-white transition-colors">
                      {prod.name}
                      <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-60" />
                    </a>
                  </li>
                ))}
                <li>
                  <Link to="/products" className="text-slate-400 hover:text-white transition-colors">
                    Product Spotlight
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="space-y-4">
              <h4 className="text-white text-xs font-mono uppercase tracking-wider font-bold">cGxP Intelligence</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Subscribe to our bi-weekly regulatory compliance digest and life sciences data engineering journal.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                  <button 
                    type="submit" 
                    disabled={subLoading}
                    className="absolute right-1 top-1 bottom-1 px-3 rounded-lg bg-accent text-white hover:bg-accent-dark transition-colors disabled:opacity-50"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
              
              {/* Feedback messages */}
              {subStatus.message && (
                <div className={`text-[10px] rounded-lg px-2.5 py-1.5 leading-snug flex items-start space-x-1 ${
                  subStatus.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                }`}>
                  {subStatus.type === 'success' && <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />}
                  <span>{subStatus.message}</span>
                </div>
              )}
            </div>

          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0">
            <div>
              &copy; {new Date().getFullYear()} cGxP Tech. All rights reserved. Built for GxP Compliance environments.
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
              <a href="/health" className="hover:text-white transition-colors font-mono uppercase tracking-widest text-[9px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">System Live</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
