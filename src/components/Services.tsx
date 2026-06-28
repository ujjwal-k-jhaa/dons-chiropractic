import { motion } from 'motion/react';
import { Activity, Plus, Heart } from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: "Chiropractic Adjustments",
    desc: "Targeted joint manipulation to restore proper mechanics, relieve pain, and improve your overall range of motion."
  },
  {
    icon: Plus,
    title: "Active Release",
    desc: "Hands-on soft tissue therapy that breaks down scar tissue and relieves tight, overused muscles."
  },
  {
    icon: Heart,
    title: "Movement Rehab",
    desc: "Personalized exercises to build strength in new ranges of motion, ensuring your pain stays away."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-stone-900 mb-6">
          Everything you need. <br/> Nothing you don't.
        </h2>
        <p className="text-stone-500 font-medium text-lg">
          A clear, transparent approach to getting you out of pain and back to doing what you love.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((srv, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white p-8 md:p-10 rounded-[2rem] border border-stone-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-900 mb-8">
              <srv.icon size={24} strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-4">{srv.title}</h3>
            <p className="text-stone-500 font-medium leading-relaxed">
              {srv.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
