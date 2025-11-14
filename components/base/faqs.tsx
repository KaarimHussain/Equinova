"use client"

import { Plus } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
} as const

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState<number | null>(1)
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const faqData = [
    {
      question: "How is Equinova different from BarnManager or Stable Secretary?",
      answer: "",
    },
    {
      question: "How long does setup take? Will it disrupt my current workflow?",
      answer:
        "Setup: 10 minutes. Migration: 1-3 hours. Disruption: Minimal.\n\nDay 1: Create account, add 1-3 horses, upload photos. (10 min) Week 1: Import historical data (optional), invite team members. (1-3 hours) Week 2: Replace old tools gradually—start with reminders, then expenses, then training logs. You don't need to migrate everything overnight. Most users keep their old system running in parallel for 2-4 weeks until they're confident. Then they fully switch and never look back.",
    },
    {
      question: "What if I have more than 75 horses? Is Equinova still right for me?",
      answer: "",
    },
    {
      question: 'Do I need to be "tech-savvy" to use Equinova?',
      answer: "",
    },
    {
      question: "How does the AI actually work? Is it just buzzword marketing?",
      answer: "",
    },
    {
      question: "What happens to my data? Is it private and secure?",
      answer: "",
    },
    {
      question: "Can I try Equinova before committing to a paid plan?",
      answer: "",
    },
    {
      question: "When will the AI insights and multi-user features launch?",
      answer: "",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div ref={ref} className="min-h-screen w-full layout-container py-8 md:py-12">
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-900"
          variants={itemVariants}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3 md:space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-accent/10 border border-accent/20 rounded-3xl overflow-hidden"
              variants={itemVariants}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 pr-4 flex-1">
                  {faq.question}
                </h3>
                <motion.div
                  className="shrink-0 w-8 md:w-10 h-8 md:h-10 rounded-full bg-secondary flex items-center justify-center"
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
                >
                  <Plus className="w-5 md:w-6 h-5 md:h-6 text-secondary-foreground" />
                </motion.div>
              </button>

              <AnimatePresence mode="wait">
                {openIndex === index && faq.answer && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 md:p-6 rounded-2xl bg-accent-foreground m-2 md:m-3">
                      <p className="text-sm md:text-base text-gray-700 whitespace-pre-line leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
