"use client"

import { Info, Zap } from "lucide-react"
import { Button } from "../ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
} as const

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
} as const

export default function NotReadyToCommit() {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

    const discoverItems = [
        "Your facility's hidden revenue leaks",
        "Where you're losing time and money",
        "Your operational efficiency score vs. competitors",
        "Personalized recommendations to boost profitability",
    ]

    const reportItems = [
        "Detailed breakdown of your strengths and weaknesses",
        "Benchmark comparisons to similar facilities",
        "Actionable profit optimization strategies",
        "Custom roadmap for your facility's growth",
    ]

    return (
        <div ref={ref} className="min-h-screen w-full layout-container py-8 md:py-12">
            <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
                <motion.div className="text-center mb-8 md:mb-12" variants={itemVariants}>
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-accent mb-3 md:mb-4">
                        Not Ready to Commit? Take Our Free Barn
                        <br className="hidden md:block" /> Profitability Self-Assessment
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-semibold">
                        $199 value. Yours free. No credit card required.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    {/* Left Card */}
                    <motion.div
                        className="bg-accent-foreground rounded-2xl p-2 md:p-3 shadow-sm md:col-span-1 col-span-2"
                        variants={itemVariants}
                    >
                        <div className="bg-accent/10 h-full rounded-2xl border border-accent/5">
                            <div className="bg-gray-100 rounded-2xl overflow-hidden h-full">
                                <div className="bg-gray-200 px-4 md:px-6 py-3 md:py-4 text-center">
                                    <h3 className="text-lg md:text-2xl font-bold text-gray-900">
                                        Answer 12 questions in
                                        <br /> 3 minutes and discover:
                                    </h3>
                                </div>
                                <div className="px-4 md:px-6 py-4 md:py-6 space-y-3 md:space-y-4 h-full">
                                    {discoverItems.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-start gap-3 border-b py-2 md:py-3 border-accent/30 last:border-b-0"
                                            variants={itemVariants}
                                        >
                                            <Info className="w-5 md:w-6 h-5 md:h-6 shrink-0 mt-0.5" />
                                            <p className="text-sm md:text-base text-gray-700">{item}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Card */}
                    <motion.div
                        className="bg-accent-foreground rounded-2xl p-2 md:p-3 shadow-sm md:col-span-1 col-span-2"
                        variants={itemVariants}
                    >
                        <div className="bg-accent/10 h-full rounded-2xl border border-accent/5">
                            <div className="bg-gray-100 rounded-2xl overflow-hidden h-full">
                                <div className="bg-gray-200 px-4 md:px-6 py-3 md:py-4 text-center">
                                    <h3 className="text-lg md:text-2xl font-bold text-gray-900">
                                        You'll receive a comprehensive
                                        <br /> 20+ page analysis report with:
                                    </h3>
                                </div>
                                <div className="px-4 md:px-6 py-4 md:py-6 space-y-3 md:space-y-4 h-full">
                                    {reportItems.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-start gap-3 border-b py-2 md:py-3 border-accent/30 last:border-b-0"
                                            variants={itemVariants}
                                        >
                                            <Zap
                                                fill="var(--accent)"
                                                color="var(--accent)"
                                                className="w-5 md:w-6 h-5 md:h-6 shrink-0 mt-0.5"
                                            />
                                            <p className="text-sm md:text-base text-gray-700">{item}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="mt-8 md:mt-10 flex items-center justify-center col-span-2" variants={itemVariants}>
                        <Button className="px-8 md:px-15 py-3 md:py-5" size="lg">
                            Take the 3-Minute Assessment Now
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
