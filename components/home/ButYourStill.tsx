"use client"

import { Separator } from "@/components/ui/separator"
import { Brain } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const data = [
    {
        title: "Missing Early Warning Signs",
        description: (
            <>
                You're tracking health data, but you're reacting to symptoms after they appear. Without predictive analytics,
                you can't identify patterns that signal problems 2-4 weeks before they become emergencies. By the time you
                notice, it's already cost you time, money, and stress.
            </>
        ),
        icon: <Brain />,
        isLast: false,
    },
    {
        title: "Stuck in Reactive Mode",
        description: (
            <>
                You're working harder than ever, but you're always putting out fires instead of preventing them. Your inbox is
                overflowing, your to-do list never shrinks, and you're spending more time on admin than on horses. The tools
                that promised to help you are just adding more complexity.
            </>
        ),
        icon: <Brain />,
        isLast: false,
    },
    {
        title: "Drowning in Disconnected Tools",
        description: (
            <>
                You're juggling 3-5 different apps, spreadsheets, and paper systems. Health records in one place, expenses in
                another, training logs somewhere else. Every task requires switching contexts, duplicate data entry, and hoping
                nothing falls through the cracks. Your 'system' isn't a system—it's chaos with a filing cabinet.
            </>
        ),
        icon: <Brain />,
        isLast: false,
    },
    {
        title: "Losing Revenue to Inefficiency",
        description: (
            <>
                You're working hard, but you don't know which horses are profitable, which services are underpriced, or where
                money is leaking. Billing errors, delayed invoices, and missed upsell opportunities are costing you 15-20% of
                potential revenue—and you don't even see it happening.
            </>
        ),
        icon: <Brain />,
        isLast: false,
    },
    {
        title: "",
        description: (
            <>
                You're working harder than most, your facility deserves better, and your horses need more. You've optimized your
                website, built your reputation, and earned glowing reviews—but your operational excellence hasn't caught up to
                your marketing excellence. Having good horse care practices guarantees you client satisfaction. Equipping your
                facility with Equinova transforms your operation into AN INTELLIGENT BUSINESS and guarantees you{" "}
                <span className="text-primary font-bold">
                    NEVER MISS A HEALTH ISSUE, NEVER LEAVE MONEY ON THE TABLE, AND NEVER WASTE TIME ON CHAOS.
                </span>
            </>
        ),
        icon: <Brain />,
        isLast: true,
    },
]

export default function ButYourStill() {
    const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
    }

    return (
        <div ref={ref} className="min-h-screen bg-transparent layout-container py-8 md:py-12">
            <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent text-center text-balance mb-8 md:mb-20"
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
            >
                But You're Still
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {data.map((datas, index) => (
                    <motion.div
                        key={index}
                        className={`bg-accent/10 border border-accent/20 rounded-lg md:rounded-2xl p-2 md:p-3 ${datas.isLast ? "md:col-span-2 col-span-1" : ""}`}
                        variants={itemVariants}
                    >
                        <div className="bg-accent-foreground h-full rounded-lg md:rounded-2xl p-3 md:p-5 shadow-sm flex flex-col items-start justify-start gap-3 md:gap-5">
                            {datas.isLast === false && (
                                <>
                                    <div className="flex items-center gap-4 md:gap-10 justify-between w-full">
                                        <div className="bg-secondary rounded-lg p-2 md:p-4 text-white shrink-0">
                                            <div className="w-5 h-5 md:w-6 md:h-6">{datas.icon}</div>
                                        </div>
                                        <h2 className="w-full text-start text-base md:text-xl text-accent font-extrabold">{datas.title}</h2>
                                    </div>
                                    <Separator orientation="horizontal" className="w-full" />
                                </>
                            )}
                            <div className="flex flex-col gap-2 md:gap-3 justify-between w-full">
                                <p className="text-sm md:text-base">{datas.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
