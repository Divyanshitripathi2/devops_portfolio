
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Cpu, Cloud, Shield, Activity, RefreshCw, Terminal, FileCode, Ship, Box, GitBranch, Search, Lock } from 'lucide-react';

const iconMap: Record<string, any> = {
  Cloud, Cpu, Shield, Activity, RefreshCw, Terminal, FileCode, Ship, Box, GitBranch, Search, Lock
};

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <div>
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 tracking-tight flex items-center gap-3 text-white">
          <Terminal className="text-blue-500" />
          Technical Stack & Arsenal
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
            className="p-8 rounded-3xl bg-slate-900/20 border border-slate-800/50 backdrop-blur-sm"
          >
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              {cat}
            </h3>
            
            <div className="space-y-8">
              {SKILLS.filter(s => s.category === cat).map((skill, skillIdx) => {
                const Icon = iconMap[skill.icon] || Terminal;
                return (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-400/10 transition-all">
                          <Icon size={18} />
                        </div>
                        <span className="font-semibold text-slate-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-slate-500 group-hover:text-blue-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + skillIdx * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full"
                      />
                    </div>
                  </div>
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
