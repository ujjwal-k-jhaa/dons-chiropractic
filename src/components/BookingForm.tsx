import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function BookingForm() {
  return (
    <section id="booking" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-stone-200 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-16 relative overflow-hidden">
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-stone-100 px-4 py-2 rounded-full mb-8 border border-stone-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-stone-600 uppercase tracking-wide">Available this week</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mb-6">
              Request an <br/>appointment.
            </h2>
            <p className="text-stone-500 font-medium text-lg leading-relaxed mb-10 max-w-md">
              Leave your details below and our care coordinator will reach out within 2 hours to confirm your time.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-stone-900 mb-1">Location</h4>
                <p className="text-stone-500 font-medium text-sm">450 West 14th St, New York, NY 10014</p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 mb-1">Hours</h4>
                <p className="text-stone-500 font-medium text-sm">Mon-Fri: 7am - 7pm<br/>Sat: 8am - 2pm</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700 ml-1">First Name</label>
                <input 
                  type="text" 
                  placeholder="Jane"
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-stone-900 placeholder:text-stone-400 font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700 ml-1">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Doe"
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-stone-900 placeholder:text-stone-400 font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700 ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="jane@example.com"
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-stone-900 placeholder:text-stone-400 font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700 ml-1">Phone</label>
                <input 
                  type="tel" 
                  placeholder="(555) 000-0000"
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-stone-900 placeholder:text-stone-400 font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-stone-700 ml-1">Primary Reason for Visit</label>
              <select className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-stone-900 font-medium appearance-none">
                <option value="new_pain">New Injury / Pain</option>
                <option value="chronic_pain">Chronic Pain</option>
                <option value="maintenance">General Maintenance / Wellness</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-stone-700 ml-1">Additional Details (Optional)</label>
              <textarea 
                rows={4}
                placeholder="Tell us a bit about what's going on..."
                className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-stone-900 placeholder:text-stone-400 font-medium resize-none"
              ></textarea>
            </div>

            <button className="w-full py-4 bg-stone-900 text-white rounded-2xl font-bold text-lg hover:bg-stone-800 transition-colors shadow-md flex items-center justify-center space-x-2 group">
              <span>Request Appointment</span>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-stone-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none"></div>
      </div>
    </section>
  );
}
