import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="bg-[#F0F2EB] rounded-[3rem] p-8 md:p-16 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden relative">
        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-stone-900 mb-6"
          >
            Not your typical doctor's office.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-stone-600 text-lg leading-relaxed mb-6 font-medium"
          >
            We've reimagined the chiropractic experience. No rushed appointments, no crack-and-go mentality, and no confusing care plans.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-stone-600 text-lg leading-relaxed mb-10 font-medium"
          >
            Instead, we offer 45-minute comprehensive sessions that blend precise adjustments with deep tissue work and active rehab.
          </motion.p>

          <motion.a 
            href="#team"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block text-stone-900 font-bold border-b-2 border-stone-900 pb-1 hover:text-emerald-700 hover:border-emerald-700 transition-colors"
          >
            Meet our doctors
          </motion.a>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
            alt="Doctor assisting patient" 
            className="w-full h-full object-cover" 
          />
        </motion.div>
      </div>
    </section>
  )
}
