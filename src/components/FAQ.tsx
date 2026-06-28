import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Do you accept insurance?",
    a: "We are out-of-network with all insurance providers. This allows us to spend 45 minutes 1-on-1 with you, rather than letting insurance dictate your care. We provide superbills that you can submit to your insurance for out-of-network reimbursement."
  },
  {
    q: "How long are the appointments?",
    a: "Your initial evaluation is 60 minutes. Follow-up appointments are a full 45 minutes, spent entirely 1-on-1 with your doctor. No passing you off to assistants or putting you on machines."
  },
  {
    q: "Will I need to come in 3 times a week for months?",
    a: "Absolutely not. Our goal is to get you better and independent as quickly as possible. Most patients see significant improvement in 4-6 visits and are given the tools to maintain their progress at home."
  },
  {
    q: "Do I have to get cracked?",
    a: "No. While chiropractic adjustments are a powerful tool, we have many other ways to restore joint mobility and calm the nervous system. We tailor the treatment to your comfort level and preferences."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-stone-900 mb-6">
          Common Questions
        </h2>
        <p className="text-stone-500 text-lg font-medium">
          Everything you need to know about working with us.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border border-stone-200 rounded-2xl overflow-hidden bg-white"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
            >
              <span className="font-bold text-stone-900 pr-8">{faq.q}</span>
              <ChevronDown 
                className={`text-stone-400 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                size={20} 
              />
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-stone-600 font-medium leading-relaxed">
                {faq.a}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
