import { motion } from 'motion/react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 px-6 max-w-7xl mx-auto"
    >
      <div className="bg-white/80 backdrop-blur-xl border border-stone-200/60 rounded-full px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="font-bold text-xl tracking-tight text-stone-900">
          Don's.
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
          <a href="#about" className="hover:text-stone-900 transition-colors">Approach</a>
          <a href="#services" className="hover:text-stone-900 transition-colors">Services</a>
          <a href="#testimonials" className="hover:text-stone-900 transition-colors">Stories</a>
        </div>

        <div className="hidden md:block">
          <a href="#booking" className="inline-block text-sm font-semibold text-white bg-stone-900 px-6 py-2.5 rounded-full hover:bg-stone-800 transition-colors shadow-sm">
            Book Visit
          </a>
        </div>

        <button className="md:hidden text-stone-900">
          <Menu size={20} strokeWidth={2} />
        </button>
      </div>
    </motion.nav>
  );
}
