import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Database, Search, FileSpreadsheet, Server, ShieldCheck, ArrowRight, Table } from 'lucide-react';

function DataSources() {
  const { sourceSlug } = useParams();
  const navigate = useNavigate();

  const sources = [
    {
      slug: 'rd',
      title: 'R&D Databases',
      icon: <Database className="w-6 h-6 text-blue-500" />,
      description: 'Unified registers containing active therapeutic structures, cell molecular sequencing, early chemistry formulation records, and initial preclinical trial logs.',
      dataTypes: [
        'Small-molecule chemical structures & formula files (SDF, MOL)',
        'Next-generation genomic sequencer outputs (FASTA, FASTQ)',
        'Pre-clinical target protein binding assay records'
      ],
      industries: ['Pharmaceuticals', 'Biopharmaceuticals', 'Veterinary Medicine']
    },
    {
      slug: 'clinical-research',
      title: 'Clinical Research Registries',
      icon: <Search className="w-6 h-6 text-teal-500" />,
      description: 'Validated patient cohorts, trial diaries, statistical analysis datasets (ADaM, SDTM), and dynamic adverse events reports mapping safety benchmarks.',
      dataTypes: [
        'Electronic Case Report Forms (eCRF) & clinical cohort logs',
        'CDISC compliant clinical datasets (SDTM, ADaM files)',
        'Adverse event registries & FDA safety reporting archives'
      ],
      industries: ['Pharmaceuticals', 'Biopharmaceuticals', 'Medical Devices']
    },
    {
      slug: 'manufacturing',
      title: 'Manufacturing Log Ingests',
      icon: <Server className="w-6 h-6 text-amber-500" />,
      description: 'Continuous cleanroom telemetry monitoring logs, active bioreactor temperature cycles, scale-up packaging records, and batch release checklists.',
      dataTypes: [
        'IoT smart temperature, humidity, and particle cleanroom streams',
        'Continuous bioreactor growth cycle data (pH, cell logs)',
        'Batch Record Lineage Files & digital safety releases'
      ],
      industries: ['Pharmaceuticals', 'Biopharmaceuticals', 'Food Sciences', 'Cosmetics']
    },
    {
      slug: 'laboratory',
      title: 'Laboratory Integration Fabrics',
      icon: <FileSpreadsheet className="w-6 h-6 text-emerald-500" />,
      description: 'Validated Laboratory Information Management Systems (LIMS) connections, spectrometer files, pipette calibrations, and researcher verification logs.',
      dataTypes: [
        'Spectrometer, chromatography, and analysis tool raw exports',
        'LIMS audit trail records & researcher electronic sign-offs',
        'Equipment calibration logs (ISO 17025 files)'
      ],
      industries: ['Pharmaceuticals', 'Biopharmaceuticals', 'Cosmetics', 'Food Sciences']
    }
  ];

  // Determine active item for details highlight if selected
  const activeSource = sources.find(s => s.slug === sourceSlug);

  return (
    <div className="pt-32 pb-24 bg-bg-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Header Hero */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-accent font-mono font-bold">Standard Registers</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">Data Sources & Pipelines</h1>
          <p className="text-slate-500 text-lg">
            We map, validate, and synchronize multi-channel biomedical and engineering logs. Check out the core data feeds we integrate into our client systems.
          </p>
        </div>

        {/* Grid of Data Source Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sources.map((src, idx) => (
            <motion.div
              key={src.slug}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => navigate(`/data-sources/${src.slug}`)}
              className={`bg-white rounded-3xl p-8 border shadow-premium hover:shadow-premium-hover hover:border-slate-300 transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
                sourceSlug === src.slug ? 'ring-2 ring-accent border-transparent' : 'border-slate-200/60'
              }`}
            >
              {/* Highlight Circle for Active Selected Tile */}
              {sourceSlug === src.slug && (
                <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-full blur-xl" />
              )}

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {src.icon}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-500" /> Audit Trail Live
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-primary group-hover:text-accent-dark transition-colors">{src.title}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{src.description}</p>
                </div>

                {/* Sub-lists */}
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold block">Structured Formats Covered:</span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {src.dataTypes.slice(0, 2).map((dt, dtIdx) => (
                      <li key={dtIdx} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span className="leading-snug">{dt}</span>
                      </li>
                    ))}
                    {src.dataTypes.length > 2 && (
                      <li className="text-accent-dark font-semibold text-[10px] pl-4">+ View more formats below</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Compatible Industries row */}
              <div className="pt-6 border-t border-slate-50 mt-6 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {src.industries.map((ind) => (
                    <span key={ind} className="bg-bg-light border border-slate-100 text-[10px] font-semibold text-slate-500 px-2.5 py-1 rounded-lg">
                      {ind}
                    </span>
                  ))}
                </div>
                <div className="text-xs font-bold text-accent-dark group-hover:translate-x-1 transition-transform flex items-center shrink-0">
                  Select <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Detailed Drawer Overlay (Appears if a tile is actively selected) */}
        {activeSource && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary-dark text-white rounded-3xl p-8 md:p-12 border border-white/5 shadow-premium space-y-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-white/10 pb-6 flex-wrap gap-4">
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                  {activeSource.icon}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">Selected Register Deep-Dive</span>
                  <h3 className="text-2xl font-bold text-white font-display mt-0.5">{activeSource.title} Specification</h3>
                </div>
              </div>
              <button 
                onClick={() => navigate('/data-sources')}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold hover:bg-white/10"
              >
                Close Deep-Dive
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-sm leading-relaxed">
              <div className="space-y-4">
                <h4 className="font-bold text-accent font-mono uppercase text-xs tracking-wider">Operational Summary</h4>
                <p className="text-slate-300 font-light leading-relaxed">
                  The {activeSource.title} layer serves as a validated data mesh entry point. Records processed through this ingress undergo automated checksum validation, GxP metadata mapping, and secure ledger hashing to satisfy international pharmaceutical and device quality mandates.
                </p>
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center space-x-3 text-xs">
                  <Table className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-slate-300 font-mono">Database Type: CFR 21 Part 11 Audit Ledger</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-accent font-mono uppercase text-xs tracking-wider">All Structured Formats Supported</h4>
                <ul className="space-y-3.5">
                  {activeSource.dataTypes.map((dt, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-slate-300 font-light">
                      <span className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center shrink-0 font-bold font-mono text-accent text-xs">
                        {idx + 1}
                      </span>
                      <span className="pt-0.5 leading-snug">{dt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}

export default DataSources;
