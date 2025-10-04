import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do I apply for a job on JobNest?",
    answer:
      'To apply for a job on JobNest, simply sign up for a free account and complete your profile. Then, browse through curated job listings based on your skills and interests. When you find a job you like, click “Apply Now” to send your CV instantly. You’ll also get personalized job alerts sent directly to your dashboard.'
  },
  {
    question: "What is JobNest?",
    answer: "JobNest is an online job search platform that connects job seekers with employers using smart matching technology, curated listings, and seamless application tools."
  },
  {
    question: "How can I get better job matches?",
    answer: "To get better job matches, keep your profile updated, specify your key skills and interests accurately, and make use of JobNest's filters and alerts for jobs that fit your background and goals."
  },
  {
    question: "How often are new jobs posted on JobNest?",
    answer: "New jobs are posted on JobNest daily as employers regularly update their hiring needs, ensuring a fresh list of opportunities for job seekers."
  },
  {
    question: "Can I save job listings for later?",
    answer: "Yes, JobNest allows you to save job listings to your dashboard so you can revisit and apply to your favorite opportunities whenever you like."
  }
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="max-w-4xl mx-auto py-20 px-10 sm:px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center font-extrabold text-3xl sm:text-4xl mb-10 leading-tight"
      >
        Frequently<br />Asked Questions
      </motion.h2>

      <div className="space-y-10">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
            className="flex items-start justify-between gap-8"
          >
            <div className="w-full">
              <button
                className="w-full text-left font-semibold text-lg text-gray-900 focus:outline-none"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                {faq.question}
              </button>
              {open === i && faq.answer && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="mt-2 sm:ml-6 text-gray-600 text-sm max-w-2xl"
                >
                  {faq.answer}
                </motion.p>
              )}
            </div>

            <button
              className="text-purple-400 text-3xl font-light select-none"
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-label="Toggle FAQ"
            >
              {open === i && faq.answer ? "−" : "+"}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
