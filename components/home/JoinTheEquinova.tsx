"use client"

import { Info, Zap } from "lucide-react"
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

export default function JoinTheEquinova() {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

    const oldWayItems = [
        "React to health issues after they arise → Expensive vet bills",
        "Track expenses without insights → Revenue leaks",
        "Juggle disconnected tools → Wasted time",
        "Operate without intelligence → Stagnant growth",
    ]

    const equinovaWayItems = [
        "Predict health issues 2-4 weeks early → Prevent emergencies",
        "Optimize pricing and profitability → Capture hidden revenue",
        "Centralize everything in one platform → Save 5-10 hours/week",
        "Scale with AI-powered intelligence → Sustainable growth",
    ]

    return (
        <div ref={ref} className="min-h-screen w-full layout-container py-8 md:py-12">
            <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
                <motion.div className="mb-8 md:mb-12" variants={itemVariants}>
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-900">
                        Transform Your Facility. Join the Equinova
                        <br className="hidden md:block" /> Revolution.
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    {/* The Old Way Card */}
                    <motion.div className="bg-accent-foreground rounded-2xl p-2 md:p-3 shadow-sm" variants={itemVariants}>
                        <div className="bg-accent/10 h-full rounded-2xl border border-accent/5">
                            <div className="bg-gray-100 rounded-2xl overflow-hidden h-full">
                                <div className="bg-gray-200 px-4 md:px-6 py-3 md:py-4 text-center">
                                    <h3 className="text-lg md:text-2xl font-bold text-gray-900">The old way:</h3>
                                </div>
                                <div className="px-4 md:px-6 py-4 md:py-6 space-y-3 md:space-y-4 h-full">
                                    {oldWayItems.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-start gap-3 border-b py-2 md:py-3 border-accent/30 last:border-b-0"
                                            variants={itemVariants}
                                        >
                                            <Info className="w-5 md:w-6 h-5 md:h-6 shrink-0 mt-0.5" />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm md:text-base text-gray-700">
                                                    {item.split(" → ")[0]}
                                                    <span className="text-accent font-bold block md:inline md:ml-2">
                                                        → {item.split(" → ")[1]}
                                                    </span>
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* The Equinova Way Card */}
                    <motion.div className="bg-accent-foreground rounded-2xl p-2 md:p-3 shadow-sm" variants={itemVariants}>
                        <div className="bg-accent/10 h-full rounded-2xl border border-accent/5">
                            <div className="bg-gray-100 rounded-2xl overflow-hidden h-full">
                                <div className="bg-gray-200 px-4 md:px-6 py-3 md:py-4 text-center">
                                    <h3 className="text-lg md:text-2xl font-bold text-gray-900">The Equinova way:</h3>
                                </div>
                                <div className="px-4 md:px-6 py-4 md:py-6 space-y-3 md:space-y-4 h-full">
                                    {equinovaWayItems.map((item, index) => (
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
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm md:text-base text-gray-700">
                                                    {item.split(" → ")[0]}
                                                    <span className="text-accent font-bold block md:inline md:ml-2">
                                                        → {item.split(" → ")[1]}
                                                    </span>
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
