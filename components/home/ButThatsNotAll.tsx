"use client"

import NotAll1 from "@/public/assets/thats-not-all.png"
import NotAll2 from "@/public/assets/thats-not-all-2.png"
import Image from "next/image"
import { Separator } from "../ui/separator"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import type { Variants } from "framer-motion"

interface FeatureCard {
    title: string
    description: string
    image?: any
    position: "top-left" | "bottom-left" | "top-right" | "bottom-right"
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
}

export default function ButThatsNotAll() {
    const cards: FeatureCard[] = [
        {
            title: "Multi-User Collaboration (Premium Pro)",
            description:
                "Stop playing telephone. Assign roles to trainers, grooms, and vets. Everyone sees what they need, updates what they should, and stays aligned without constant check-ins. Real-time sync means no more 'I didn't know about that.'",
            image: NotAll1,
            position: "top-left",
        },
        {
            title: "Educational Resources & Community",
            description:
                "Stop Googling horse care questions. Access curated guides, expert webinars, and a community of professional facilities. Premium Pro members get exclusive access to the Stable Mastery Hub with case studies and best practices from top operations.",
            position: "top-right",
        },
        {
            title: "Vet-Ready Reports (Coming Soon)",
            description:
                "Stop scrambling before appointments. Generate comprehensive health reports with complete history, AI insights, and trend analysis. Export as PDF and share with your vet before the visit. Show up prepared, save consultation time, and get better outcomes.",
            image: NotAll2,
            position: "bottom-right",
        },
        {
            title: "Client Communication Portal (Roadmap)",
            description:
                "Stop manual updates. Automated progress reports with photos, training updates, and health summaries keep owners informed without draining your time. Brand the experience with your facility's identity and command premium pricing.",
            position: "bottom-left",
        },
    ]

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <motion.div
            ref={ref}
            className="min-h-screen w-full layout-container py-8 md:py-12"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.div className="flex flex-col gap-6 md:gap-8 mb-8 md:mb-12" variants={containerVariants}>
                <motion.h2
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent text-center"
                    variants={itemVariants}
                >
                    Now You Have a Predictive, Profitable, <br />
                    Professional Operation. But That's Not All!
                </motion.h2>
                <motion.p className="text-muted-foreground font-bold text-center text-base md:text-lg" variants={itemVariants}>
                    Equinova Boosts Team Productivity & Client Satisfaction By
                </motion.p>
            </motion.div>

            {/* 2x2 Grid Layout with row spans */}
            <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 auto-rows-auto"
                variants={containerVariants}
            >
                {cards.map((card, index) => {
                    const hasImage = !!card.image
                    return (
                        <motion.div
                            key={index}
                            className={`bg-accent/10 border border-accent/20 rounded-xl md:rounded-2xl p-2 md:p-3 ${hasImage ? "lg:row-span-3" : "lg:row-span-2"}`}
                            variants={itemVariants}
                        >
                            <div className="bg-accent-foreground h-full rounded-xl md:rounded-2xl p-3 md:p-5 shadow-sm flex flex-col gap-3 md:gap-4">
                                {/* Title */}
                                <h3 className="text-lg md:text-xl font-bold text-accent">{card.title}</h3>
                                <Separator />
                                {/* Description */}
                                <p className="text-sm md:text-base text-foreground leading-relaxed">{card.description}</p>

                                {/* Image if available */}
                                {card.image && (
                                    <motion.div
                                        className="mt-2 md:mt-4 relative w-full flex-1 min-h-[300px] md:min-h-[400px] rounded-lg overflow-hidden bg-gray-100"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
                                    >
                                        <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="object-contain" />
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
    )
}
