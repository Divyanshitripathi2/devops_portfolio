
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { 
  FolderCode, 
  Github, 
  Star, 
  GitBranch, 
  Cpu, 
  Shield, 
  Workflow, 
  Terminal,
  ArrowUpRight
} from 'lucide-react';

const Projects: React.FC = () => {
  // Mocked language colors
  const langColors: Record<string, string> = {
    'Terraform': '#844fba',
    'Kubernetes': '#326ce5',
    'Jenkins': '#d24939',
    'ArgoCD': '#ef7b4d',
    'Golang': '#00add8',
    'Python': '#3572A5',
    'Groovy': '#4298b8',
    'AWS': '#ff9900'
  };

  return (
    <div className="relative">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black mb-4 tracking-tight flex items-center gap-3 text-white">
            <Github className="text-blue-500" />
            GitHub <span className="text-slate-500">/</span> Best Works
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Engineering robust architectural patterns and open-source DevOps tooling. 
            Focused on scalability, security, and developer productivity.
          </p>
        </div>
        <a 
          href="https://github.com/Divyanshitripathi2/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 px-6 py-3 rounded-full border border-blue-500/20"
        >
          View Full Repository Matrix
          <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            {/* Project Category Badge */}
            <div className="absolute top-8 right-8 flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                <Star size={14} /> 120
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                <GitBranch size={14} /> 45
              </div>
            </div>

            <div className="mb-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                {project.title.includes('Security') || project.title.includes('Governance') ? <Shield size={28} /> : 
                 project.title.includes('GitOps') ? <Workflow size={28} /> : 
                 project.title.includes('Self-Healing') ? <Cpu size={28} /> : 
                 <Terminal size={28} />}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <div className="space-y-3 mb-8">
                {project.description.map((desc, i) => (
                  <p key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    {desc}
                  </p>
                ))}
              </div>
            </div>

            {/* Language Distribution Bar */}
            <div className="mb-6">
              <div className="flex h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mb-3">
                {project.tech.slice(0, 3).map((t, i) => (
                  <div 
                    key={t}
                    style={{ 
                      width: i === 0 ? '60%' : i === 1 ? '25%' : '15%',
                      backgroundColor: langColors[t] || '#475569'
                    }}
                    className="h-full"
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {project.tech.map((t) => (
                  <div key={t} className="flex items-center gap-1.5">
                    <div 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: langColors[t] || '#475569' }} 
                    />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-400 group-hover:text-blue-300 transition-colors"
            >
              Open Documentation <ArrowUpRight size={14} />
            </a>

            {/* Subtle Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* GitHub Activity Mockup */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 p-8 rounded-[2rem] border border-slate-800/50 bg-slate-900/20 backdrop-blur-sm"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
              <Github size={32} className="text-slate-400" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">Repository Health Score: 98%</div>
              <div className="text-slate-500 text-sm">Automated analysis based on documentation coverage & CI pass rate.</div>
            </div>
          </div>
          <div className="flex gap-1">
            {/* contribution graph mockup */}
            {Array.from({ length: 24 }).map((_, i) => (
              <div 
                key={i} 
                className={`w-3 h-3 rounded-sm ${
                  i % 3 === 0 ? 'bg-blue-500/80' : 
                  i % 5 === 0 ? 'bg-blue-500/40' : 
                  'bg-slate-800'
                }`} 
              />
            ))}
            <div className="ml-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest self-center">Commit Activity</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
