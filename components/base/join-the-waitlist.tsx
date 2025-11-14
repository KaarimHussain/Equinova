"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
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

export default function JoinTheWaitList() {
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

    return (
        <div ref={ref} className="min-h-[50vh] layout-container py-8 md:py-12">
            <motion.div
                className="bg-accent/10 border border-accent/20 rounded-2xl p-2 md:p-3"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <div className="bg-white h-full rounded-2xl shadow-sm">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                        {/* Left Column */}
                        <motion.div className="flex flex-col justify-between p-6 md:p-8" variants={itemVariants}>
                            <div>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                    Join the Waitlist & Get Founding Member Perks
                                </h2>
                                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-6 md:mb-8">
                                    ($399 Value FREE)
                                </p>
                            </div>
                            <Button
                                size="lg"
                                className="w-full md:w-auto px-8 md:px-12 py-4 md:py-6 text-base md:text-lg rounded-full"
                            >
                                Start Subscription
                            </Button>
                        </motion.div>

                        {/* Right Column */}
                        <motion.div
                            className="bg-accent/10 border border-accent/20 rounded-2xl p-2 md:p-3 m-2 md:m-3"
                            variants={itemVariants}
                        >
                            <div className="bg-white h-full rounded-2xl p-6 md:p-8 shadow-sm">
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">Founding Members Get:</h3>
                                    <Separator className="my-4 md:my-6" />
                                    <div className="space-y-3 md:space-y-4">
                                        {[
                                            "50% off Lifetime plan ($199 instead of $399)",
                                            "Priority access to beta (ahead of public launch)",
                                            "VIP onboarding call (1-on-1 setup assistance)",
                                            "Direct input on feature roadmap",
                                            'Free "Barn Profit Optimization Guide" ($99 value)',
                                        ].map((perk, index) => (
                                            <motion.div key={index} className="flex items-start gap-2 md:gap-3" variants={itemVariants}>
                                                <div className="shrink-0 w-5 md:w-6 h-5 md:h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                                                    <span className="text-white text-xs md:text-sm">✓</span>
                                                </div>
                                                <p className="text-sm md:text-base text-gray-600">{perk}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <Separator className="my-4 md:my-6" />
                                    <p className="text-xs md:text-sm text-gray-500">
                                        Only 200 lifetime licenses available. 73 claimed, 127 remaining.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
