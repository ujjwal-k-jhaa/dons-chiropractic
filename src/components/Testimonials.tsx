import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="bg-stone-900 rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <div className="flex justify-center space-x-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.2] mb-10">
            "Finally, a chiropractor who actually listens. The 45-minute sessions mean we can address the adjustments, muscle work, and rehab all at once. I'm running pain-free for the first time in years."
          </h3>
          
          <div>
            <div className="font-bold text-lg">Sarah J.</div>
            <div className="text-stone-400 font-medium">Marathon Runner</div>
          </div>
        </motion.div>
        
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>
    </section>
  );
}
