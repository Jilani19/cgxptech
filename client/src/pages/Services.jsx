import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Database, Binary, TrendingUp, CheckCircle, ShieldCheck, ArrowRight, FlaskConical, Award } from 'lucide-react';

function Services() {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();

  const servicesData = {
    'data-engineering': {
      title: 'Data Engineering',
      icon: <Database className="w-8 h-8 text-blue-500" />,
      tagline: 'GxP compliant data lake validation and scalable streaming architectures.',
      description: 'We design and deploy robust, FDA-validated data ingestion pipelines. We ingest multi-channel data from clinical trials, lab equipment, and raw bioreactor telemetry into consolidated, immutable structures.',
      useCases: [
        'Centralizing cleanroom and climate telemetry sensor streams into AWS Redshift lakes.',
        'Migrating messy legacy clinical trial spreadsheet data into robust Postgres schemas.',
        'Building real-time ETL pathways for contract manufacturing yield statistics.'
      ],
      methodology: [
        { phase: 'Discovery & Schema Mapping', desc: 'Analyzing compound parameters, instrument exports, and validation thresholds.' },
        { phase: 'Pipeline Ingestion Setup', desc: 'Writing robust Spark scripts to ingest raw data formats cleanly.' },
        { phase: 'Validation & Compliance Testing', desc: 'Validating data lineages under strict CFR 21 Part 11 requirements.' }
      ],
      tools: ['Apache Spark', 'AWS Glue', 'dbt (data build tool)', 'Snowflake', 'Airflow', 'PostgreSQL'],
      caseStudy: {
        title: 'Centralizing Multi-Site Bioreactor Data for Pfizer Synthetics Partner',
        problem: 'A leading compound synthetic laboratory was experiencing 24-hour delays in batch telemetry gathering across four global facilities, hindering immediate reaction to temperature spikes.',
        solution: 'Our engineers deployed an automated IoT bridge that ingested bioreactor outputs directly to an encrypted GxP-validated Snowflake cluster every 5 minutes.',
        result: 'Reduced telemetry latency from 24 hours to under 6 minutes, preventing two critical batch failures and saving an estimated $1.2M in raw therapeutic compounds.'
      }
    },
    'data-science': {
      title: 'Data Science & AI',
      icon: <Binary className="w-8 h-8 text-teal-500" />,
      tagline: 'Predictive analytics, target molecule screening, and deep generative molecular folding.',
      description: 'Leverage state-of-the-art machine learning models to accelerate drug compound screening and bioreactor yields. We build regulatory-compliant, interpretable AI structures.',
      useCases: [
        'Predicting high-throughput assay cell binding affinity scoring using custom CNN models.',
        'Analyzing gene expression patterns in clinical cohorts to identify target therapeutics.',
        'Optimizing cleanroom yield rates using custom multi-variable random forest modeling.'
      ],
      methodology: [
        { phase: 'Feature Engineering', desc: 'Extracting molecular descriptors, genomic sequences, or sensor parameters.' },
        { phase: 'Model Synthesis & Training', desc: 'Training interpretable algorithms using high-performance GPU configurations.' },
        { phase: 'GxP Model Validation', desc: 'Documenting mathematical variables and data lineages for FDA inspections.' }
      ],
      tools: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'MLflow', 'Jupyter', 'Pandas'],
      caseStudy: {
        title: 'Accelerating Binding Affinity Assays for BioGen Therapeutics',
        problem: 'Manual compound assays were taking bio-chemists months to run, slowing down early-stage therapeutic pipelines.',
        solution: 'Developed a deep convolutional target-interaction model trained on 400,000 public assay parameters to predict molecular binding rates.',
        result: 'Identified 12 high-potential lead compounds in under 4 days, resulting in a 70% decrease in overall laboratory screening expenses.'
      }
    },
    'data-analytics': {
      title: 'Data Analytics & BI',
      icon: <TrendingUp className="w-8 h-8 text-amber-500" />,
      tagline: 'GxP audit-ready executive dashboards and real-time yield analytics.',
      description: 'Consolidate complex data into clean, interactive, GxP-ready analytical reports. Our visualizations map production lineages and validation histories for simple auditing.',
      useCases: [
        'Creating automated FDA CFR 21 Part 11 compliant operational dashboard displays.',
        'Visualizing cleanroom sanitation cycles, temperature tolerances, and inspector check histories.',
        'Tracking candidate placement rates and recruiting trends in GxP environments.'
      ],
      methodology: [
        { phase: 'Dashboard Wireframing', desc: 'Designing user pathways and highlighting critical regulatory safety indicators.' },
        { phase: 'Visual Component Build', desc: 'Creating robust, interactive dashboard reports using modern BI interfaces.' },
        { phase: 'Audit Lineage Verification', desc: 'Validating that reported data flows exactly from verified source tables.' }
      ],
      tools: ['Tableau', 'Power BI', 'd3.js', 'Looker', 'Python Dash', 'SQL Server Reporting'],
      caseStudy: {
        title: 'Automating FDA Audit Report Dossiers for MedDev Class III Outflow',
        problem: 'A pacemaking device corporation spent 60 working hours manually consolidating quality safety files for every FDA audit iteration.',
        solution: 'Deployed a GxP-compliant d3.js dashboard directly tracking assembly sensor reports and inspector check files.',
        result: 'Reduced FDA audit data compilation times to a single button click, lowering operational preparation hours by 98%.'
      }
    }
  };

  // Determine active service slug (fallback if none or invalid)
  const activeSlug = (serviceSlug && servicesData[serviceSlug]) ? serviceSlug : 'data-engineering';
  const activeService = servicesData[activeSlug];

  return (
    <div className="pt-32 pb-24 bg-bg-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Header Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-accent font-mono font-bold">Expert Capabilities</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">Advanced Core Services</h1>
          <p className="text-slate-500 text-lg">
            We provide life science companies with validated data pipelines, cutting-edge machine learning structures, and GxP audit-ready analytical reports.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center border-b border-slate-200 pb-2 flex-wrap gap-2 md:gap-6">
          {Object.keys(servicesData).map((slug) => (
            <button
              key={slug}
              onClick={() => navigate(`/services/${slug}`)}
              className={`px-6 py-3 text-sm font-semibold rounded-t-xl transition-all duration-300 ${
                activeSlug === slug 
                  ? 'border-b-2 border-accent text-accent-dark bg-white shadow-sm' 
                  : 'text-slate-500 hover:text-primary hover:bg-slate-100/50'
              }`}
            >
              {servicesData[slug].title}
            </button>
          ))}
        </div>

        {/* Dynamic Service Container */}
        <motion.div 
          key={activeSlug}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6"
        >
          {/* Main Content Column (Left) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Hero block */}
            <div className="bg-white border border-slate-200/60 p-8 md:p-10 rounded-3xl shadow-premium space-y-6">
              <div className="flex items-center space-x-3.5">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {activeService.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-500" /> CFR 21 Part 11 Validated
                  </span>
                  <h2 className="text-3xl font-display font-bold text-primary mt-1">{activeService.title}</h2>
                </div>
              </div>
              
              <p className="text-slate-400 text-xs font-semibold uppercase font-mono tracking-wider">
                {activeService.tagline}
              </p>
              
              <p className="text-slate-500 text-base leading-relaxed">
                {activeService.description}
              </p>
            </div>

            {/* Methodology Flow */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-primary">Core Delivery Methodology</h3>
              <div className="space-y-4">
                {activeService.methodology.map((step, idx) => (
                  <div key={idx} className="bg-white border border-slate-200/60 rounded-2xl p-6 flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 text-accent-dark font-bold font-mono text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-sm">{step.phase}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases Block */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-primary">Common Client Workflows</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activeService.useCases.map((useCase, idx) => (
                  <div key={idx} className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-premium flex flex-col justify-between">
                    <CheckCircle className="w-6 h-6 text-accent shrink-0 mb-4" />
                    <p className="text-slate-600 text-xs leading-relaxed">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Case Study & Tools Sidebar (Right) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Case Study Card */}
            <div className="bg-[#051c38] text-white rounded-3xl p-8 border border-white/5 shadow-premium space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-300 font-bold">Featured Case Study</span>
              </div>
              
              <h4 className="text-lg font-bold font-display leading-snug">{activeService.caseStudy.title}</h4>
              
              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-slate-400 font-mono block text-[10px] uppercase tracking-wider">The Challenge</span>
                  <p className="text-slate-300 mt-1 leading-relaxed">{activeService.caseStudy.problem}</p>
                </div>
                <div>
                  <span className="text-slate-400 font-mono block text-[10px] uppercase tracking-wider">The Solution</span>
                  <p className="text-slate-300 mt-1 leading-relaxed">{activeService.caseStudy.solution}</p>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <span className="text-accent font-mono block text-[10px] uppercase tracking-wider">The Result</span>
                  <p className="text-white font-semibold mt-1 leading-relaxed">{activeService.caseStudy.result}</p>
                </div>
              </div>
            </div>

            {/* Tools Utilized */}
            <div className="bg-white border border-slate-200/60 p-8 rounded-3xl shadow-premium space-y-6">
              <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold border-b border-slate-100 pb-3">
                Core Tech Integration
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {activeService.tools.map((tool) => (
                  <span 
                    key={tool} 
                    className="bg-bg-light border border-slate-200 text-primary text-xs font-semibold px-3 py-1.5 rounded-xl shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Talk to our Experts Banner */}
            <div className="bg-gradient-to-r from-accent to-accent-dark text-white rounded-3xl p-8 shadow-premium text-center space-y-4">
              <FlaskConical className="w-10 h-10 mx-auto text-white" />
              <h4 className="text-lg font-bold font-display">Require {activeService.title} Consulting?</h4>
              <p className="text-white/90 text-xs leading-relaxed">
                Connect with our expert team to audit your current databases and map out compliance plans.
              </p>
              <div className="pt-2">
                <Link 
                  to="/contact" 
                  className="w-full inline-flex items-center justify-center py-3 bg-white text-primary-dark rounded-xl font-bold hover:scale-105 transition-all text-xs"
                >
                  Consult senior architects <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Services;
