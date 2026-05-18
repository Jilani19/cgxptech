import React from 'react';
import { motion } from 'framer-motion';
import { useFetch } from '../hooks/useFetch';
import { Linkedin, Shield, HeartHandshake, Eye, Award, CheckCircle } from 'lucide-react';

function About() {
  const { data: team, loading } = useFetch('/team');

  const defaultTeam = [
    {
      name: 'C Pavan Kumar',
      role: 'Chief Executive Officer',
      bio: 'Over 15 years leading SaaS revolutions and data product architectures in biotechnology workflows. Expert in GxP cloud services and life sciences data structures.',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
      linkedIn: 'https://linkedin.com'
    },
    {
      name: 'Marcus Vance',
      role: 'VP of Data Engineering',
      bio: 'Architected petabyte-scale distributed data warehouses at Amazon Health and Flatiron. Expert in GxP compliant data lakes, Spark pipeline optimization, and FDA data auditing structures.',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
      linkedIn: 'https://linkedin'
    },
    {
      name: 'Dr. Ananya Nair',
      role: 'Chief Data Scientist',
      bio: 'Specialist in deep generative modeling for molecular folding structures. Formerly Lead Scientist at Roche Informatics. Postdoctoral research fellow at MIT Lab for Science and AI.',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
      linkedIn: 'https://linkedin'
    }
  ];

  const displayTeam = team || defaultTeam;

  const values = [
    {
      title: 'GxP Integrity First',
      desc: 'We never sacrifice compliance. Every data line, schema change, and integration layer must satisfy rigid regulatory validation standards.',
      icon: <Shield className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Extreme Security',
      desc: 'Biomedical data is high-value target assets. We implement military-grade encryptions, access-controls, and automated anomaly alarms.',
      icon: <Eye className="w-6 h-6 text-teal-500" />
    },
    {
      title: 'Partner Synergy',
      desc: 'We pair senior data architects and biological science experts directly with client teams to co-develop bespoke structures.',
      icon: <HeartHandshake className="w-6 h-6 text-amber-500" />
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-bg-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* 1. HERO MISSION STATEMENT */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-accent font-mono font-bold">Our Corporate Mission</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
              The Industry Cloud <br/>
              For Life Sciences Breakthroughs.
            </h1>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed font-light">
              Founded in 2024, cGxP Tech represents an elite group of life sciences product managers, database engineers, and computational biologists. We bridge the gap between early molecule discovery and automated high-throughput manufacturing logs.
            </p>
            <div className="border-l-4 border-accent pl-6 py-2 bg-accent/5 rounded-r-xl">
              <p className="text-slate-600 text-sm italic font-medium leading-relaxed">
                "Our mission is to eliminate data compliance friction across global pharmaceutical and device manufacturers, enabling treatments to reach patients months faster."
              </p>
              <span className="text-xs font-mono font-bold text-primary block mt-2">— C Pavan Kumar, CEO</span>
            </div>
          </div>

          {/* Right Graphic card */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="bg-[#051c38] text-white rounded-3xl p-10 border border-white/5 shadow-premium space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-accent" />
                <span className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">Key Architectural Mandate</span>
              </div>
              <ul className="space-y-4 text-xs font-light">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>FDA CFR 21 Part 11 electronic records fully validated.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>ISO 13485 (Medical Device) data traces integrated.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Immutable ledgers for secure digital signatures.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2. CORPORATE CORE VALUES */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-accent font-mono font-bold">Standard Benchmarks</span>
            <h2 className="text-3xl font-display font-bold text-primary">Our Core Values</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Our culture merges biochemical curiosity with absolute engineering discipline:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 p-8 rounded-3xl shadow-premium space-y-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-primary">{v.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. DYNAMIC TEAM CMS GRID */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-accent font-mono font-bold">Executive leadership</span>
            <h2 className="text-3xl font-display font-bold text-primary">Senior Scientific & Engineering Board</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Meet our founding board of veterans directing development across early synthesis, GxP lakes, and clinical data fabrics:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayTeam.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-premium hover:shadow-premium-hover transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Photo container */}
                  <div className="w-full h-64 rounded-2xl overflow-hidden bg-slate-100 relative">
                    <img 
                      src={member.photo || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Bio */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                      <a 
                        href={member.linkedIn || 'https://linkedin.com'} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-slate-400 hover:text-blue-600 transition-colors pt-0.5 shrink-0"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-accent font-mono font-bold block">{member.role}</span>
                    <p className="text-slate-500 text-xs leading-relaxed pt-2">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default About;
