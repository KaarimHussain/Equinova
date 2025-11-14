"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import type { Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
}

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
}

export default function WhyEquinovaVsEverything() {
  const tableData = [
    {
      whatYoureDoing: "Manual health tracking (paper notes, spreadsheets, basic apps)",
      timeCost: "5 hours",
      annualCost: "260 hours = $7,800 (at $30/hr)",
      whatYoureMissing: "Predictive insights, pattern detection, early warnings",
    },
    {
      whatYoureDoing: "Spreadsheet financial management (Excel, manual invoicing)",
      timeCost: "8 hours",
      annualCost: "416 hours = $12,480",
      whatYoureMissing: "Profitability analysis, revenue optimization, automated billing",
    },
    {
      whatYoureDoing: "Disconnected tools (switching between 3-5 apps, duplicate entry)",
      timeCost: "6 hours",
      annualCost: "416 hours = $12,480",
      whatYoureMissing: "Unified platform, single source of truth, seamless integration",
    },
    {
      whatYoureDoing: "Reactive problem-solving (emergency vet visits that could be prevented)",
      timeCost: "Variable",
      annualCost: "$5,000-$15,000 in preventable costs",
      whatYoureMissing: "AI predictions, proactive interventions",
    },
    {
      whatYoureDoing: "Communication overhead (texts, emails, phone calls coordinating team)",
      timeCost: "4 hours",
      annualCost: "208 hours = $6,240",
      whatYoureMissing: "Centralized collaboration, role-based access",
    },
    {
      whatYoureDoing: "Missed revenue opportunities (billing errors, underpricing, no upsells)",
      timeCost: "N/A",
      annualCost: "$10,000-$30,000 left on table",
      whatYoureMissing: "Revenue insights, pricing optimization",
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      className="min-h-screen layout-container py-8 md:py-12"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div>
        {/* Title and Subtitle */}
        <motion.div className="text-center mb-8 md:mb-12" variants={containerVariants}>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-3 md:mb-4"
            variants={itemVariants}
          >
            Why Equinova vs. Everything <br /> Else You've Tried
          </motion.h2>
          <motion.p
            className="text-base md:text-lg lg:text-xl text-muted-foreground font-semibold"
            variants={itemVariants}
          >
            Your Current Workflow: The Hidden Cost of 'Free'.
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-accent/10 border border-accent/20 rounded-xl md:rounded-2xl p-3"
          variants={itemVariants}
        >
          <div className="bg-accent-foreground h-full rounded-xl md:rounded-2xl p-4 md:p-5 shadow-sm">
            {/* Table Container */}
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full">
                <motion.table className="w-full border-collapse rounded-2xl" variants={containerVariants}>
                  {/* Table Header */}
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground rounded-3xl">
                      <th className="px-3 md:px-6 py-3 md:py-4 text-center font-bold text-xs md:text-sm lg:text-base rounded-tl-2xl">
                        What You're Doing Now
                      </th>
                      <th className="px-3 md:px-6 py-3 md:py-4 text-center font-bold text-xs md:text-sm lg:text-base">
                        Time Cost Per Week
                      </th>
                      <th className="px-3 md:px-6 py-3 md:py-4 text-center font-bold text-xs md:text-sm lg:text-base">
                        Annual Cost
                      </th>
                      <th className="px-3 md:px-6 py-3 md:py-4 text-center font-bold text-xs md:text-sm lg:text-base rounded-tr-2xl">
                        What You're Missing
                      </th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <motion.tbody variants={containerVariants}>
                    {tableData.map((row, index) => (
                      <motion.tr
                        key={index}
                        className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                        variants={rowVariants}
                      >
                        <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-foreground text-center">
                          {row.whatYoureDoing}
                        </td>
                        <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-foreground font-medium text-center">
                          {row.timeCost}
                        </td>
                        <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-foreground font-medium text-center">
                          {row.annualCost}
                        </td>
                        <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-muted-foreground text-center">
                          {row.whatYoureMissing}
                        </td>
                      </motion.tr>
                    ))}

                    {/* Summary Row */}
                    <motion.tr className="border-b border-gray-200 font-bold" variants={rowVariants}>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-accent uppercase text-center">
                        TOTAL HIDDEN COST
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-accent text-center">
                        23 hours/week
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-accent text-center">
                        $50,880-$80,880/year
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-accent text-center">
                        Peace of mind, profitability, scalability
                      </td>
                    </motion.tr>
                  </motion.tbody>
                </motion.table>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
