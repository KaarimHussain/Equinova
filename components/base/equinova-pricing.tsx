"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
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

export default function EquinovaPricing() {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

    const tableData = [
        {
            whatYouNeed: "Price",
            barnManager: "$0/month",
            stableSecretary: "$9.99/month or $99/year",
            ridely: "$19.99/month or $199/year",
            equinova: "$199 one-time (limited to 200)",
        },
        {
            whatYouNeed: "Best For",
            barnManager: "Test the platform",
            stableSecretary: "1-3 horse owners",
            ridely: "Professional facilities",
            equinova: "Founding members",
        },
        {
            whatYouNeed: "Horses Managed",
            barnManager: "1 horse",
            stableSecretary: "Up to 3 horses",
            ridely: "Unlimited horses",
            equinova: "Unlimited horses",
        },
        {
            whatYouNeed: "Horse Profiles, Health Logs, Training Journal",
            barnManager: "✅",
            stableSecretary: "✅",
            ridely: "✅",
            equinova: "✅",
        },
        {
            whatYouNeed: "Smart Reminders (vet/farrier/vaccines)",
            barnManager: "✅ (limit 3)",
            stableSecretary: "✅ Unlimited",
            ridely: "✅ Unlimited",
            equinova: "✅ Unlimited",
        },
        {
            whatYouNeed: "Activity History",
            barnManager: "7-day view",
            stableSecretary: "Full history",
            ridely: "Full history",
            equinova: "Full history",
        },
        {
            whatYouNeed: "Expense Tracking & Reports",
            barnManager: "❌",
            stableSecretary: "✅ Basic",
            ridely: "✅ Advanced dashboards",
            equinova: "✅ Advanced dashboards",
        },
        {
            whatYouNeed: "Vet-Ready Report Builder",
            barnManager: "❌",
            stableSecretary: "❌",
            ridely: "🔜 Coming soon",
            equinova: "🔜 Coming soon",
        },
        {
            whatYouNeed: "AI Insights (predictive health, nutrition, workload, cost optimization)",
            barnManager: "❌",
            stableSecretary: "⚠️ Light preview",
            ridely: "✅ Full access",
            equinova: "🔜 Coming soon (full)",
        },
        {
            whatYouNeed: "Multi-User Collaboration (trainer/groom/vet roles)",
            barnManager: "❌",
            stableSecretary: "❌",
            ridely: "🔜 Coming soon",
            equinova: "🔜 Coming soon",
        },
        {
            whatYouNeed: "Educational Resources",
            barnManager: "✅ Onboarding only",
            stableSecretary: "✅ Email lessons",
            ridely: "✅ Stable Mastery Hub",
            equinova: "✅ Stable Mastery Hub",
        },
        {
            whatYouNeed: "Community Access",
            barnManager: "✅",
            stableSecretary: "✅",
            ridely: "✅ Priority",
            equinova: "✅ Private founder group",
        },
        {
            whatYouNeed: "Support",
            barnManager: "Self-serve",
            stableSecretary: "Email support",
            ridely: "Priority support",
            equinova: "VIP support",
        },
        {
            whatYouNeed: "Best Value",
            barnManager: "Try it free",
            stableSecretary: "Save $20/year",
            ridely: "Save $40/year + ROI guarantee",
            equinova: "Save $140 vs. 5 years Pro",
        },
        {
            whatYouNeed: "Guarantee",
            barnManager: "—",
            stableSecretary: '"Simplify your horse care in 30 days or extend free"',
            ridely: '"Save 3+ hours/week or extend 3 months free"',
            equinova: "Lifetime updates forever",
        },
    ]

    const columnHeaders = ["Plan", "Freemium", "Premium Starter", "Premium Pro", "Lifetime (Equinova)"]

    return (
        <div ref={ref} className="min-h-screen layout-container py-8 md:py-12">
            <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
                {/* Title and Subtitle */}
                <motion.div className="text-center mb-8 md:mb-12" variants={itemVariants}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-3 md:mb-4">
                        Equinova Pricing: Choose Your Plan
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-semibold">
                        Simple. Transparent. Designed to Deliver ROI.
                    </p>
                </motion.div>

                <motion.div className="bg-accent/10 border border-accent/20 rounded-2xl p-2 md:p-3" variants={itemVariants}>
                    <div className="bg-accent-foreground h-full rounded-2xl p-3 md:p-5 shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse rounded-2xl min-w-full">
                                {/* Table Header */}
                                <thead>
                                    <tr className="bg-secondary text-secondary-foreground">
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
                                <tbody>
                                    {tableData.map((row, index) => (
                                        <motion.tr
                                            key={index}
                                            className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                                            variants={itemVariants}
                                        >
                                            <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-foreground text-center font-semibold">
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
