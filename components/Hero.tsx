
import React from 'react';

import { motion } from 'framer-motion';

import { ChevronDown, Download, Calendar, BookUser } from 'lucide-react';



const Hero: React.FC = () => {

  const resumeUrl = "https://drive.google.com/file/d/1aDQJdE32WjGXuyrrixT6Vig0USNpiuPV/view?usp=sharing";

  const topmateUrl = "https://topmate.io/divyanshi_tripathi12";

  const mediumUrl = "https://medium.com/@divyanshitripathi.place";



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

      

      <div className="relative z-10 w-full grid grid-cols-1 gap-12 items-center">

        

        {/* Content */}

        <motion.div

          initial={{ opacity: 0, y: -50 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8, ease: "easeOut" }}

          className="text-center"

        >

                                        

                              

                                        <motion.img

                                          src="/dt-devops-profile.png"

                                          alt="Divyanshi Tripathi"

                                          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-slate-700 shadow-lg"

                                          initial={{ scale: 0, opacity: 0 }}

                                          animate={{ scale: 1, opacity: 1 }}

                                          transition={{ delay: 0.1, duration: 0.5 }}

                                        />

                              

                                        <h1 className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tight mb-6 leading-tight text-white">

                      Divyanshi <br />

                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500">

                        Tripathi

                      </span>

                    </h1>

          

                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light mx-auto">

          

                      I architect and automate <span className="text-slate-100 font-medium">highly available, secure cloud infrastructure</span> that empowers businesses to scale seamlessly to millions of users. My expertise lies in production-grade <span className="text-blue-400 font-medium">DevSecOps</span>, <span className="text-indigo-400 font-medium">Kubernetes orchestration</span>, and proactive <span className="text-blue-400 font-medium">Cloud Governance</span>.

          

                    </p>



          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a 
              href={topmateUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={18} />
              Book a 1:1
              <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <motion.a 
              href={resumeUrl} 
              className="flex items-center gap-2 px-6 py-3 text-slate-300 hover:text-white font-bold transition-colors group bg-slate-800/50 hover:bg-slate-800 rounded-xl"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              View Resume
            </motion.a>

            <motion.a 
              href={mediumUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 text-slate-300 hover:text-white font-bold transition-colors group bg-slate-800/50 hover:bg-slate-800 rounded-xl"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                <BookUser size={18} />
                Medium
            </motion.a>
          </div>



          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-800/50 pt-8 max-w-lg mx-auto">

            <div>

              <div className="text-3xl font-bold text-white tracking-tighter">3+</div>

              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-black mt-1">Years Travelled</div>

            </div>

            <div>

                            <div className="text-3xl font-bold text-white tracking-tighter">15+</div>

                            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-black mt-1">projects</div>

            </div>

            <div>

              <div className="text-3xl font-bold text-white tracking-tighter">100%</div>

              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-black mt-1">Automation</div>

            </div>

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
