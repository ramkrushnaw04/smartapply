import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do I apply for a job on SmartApply?",
    answer:
      'To apply for a job on SmartApply, simply sign up for a free account and complete your profile. Then, browse through curated job listings based on your skills and interests. When you find a job you like, click "Apply Now" to send your CV instantly.'
  },
  {
    question: "What is SmartApply?",
    answer: "SmartApply is an online job search platform that connects job seekers with employers using smart matching technology, curated listings, and seamless application tools."
  },
  {
    question: "How can I get better job matches?",
    answer: "To get better job matches, keep your profile updated, specify your key skills and interests accurately, and make use of SmartApply's filters and alerts for jobs that fit your background and goals."
  },
  {
    question: "How often are new jobs posted on SmartApply?",
    answer: "New jobs are posted on SmartApply daily as employers regularly update their hiring needs, ensuring a fresh list of opportunities for job seekers."
  },
  {
    question: "Can I save job listings for later?",
    answer: "Yes, SmartApply allows you to save job listings to your dashboard so you can revisit and apply to your favorite opportunities whenever you like."
  }
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section 
      className="content max-w-3xl mx-auto py-20 px-6 sm:px-4"
      data-bg='light'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-14"
      >
        <h2 className="font-extrabold text-4xl sm:text-5xl mb-3 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-base">
          Everything you need to know about SmartApply
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
            className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-md hover:border-gray-300 transition-all duration-300 ease-out"
          >
            <button
              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none group"
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
              aria-controls={`faq-answer-${i}`}
            >
              <span className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                {faq.question}
              </span>
              
              <motion.div
                animate={{ rotate: open === i ? 45 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 text-gray-600"
              >
                <span className="text-2xl font-light leading-none">+</span>
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {open === i && faq.answer && (
                <motion.div
                  id={`faq-answer-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: "auto", 
                    opacity: 1,
                    transition: {
                      height: { duration: 0.4, ease: "easeOut" },
                      opacity: { duration: 0.3, delay: 0.1 }
                    }
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    transition: {
                      height: { duration: 0.3, ease: "easeIn" },
                      opacity: { duration: 0.2 }
                    }
                  }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-gray-700 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
