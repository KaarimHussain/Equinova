"use client"

import BannerImage from "@/public/assets/Banner-Background.png"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Banner() {
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } },
    }

    return (
        <div ref={ref} className="min-h-[50vh] layout-container">
            <motion.div
                className="min-h-[50vh] p-4 md:p-5 flex items-center justify-center rounded-2xl md:rounded-3xl"
                style={{
                    background: `url(${BannerImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="flex flex-col items-center justify-center max-w-3xl gap-3 md:gap-5"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <motion.h1
                        className="text-primary-foreground text-3xl sm:text-4xl md:text-5xl font-bold text-center text-balance"
                        variants={itemVariants}
                    >
                        3x Your Operational Efficiency & Profitability with Equinova
                    </motion.h1>
                    <motion.p className="text-muted text-center text-sm md:text-base" variants={itemVariants}>
                        Seamlessly integrated, AI-powered, and built for professional facilities. Equinova analyzes patterns across
                        your entire operation—health data, training workload, financial performance, and team collaboration—to
                        deliver insights that basic tracking apps simply cannot provide.
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    )
}
