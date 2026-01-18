
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Cpu, Cloud, Shield, Activity, RefreshCw, Terminal, FileCode, Ship, Box, GitBranch, Search, Lock } from 'lucide-react';

const iconMap: Record<string, any> = {
  Cloud, Cpu, Shield, Activity, RefreshCw, Terminal, FileCode, Ship, Box, GitBranch, Search, Lock
};

const Skills: React.FC = () => {
  const processedSkills = useMemo(() => {
    const expandedSkills: typeof SKILLS = [];
    
    SKILLS.forEach(skill => {
      if (skill.name.includes('/')) {
        skill.name.split('/').forEach(part => {
          expandedSkills.push({ ...skill, name: part.trim() });
        });
      } else {
        expandedSkills.push(skill);
      }
    });

    // Add requested skills to CI/CD category
    const cicdCategory = expandedSkills.find(s => 
      s.category.toUpperCase().includes('CI') || 
      s.category.toUpperCase().includes('CD')
    )?.category;

    if (cicdCategory) {
      const newSkills = [
        { name: 'GitHub Actions', level: 90, category: cicdCategory, icon: 'GitBranch' }
      ];
      
      newSkills.forEach(skill => {
        if (!expandedSkills.some(s => s.name === skill.name)) {
          expandedSkills.push(skill);
        }
      });
    }

    // Add GKE and EKS to Containerization
    const containerCategory = expandedSkills.find(s => s.category === 'Containerization')?.category;
    if (containerCategory) {
      const newSkills = [
        { name: 'GKE', level: 85, category: containerCategory, icon: 'Cloud' },
        { name: 'EKS', level: 85, category: containerCategory, icon: 'Cloud' }
      ];
      
      newSkills.forEach(skill => {
        if (!expandedSkills.some(s => s.name === skill.name)) {
          expandedSkills.push(skill);
        }
      });
    }

    // Add Datadog to Monitoring
    const monitoringCategory = expandedSkills.find(s => s.category === 'Monitoring')?.category;
    if (monitoringCategory) {
      const newSkills = [
        { name: 'Datadog', level: 88, category: monitoringCategory, icon: 'Activity' }
      ];
      
      newSkills.forEach(skill => {
        if (!expandedSkills.some(s => s.name === skill.name)) {
          expandedSkills.push(skill);
        }
      });
    }

    return expandedSkills;
  }, []);

  const categories = Array.from(new Set(processedSkills.map(s => s.category)));

  return (
    <div>
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 tracking-tight flex items-center gap-3 text-white">
          <Terminal className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          Technical Stack 
        </h2>
        <p className="text-slate-400 max-w-2xl">
          Expertise across the full DevOps lifecycle, from infrastructure provisioning to continuous security and observability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1 }}
            className="p-8 rounded-[2rem] bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-950/80 border border-cyan-400/50 backdrop-blur-md shadow-[0_0_30px_-10px_rgba(34,211,238,0.2)] transition-all duration-500 group/card relative overflow-hidden"
          >
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 mb-8 flex items-center gap-3 relative z-10">
              <span className="w-8 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 shadow-[0_0_15px_rgba(34,211,238,0.6)]" />
              {cat}
            </h3>
            
            <div className="space-y-4 relative z-10">
              {processedSkills.filter(s => s.category === cat).map((skill, skillIdx) => {
                const Icon = iconMap[skill.icon] || Terminal;
                return (
                  <motion.div 
                    key={skill.name} 
                    whileHover={{ scale: 1.03, x: 4 }}
                    className="group flex items-center gap-4 p-3 rounded-2xl bg-slate-800/20 border border-slate-800/80 hover:border-cyan-400/60 hover:bg-slate-800/60 transition-all shadow-sm hover:shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)]"
                  >
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 group-hover:text-cyan-50 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:border-transparent transition-all duration-300 shadow-inner group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                      <Icon size={20} />
                    </div>
                    <span className="font-bold text-slate-400 group-hover:text-white transition-colors tracking-wide">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
