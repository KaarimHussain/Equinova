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

export default function CompetitorsTools() {
    const tableData = [
        {
            whatYouNeed: "Health tracking",
            barnManager: "✅ Excellent (2/3)",
            stableSecretary: "✅ Good (3/3)",
            ridely: "➖ Basic",
            equinova: "✅ Excellent + AI predictions",
        },
        {
            whatYouNeed: "Predictive health charts / AI",
            barnManager: "❌ None",
            stableSecretary: "❌ None",
            ridely: "❌ None",
            equinova: "✅ 24-48h early warning",
        },
        {
            whatYouNeed: "Financial management",
            barnManager: "➖ Basic invoicing only",
            stableSecretary: "➖ Locked behind $700/yr tier",
            ridely: "❌ None",
            equinova: "✅ Professional dashboards & profitability",
        },
        {
            whatYouNeed: "Revenue optimization insights",
            barnManager: "❌ None",
            stableSecretary: "❌ None",
            ridely: "❌ None",
            equinova: "✅ AI-powered recommendations",
        },
        {
            whatYouNeed: "QuickBooks/Excel sync",
            barnManager: "❌ No sync",
            stableSecretary: "➖ Manual export only",
            ridely: "❌ None",
            equinova: "✅ Real-time 2-way sync",
        },
        {
            whatYouNeed: "Client communication portal",
            barnManager: "❌ None",
            stableSecretary: "❌ None",
            ridely: "✅ (Owner notes)",
            equinova: "⏳ Coming soon",
        },
        {
            whatYouNeed: "Multi-user collaboration",
            barnManager: "✅ Yes ($600-700/yr)",
            stableSecretary: "➖ Yes (expensive tier)",
            ridely: "➖ Individual only",
            equinova: "✅ Included in Pro (199/yr)",
        },
        {
            whatYouNeed: "Training & analytics",
            barnManager: "❌ None",
            stableSecretary: "❌ None",
            ridely: "✅ Yes (but health/financials separate)",
            equinova: "✅ Comprehensive",
        },
        {
            whatYouNeed: "Mobile app quality",
            barnManager: "➖ Clunky, outdated UI (user reviews)",
            stableSecretary: "➖ Android app often crashes (user reviews)",
            ridely: "✅ Good",
            equinova: "✅ Best-in-class PWA, works offline",
        },
    ]

    const columnHeaders = [
        "What You Need",
        "BarnManager (Industry Leader)",
        "Stable Secretary",
        "Ridely (Training Focus)",
        "Equinova",
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
                        Competitor Tools: Why Basic <br />
                        Tracking Apps Fall Short
                    </motion.h2>
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
                                            {columnHeaders.map((header, idx) => (
                                                <th
                                                    key={header}
                                                    className={`px-3 md:px-6 py-3 md:py-4 text-center font-bold text-xs md:text-sm lg:text-base ${idx === 0 ? "rounded-tl-2xl" : idx === columnHeaders.length - 1 ? "rounded-tr-2xl" : ""
                                                        }`}
                                                >
                                                    {header}
                                                </th>
                                            ))}
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
                                                    {row.whatYouNeed}
                                                </td>
                                                <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-foreground text-center">
                                                    {row.barnManager}
                                                </td>
                                                <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-foreground text-center">
                                                    {row.stableSecretary}
                                                </td>
                                                <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-foreground text-center">
                                                    {row.ridely}
                                                </td>
                                                <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-foreground text-center">
                                                    {row.equinova}
                                                </td>
                                            </motion.tr>
                                        ))}
                                        {/* Summary Row */}
                                        <motion.tr className="border-b border-gray-200 font-bold" variants={rowVariants}>
                                            <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-accent text-center">
                                                Pricing for 50 horses
                                            </td>
                                            <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-accent text-center">
                                                $400-700/year
                                            </td>
                                            <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-accent text-center">
                                                $600-900/year
                                            </td>
                                            <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-accent text-center">
                                                N/A (not for facilities)
                                            </td>
                                            <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-accent text-center">
                                                $199/year (Pro)
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
