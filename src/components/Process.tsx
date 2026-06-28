import { motion } from 'motion/react';

const steps = [
  {
    num: "01",
    title: "Discovery & Assessment",
    desc: "We start with a thorough movement assessment to understand not just where you hurt, but why you hurt. We look at your body as a connected system."
  },
  {
    num: "02",
    title: "Targeted Treatment",
    desc: "A blend of precise chiropractic adjustments and hands-on soft tissue therapy (like Active Release) to restore mobility and calm the nervous system."
  },
  {
    num: "03",
    title: "Movement & Rehab",
    desc: "Treatment doesn't end on the table. We teach you specific exercises to build strength in new ranges of motion, making your results last."
  }
];

export default function Process() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="sticky top-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-stone-900 mb-6"
          >
            How we get you <br className="hidden md:block"/> better, faster.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-stone-500 text-lg font-medium max-w-md"
          >
            Our three-step framework is designed to find the root cause of your pain, fix the mechanics, and teach you how to maintain it.
          </motion.p>
        </div>

        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[2rem] border border-stone-200 shadow-sm relative overflow-hidden group"
            >
              <div className="text-7xl font-black text-stone-100 absolute -top-4 -right-4 z-0 group-hover:text-emerald-50 transition-colors">
                {step.num}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-stone-900 mb-4">{step.title}</h3>
                <p className="text-stone-600 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
