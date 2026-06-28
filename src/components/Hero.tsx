import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 bg-stone-100 px-4 py-2 rounded-full mb-8 border border-stone-200"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-bold text-stone-600 uppercase tracking-wide">Accepting New Patients in NYC</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tight leading-[1.1] mb-8 max-w-4xl"
        >
          Modern chiropractic care for the everyday athlete.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-stone-500 max-w-2xl font-medium leading-relaxed mb-10"
        >
          Evidence-based adjustments, soft tissue therapy, and movement coaching designed to keep you out of pain and feeling your best. No endless treatment plans.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <a href="#booking" className="w-full sm:w-auto px-8 py-4 bg-stone-900 text-white rounded-full font-bold text-lg hover:bg-stone-800 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
            <span>Book Your Visit</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-white text-stone-900 rounded-full font-bold text-lg border-2 border-stone-200 hover:border-stone-300 transition-colors flex items-center justify-center">
            Our Approach
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="w-full aspect-[4/3] md:aspect-[21/9] bg-stone-200 rounded-[2rem] overflow-hidden relative shadow-sm mb-16"
        >
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80" 
            alt="Modern bright clinic space" 
            className="w-full h-full object-cover" 
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-5xl px-4"
        >
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-stone-900 mb-2">45m</h3>
            <p className="text-stone-500 font-medium text-sm">Comprehensive Sessions</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-stone-900 mb-2">1-on-1</h3>
            <p className="text-stone-500 font-medium text-sm">Doctor Time Only</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-stone-900 mb-2 flex items-center">
              5.0 <Star className="w-6 h-6 ml-1 text-yellow-400 fill-yellow-400" />
            </h3>
            <p className="text-stone-500 font-medium text-sm">Patient Reviews</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-stone-900 mb-2">OON</h3>
            <p className="text-stone-500 font-medium text-sm">Insurance Accepted</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
