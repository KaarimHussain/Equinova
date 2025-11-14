"use client"

import TransformYourOperation1 from "@/public/assets/transform-your-operation-1.png"
import TransformYourOperation2 from "@/public/assets/transform-your-operation-2.png"
import TransformYourOperation3 from "@/public/assets/transform-your-operation-3.png"
import Image from "next/image"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import type { Variants } from "framer-motion"

interface StepFeature {
    boldText: string
    text: string
}

interface RealExample {
    description: string
    highlight: string
}

interface StepData {
    stepNumber: string
    title: string
    subtitle: string
    introText: string
    features: StepFeature[]
    image: any
    imagePosition: "left" | "right"
    realExample?: RealExample
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const },
    },
}

export default function TransformYourOperation() {
    const steps: StepData[] = [
        {
            stepNumber: "01",
            title: "Centralize Everything in One Intelligent Platform",
            subtitle: "Stop juggling disconnected tools.",
            introText: "Equinova becomes your single source of truth for:",
            features: [
                { boldText: "Unlimited horse profiles", text: " with photos, documents, and complete history" },
                { boldText: "Health records", text: " with vet-ready reports exportable for consultations" },
                { boldText: "Training logs", text: " with workload analytics and performance tracking" },
                { boldText: "Financial dashboards", text: " showing revenue, expenses, and profitability by horse" },
                { boldText: "Team collaboration", text: " with role-based access (admin, trainer, groom, vet)" },
                { boldText: "Smart reminders", text: " that ensure nothing gets missed—ever" },
            ],
            image: TransformYourOperation1,
            imagePosition: "right",
        },
        {
            stepNumber: "02",
            title: "Predict Problems 2-4 Weeks Before They Happen",
            subtitle: "Stop reacting. Start preventing.",
            introText: "Equinova's AI continuously analyzes patterns across your horses:",
            features: [
                {
                    boldText: "Predictive health alerts",
                    text: " identify colic risk, lameness patterns, metabolic issues, and injury probability before symptoms appear",
                },
                {
                    boldText: "Performance optimization",
                    text: " flags overtraining, insufficient recovery, and workload imbalances",
                },
                {
                    boldText: "Nutrition recommendations",
                    text: " suggest feed adjustments based on workload, age, and health history",
                },
                { boldText: "Fatigue tracking", text: " (coming soon) prevents burnout in competitive horses" },
            ],
            image: TransformYourOperation2,
            imagePosition: "left",
            realExample: {
                description:
                    "Equinova detects that 4 horses in your barn are showing subtle changes in appetite and movement patterns over a 10-day period. Pattern analysis identifies a potential feed-quality issue or early-stage illness cluster. You intervene on Day 12—not Day 28 when it's an emergency vet call.",
                highlight: "This is AI that saves you thousands—not just records that tell you what happened yesterday.",
            },
        },
        {
            stepNumber: "03",
            title: "Optimize Revenue & Operations with Financial Intelligence",
            subtitle: "Stop leaving money on the table.",
            introText: "Equinova doesn't just track expenses—it analyzes profitability:",
            features: [
                { boldText: "Financial dashboards", text: " show revenue & costs per horse, per service, per month" },
                { boldText: "Automated billing", text: " with split invoicing, recurring charges, & late payment reminders" },
                { boldText: "Revenue optimization", text: " identifies underpriced services & upsell opportunities" },
                { boldText: "QuickBooks/Xero sync", text: " eliminates duplicate data entry" },
                {
                    boldText: "Cost optimization insights",
                    text: " (coming soon) recommend supplier changes and efficiency improvements",
                },
            ],
            image: TransformYourOperation3,
            imagePosition: "right",
            realExample: {
                description:
                    "Equinova analyzes 6 months of data and reveals that your training packages are underpriced by 8% compared to competitors, half your boarders are on outdated pricing from 2 years ago, and 3 horses have medical costs exceeding revenue by $2,800/month. You adjust pricing, capture $2,800/month in additional revenue, and make informed decisions about unprofitable horses.",
                highlight: "This is business intelligence—not just expense tracking.",
            },
        },
    ]

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <div className="min-h-screen bg-transparent relative p-2 md:p-4">
            <motion.div
                ref={ref}
                className="min-h-screen rounded-2xl md:rounded-4xl bg-accent/5 layout-container"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.h2
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent text-center mb-8 md:mb-16"
                    variants={itemVariants}
                >
                    How Equinova Transforms <br /> Your Operation in Three Steps
                </motion.h2>

                <div className="space-y-12 md:space-y-24">
                    {steps.map((step, index) => (
                        <motion.div key={index} className="space-y-8 md:space-y-12" variants={itemVariants}>
                            {/* Step Content and Image Section */}
                            <div
                                className={`flex flex-col ${step.imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 md:gap-12 items-center`}
                            >
                                {/* Content Section */}
                                <motion.div className="flex-1 space-y-4 md:space-y-6" variants={containerVariants}>
                                    {/* Step Label */}
                                    <motion.div
                                        className="inline-block bg-primary px-5 md:px-7 py-1 rounded-full"
                                        variants={itemVariants}
                                    >
                                        <span className="text-white font-bold text-sm md:text-md">Step {step.stepNumber}</span>
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h3
                                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent leading-tight"
                                        variants={itemVariants}
                                    >
                                        {step.title}
                                    </motion.h3>

                                    {/* Subtitle */}
                                    <motion.p className="text-lg md:text-xl text-accent font-bold" variants={itemVariants}>
                                        {step.subtitle}
                                    </motion.p>

                                    {/* Intro Text */}
                                    <motion.p className="text-sm md:text-base text-foreground" variants={itemVariants}>
                                        {step.introText}
                                    </motion.p>

                                    {/* Features List */}
                                    <motion.ul className="space-y-3 md:space-y-4" variants={containerVariants}>
                                        {step.features.map((feature, featureIndex) => (
                                            <motion.li key={featureIndex} className="flex items-start gap-2 md:gap-3" variants={itemVariants}>
                                                <Check className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0 mt-0.5" />
                                                <span className="text-sm md:text-base text-foreground leading-relaxed">
                                                    <strong className="font-extrabold text-accent">{feature.boldText}</strong>
                                                    {feature.text}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </motion.div>

                                {/* Image Section */}
                                <motion.div
                                    className="flex-1 relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100"
                                    variants={imageVariants}
                                >
                                    <Image
                                        src={step.image || "/placeholder.svg"}
                                        alt={step.title}
                                        fill
                                        className="object-contain"
                                        priority={index === 0}
                                    />
                                </motion.div>
                            </div>

                            {/* Real Example Box */}
                            {step.realExample && (
                                <motion.div className="w-full mt-6 md:mt-8" variants={itemVariants}>
                                    <div className="bg-accent/10 border border-accent/20 rounded-xl md:rounded-2xl p-3">
                                        <div className="bg-accent-foreground h-full rounded-xl md:rounded-2xl p-4 md:p-5 shadow-sm flex flex-col items-start justify-start gap-3 md:gap-5">
                                            <div className="flex flex-col gap-2 md:gap-3 justify-between">
                                                <p className="text-sm md:text-base">
                                                    <span className="font-bold text-accent">Real Example:</span> {step.realExample.description}
                                                </p>
                                                <p className="mt-1 md:mt-2 font-bold text-accent text-sm md:text-base">
                                                    {step.realExample.highlight}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
