"use client"

import SolutionsImage from "@/public/assets/solutions.png"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function EquinovaSolution() {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } },
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const } },
    }

    return (
        <div ref={ref} className="min-h-screen w-full layout-container bg-background py-8 md:py-12">
            <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <motion.div className="flex flex-col gap-4 md:gap-6" variants={itemVariants}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-accent leading-tight text-balance">
                        The Equinova Solution
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                        Predict health issues before they happen. Optimize revenue with AI-powered financial intelligence. Eliminate
                        operational chaos with one unified platform. Equinova combines predictive AI, professional financial
                        management, and intelligent automation to transform how mid-market facilities (20-75 horses) operate. No
                        more reactive firefighting. No more revenue leaks. No more tool sprawl. This isn't another horse tracking
                        app. This is business intelligence for serious equestrian operations.
                    </p>
                </motion.div>

                <motion.div className="relative flex items-center justify-center lg:justify-end" variants={imageVariants}>
                    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                        <Image
                            src={SolutionsImage || "/placeholder.svg"}
                            alt="Equinova Solution Mobile Interface"
                            className="object-contain w-full h-auto"
                            priority
                        />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
