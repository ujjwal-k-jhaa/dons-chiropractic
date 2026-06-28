import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-stone-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden"
      >
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Ready to get back to doing what you love?
          </h2>
          <p className="text-stone-400 text-lg md:text-xl font-medium mb-10 leading-relaxed">
            Stop letting pain dictate your life. Book a session today and let's build a plan to get you moving freely again.
          </p>
          <a href="#booking" className="px-8 py-4 bg-emerald-500 text-stone-900 rounded-full font-bold text-lg hover:bg-emerald-400 transition-colors shadow-lg hover:shadow-xl inline-flex items-center space-x-2 group">
            <span>Book Your Initial Visit</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      </motion.div>
    </section>
  );
}
