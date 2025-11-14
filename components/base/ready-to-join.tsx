"use client"

import ReadyToJoinImage from "@/public/assets/ready-to-join.png"
import Image from "next/image"
import { Button } from "../ui/button"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

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
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
} as const

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const },
    },
} as const

export default function ReadyToJoin() {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

    const benefits = [
        "Unlimited horses forever",
        "Priority beta access to AI features",
        "VIP onboarding + direct founder support",
        "Private community + roadmap input",
        "Lifetime updates (never pay again)",
    ]

    return (
        <div ref={ref} className="min-h-screen w-full layout-container py-8 md:py-12">
            <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
                <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                    {/* Left Column - Content */}
                    <motion.div className="space-y-4 md:space-y-6" variants={itemVariants}>
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Ready to Join 200 Founding Members?
                        </h2>

                        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">
                            Limited Lifetime Offer: $199 (Save $200)
                        </p>

                        <div className="space-y-2 md:space-y-3">
                            {benefits.map((benefit, index) => (
                                <motion.div key={index} className="flex items-start gap-2 md:gap-3" variants={itemVariants}>
                                    <CheckCircle color="var(--primary)" className="w-5 md:w-6 h-5 md:h-6 shrink-0 mt-0.5" />
                                    <p className="text-sm md:text-base lg:text-lg text-gray-900 font-medium">{benefit}</p>
                                </motion.div>
                            ))}
                        </div>

                        <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 pt-2">
                            Only 127 licenses remaining.
                        </p>

                        <Button size="lg" className="px-6 md:px-10 py-2 md:py-6">
                            Claim Your Founding Membership Now
                        </Button>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div className="relative" variants={imageVariants}>
                        <Image
                            src={ReadyToJoinImage || "/placeholder.svg"}
                            alt="Professionals working together"
                            className="w-full h-auto rounded-2xl"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
