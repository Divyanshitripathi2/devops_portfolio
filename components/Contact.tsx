
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="relative">
      <div className="max-w-4xl mx-auto p-12 rounded-[2.5rem] bg-gradient-to-b from-blue-600 to-indigo-700 relative overflow-hidden shadow-2xl shadow-blue-500/20">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#fff,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 opacity-10">
            <Github size={200} strokeWidth={0.5} />
        </div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 flex justify-center"
          >
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <MessageSquare className="text-white w-8 h-8" />
            </div>
          </motion.div>

          <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Let's Scale Together.</h2>
          <p className="text-blue-100 text-lg mb-12 max-w-xl mx-auto">
            Available for consulting, architectural reviews, or senior leadership opportunities in the cloud-native space.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Email', value: 'divyanshitripathi.place@gmail.com', href: 'mailto:divyanshitripathi.place@gmail.com', Icon: Mail },
              { label: 'LinkedIn', value: 'Divyanshi Tripathi', href: 'https://linkedin.com', Icon: Linkedin },
              { label: 'GitHub', value: '@Divyanshitripathi2', href: 'https://github.com/Divyanshitripathi2/', Icon: Github }
            ].map((contact, idx) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md transition-all group text-center"
              >
                <contact.Icon className="w-6 h-6 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <span className="block text-xs font-bold text-blue-200 uppercase tracking-widest mb-1">{contact.label}</span>
                <span className="block text-sm text-white font-semibold truncate px-2">{contact.value}</span>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:divyanshitripathi.place@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white text-blue-700 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-3"
          >
            Send a Transmission
            <Send size={20} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
