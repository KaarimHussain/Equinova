"use client"
import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { useInView } from "react-intersection-observer";

const data = [
  {
    title: "Predictive Health Intelligence",
    description:
      "Your horses health shouldn't be a guessing game. Every missed symptom, every delayed intervention, every emergency vet bill that could have been prevented—these aren't just operational failures, they're reputation risks and revenue losses waiting to happen.",
    icon: <Brain />,
  },
  {
    title: "Professional Financial Management",
    description:
      "You're running a business, not a hobby farm. Scattered spreadsheets, billing errors, uncollected revenue, and zero visibility into what's actually profitable—this isn't just inefficient, it's leaving thousands of dollars on the table every month.",
    icon: <Brain />,
  },
  {
    title: "Seamless Team Collaboration",
    description:
      "Your trainers, grooms, vets each have pieces of the puzzle. But without a single source of truth, critical information gets lost in text messages, missed in email chains, & buried in paper notes. Communication breakdowns don't just waste time they compromise horse welfare and client satisfaction.",
    icon: <Brain />,
  },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } 
    },
  }
  return (
    <>
      <div className="min-h-screen bg-transparent relative">
        <div ref={ref} className="bg-accent-foreground rounded-4xl w-full relative -top-7 min-h-screen layout-container">
          <motion.div
            className="bg-accent-foreground rounded-2xl md:rounded-4xl w-full relative md:-top-7 min-h-screen layout-container flex flex-col justify-center py-8 md:py-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent text-center text-balance mb-8 md:mb-20"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              What Your Facility Desperately Needs
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {data.map((datas, index) => (
                <motion.div
                  key={index}
                  className="bg-accent/10 border border-accent/20 rounded-lg md:rounded-2xl p-2 md:p-3"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="bg-accent-foreground h-full rounded-lg md:rounded-2xl p-3 md:p-5 shadow-sm flex flex-col items-start justify-start gap-3 md:gap-5">
                    <div className="bg-secondary rounded-lg p-2 md:p-4 text-white">
                      <div className="w-5 h-5 md:w-6 md:h-6">{datas.icon}</div>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3 justify-between">
                      <h2 className="text-base md:text-xl text-accent font-extrabold">{datas.title}</h2>
                      <p className="text-xs md:text-sm">{datas.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
