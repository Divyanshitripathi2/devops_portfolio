
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Cpu, Cloud, Shield, Terminal, Download } from 'lucide-react';

const Hero: React.FC = () => {
  // Using the high-reliability Google Photos/Drive proxy format
  // File ID: 1BMyHNXS2BnzBz1ZPAzNzF1d3QRP1Eudm
  const profileImageUrl = "https://lh3.googleusercontent.com/d/1BMyHNXS2BnzBz1ZPAzNzF1d3QRP1Eudm";

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Animated Background Orbs */}
      <motion.div 
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"
      />
      
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Senior Leadership Roles
          </motion.div>

          <h1 className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tight mb-6 leading-tight text-white">
            Divyanshi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500">
              Tripathi
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-xl mb-10 leading-relaxed font-light">
            I architect <span className="text-slate-100 font-medium">resilient infrastructure</span> that scales to millions of users, specializing in <span className="text-blue-400 font-medium">DevSecOps</span> and <span className="text-indigo-400 font-medium">Cloud Governance</span>.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button 
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-2xl shadow-blue-500/40 flex items-center gap-2"
            >
              Start The Journey
              <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="flex items-center gap-2 px-6 py-4 text-slate-300 hover:text-white font-bold transition-colors group">
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              Download Resume
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-800/50 pt-8">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">3+</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-black mt-1">Years Travelled</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">50+</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-black mt-1">SaaS Nodes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">100%</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-black mt-1">Automation</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center lg:justify-end min-h-[500px]"
        >
          <div className="relative">
            {/* Animated Glow Ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-[2.5rem] blur-2xl animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative w-72 h-96 md:w-80 md:h-[480px] xl:w-96 xl:h-[520px] rounded-[2.2rem] border border-white/10 overflow-hidden bg-slate-900 shadow-2xl">
              <img 
                src={profileImageUrl}
                alt="Divyanshi Tripathi"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105 contrast-[1.1] brightness-[1.05]"
                loading="eager"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Final fallback to specialized avatar if link is still blocked by permissions
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Divyanshi+Tripathi&background=020617&color=3b82f6&size=512&bold=true';
                  console.warn("Profile image failed to load. Please ensure your Google Drive file is set to 'Anyone with the link can view'.");
                }}
              />
              
              {/* Overlay Gradient for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              
              {/* Text Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
                      <Terminal size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-white uppercase tracking-tight">Cloud Architect</div>
                      <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Stability Specialist</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating HUD Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
              className="absolute -top-6 -left-6 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-sm"
            >
              <Cpu size={24} className="text-blue-500" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, delay: 0.5, ease: "easeInOut" }} 
              className="absolute top-1/2 -right-8 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-sm"
            >
              <Cloud size={24} className="text-indigo-400" />
            </motion.div>
            
            <motion.div 
              animate={{ x: [0, 5, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
              className="absolute -bottom-4 -left-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-sm"
            >
              <Shield size={24} className="text-emerald-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 hover:text-blue-500 transition-colors cursor-pointer"
        onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;
