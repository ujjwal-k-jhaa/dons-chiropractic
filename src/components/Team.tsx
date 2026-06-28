import { motion } from 'motion/react';

const team = [
  {
    name: "Dr. Don Jenkins",
    role: "Lead Chiropractor & Founder",
    bio: "Specializing in sports rehabilitation and dynamic neuromuscular stabilization. Former team chiropractor for elite collegiate athletics.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
  },
  {
    name: "Dr. Marcus Chen",
    role: "Soft Tissue Specialist",
    bio: "Expert in Active Release Technique (ART) and fascial manipulation. Dedicated to resolving chronic pain patterns and improving athletic longevity.",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-stone-900 mb-4">
            Meet the team.
          </h2>
          <p className="text-stone-500 font-medium text-lg max-w-xl">
            Doctors who actually spend time with you, listen to your goals, and build a plan to achieve them.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {team.map((member, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 relative bg-stone-200">
              <img 
                src={member.img} 
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            
            <h3 className="text-2xl font-bold text-stone-900 mb-2">{member.name}</h3>
            <div className="text-emerald-700 font-bold uppercase tracking-wider text-xs mb-4">
              {member.role}
            </div>
            <p className="text-stone-500 font-medium leading-relaxed">
              {member.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
