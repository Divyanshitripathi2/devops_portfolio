
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import { MILESTONES } from '../constants';
import { Navigation, MapPin, Gauge, ShieldCheck, Flag, Compass } from 'lucide-react';

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReversing, setIsReversing] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });
  
  const scrollY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const carY = useTransform(scrollY, [0, 1], ["0%", "96%"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest !== previous) {
      setIsReversing(latest < previous);
    }
  });

  const visibleMilestones = MILESTONES.filter(m => !m.hidden);
  const totalMiles = visibleMilestones.reduce((acc, m) => acc + (m.description.length * 125), 0);
  const displayMiles = Math.floor(totalMiles / 100) * 100;

  return (
    <div className="relative">
      {/* Header Info */}
      <div className="mb-24 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-slate-800 pb-12">
        <div className="max-w-xl">
          <h2 className="text-4xl font-black mb-4 tracking-tight flex items-center gap-4 text-white uppercase">
            <Navigation className="text-blue-500 -rotate-45" size={40} />
            The Career <span className="text-blue-500">Highway</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Navigating the complex landscape of infrastructure, from initial deployment to enterprise-scale automation.
          </p>
        </div>
        
        <div className="flex items-center gap-8 bg-slate-900/50 p-6 rounded-3xl border border-slate-800">
          <div className="text-center">
            <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Total Distance</div>
            <div className="text-3xl font-black text-white tabular-nums tracking-tighter">{displayMiles.toLocaleString()}+ <span className="text-blue-500 text-sm italic">Miles</span></div>
          </div>
          <div className="h-10 w-px bg-slate-800" />
          <div className="text-center">
            <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Current Speed</div>
            <div className="text-3xl font-black text-blue-400 tracking-tighter">99.9% <span className="text-slate-500 text-sm">UPTIME</span></div>
          </div>
        </div>
      </div>

      {/* The Road Container */}
      <div className="relative pb-20" ref={containerRef}>
        {/* The Highway Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-24 -translate-x-1/2 bg-slate-900/30 overflow-hidden hidden md:block rounded-full border-x border-slate-800/50">
           {/* Dashed Center Line */}
           <div className="absolute inset-0 flex flex-col items-center justify-around gap-20 py-10">
             {Array.from({ length: 15 }).map((_, i) => (
               <div key={i} className="w-1.5 h-16 bg-slate-700/50 rounded-full animate-pulse" />
             ))}
           </div>

           {/* Animated Car */}
           <motion.div 
             style={{ top: carY, x: "-50%", willChange: 'top, transform' }}
             animate={{ rotate: isReversing ? 180 : 0 }}
             transition={{ duration: 0.2 }}
             className="absolute left-1/2 z-20"
           >
             <div className="relative">
               <div className="absolute -inset-2 bg-blue-500/20 blur-xl rounded-full" />
               
               {/* Headlights */}
               <svg className="absolute top-[88px] left-0 w-full h-48 z-0 opacity-60 pointer-events-none" viewBox="0 0 48 192" preserveAspectRatio="none">
                 <defs>
                   <linearGradient id="headlight-gradient" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5" />
                     <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
                   </linearGradient>
                 </defs>
                 <path d="M10 0 L -20 192 L 35 192 Z" fill="url(#headlight-gradient)" />
                 <path d="M38 0 L 13 192 L 68 192 Z" fill="url(#headlight-gradient)" />
               </svg>

               {/* Custom Top-Down Car SVG */}
               <svg width="48" height="96" viewBox="0 0 48 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                 <path d="M8 12C8 5.37258 15.1634 0 24 0C32.8366 0 40 5.37258 40 12V84C40 90.6274 32.8366 96 24 96C15.1634 96 8 90.6274 8 84V12Z" fill="#0F172A" stroke="#3B82F6" strokeWidth="2"/>
                 <rect x="14" y="28" width="20" height="40" rx="4" fill="#1E293B" stroke="#60A5FA" strokeWidth="1"/>
                 <path d="M15 60H33L32 66H16L15 60Z" fill="#93C5FD" fillOpacity="0.8"/>
                 <path d="M15 36H33L32 30H16L15 36Z" fill="#1E3A8A"/>
                 <path d="M10 88L10 92" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round"/>
                 <path d="M38 88L38 92" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round"/>
                 <path d="M10 4L10 8" stroke="#EF4444" strokeWidth="3" strokeLinecap="round"/>
                 <path d="M38 4L38 8" stroke="#EF4444" strokeWidth="3" strokeLinecap="round"/>
                 <path d="M8 32H4V38H8" fill="#0F172A" stroke="#3B82F6" strokeWidth="1"/>
                 <path d="M40 32H44V38H40" fill="#0F172A" stroke="#3B82F6" strokeWidth="1"/>
               </svg>
             </div>
           </motion.div>
        </div>

        {/* Mobile Line */}
        <div className="absolute left-8 md:hidden top-0 bottom-0 w-1 bg-slate-800" />

        <div className="space-y-32">
          {MILESTONES.filter(milestone => !milestone.hidden).map((milestone, idx) => (
            <motion.div
              key={milestone.company}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row items-center gap-12 ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Mile Marker Sign */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20">
                <motion.div 
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex flex-col items-center justify-center border-4 shadow-2xl ${
                    milestone.isCurrent 
                      ? 'bg-blue-600 border-white text-white' 
                      : 'bg-slate-800 border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="text-[10px] font-black uppercase leading-none">Mile</div>
                  <div className="text-xl md:text-2xl font-black leading-none">{milestone.period.split('–')[0].trim().split(' ').pop()}</div>
                </motion.div>
              </div>

              {/* Content Panel */}
              <div className="ml-24 md:ml-0 md:w-[45%]">
                <div className={`p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 backdrop-blur-xl relative group transition-all duration-500 hover:border-blue-500/30 ${
                  milestone.isCurrent ? 'ring-2 ring-blue-500/20' : ''
                }`}>
                  <div className="mb-8">
                    <div className="flex items-center gap-3 text-blue-500 font-black text-xs uppercase tracking-widest mb-2">
                      <Compass size={14} />
                      {milestone.location}
                    </div>
                    <h3 className="text-3xl font-black text-white mb-1">{milestone.company}</h3>
                    <p className="text-slate-400 text-lg font-medium">{milestone.role}</p>
                  </div>

                  {/* Responsibilities as Miles */}
                  <div className="space-y-6">
                    {milestone.description.map((item, i) => (
                      <div key={i} className="flex gap-4 group/mile">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-black text-blue-400 group-hover/mile:bg-blue-500 group-hover/mile:text-white transition-colors">
                            {i + 1}
                          </div>
                          {i !== milestone.description.length - 1 && (
                            <div className="w-0.5 flex-grow bg-slate-800 my-1" />
                          )}
                        </div>
                        <div className="pb-4">
                          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 italic">Achievement Milestone</div>
                          <p className="text-slate-300 leading-relaxed text-sm group-hover/mile:text-white transition-colors">
                            {item}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Distance Indicator */}
                  <div className="absolute -bottom-4 right-8 px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest shadow-xl">
                    +{(milestone.description.length * 125)} Journey Miles Added
                  </div>
                </div>
              </div>

              {/* Visual Decoration for the other side */}
              <div className="hidden md:flex md:w-[45%] flex-col items-center justify-center space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 0.1, x: 0 }}
                  className="text-8xl font-black text-white pointer-events-none"
                >
                  {milestone.shortName || milestone.company.substring(0, 3)}
                </motion.div>
                <div className="flex gap-4 opacity-40">
                  <Gauge className="text-blue-500" />
                  <ShieldCheck className="text-indigo-400" />
                  <Flag className="text-slate-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Road End */}
      <div className="mt-20 flex flex-col items-center justify-center text-center">
        <div className="w-1 h-20 bg-gradient-to-b from-slate-800 to-transparent mb-8" />
        <div className="p-8 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 animate-bounce">
          <Flag size={40} />
        </div>
        <h4 className="mt-6 text-2xl font-black text-white uppercase tracking-tighter">The Journey Continues...</h4>
      </div>
    </div>
  );
};

export default Experience;
