"use client"

import { useState } from "react"
import WhatYouAreDoingImage from "@/public/assets/what-you-are-doing.jpg"
import Image from "next/image"
import { Button } from "../ui/button"
import { Expand, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function WhatYouAreDoingWrong() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0)
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const items = [
    {
      number: "01",
      title: "Managing Horse Health Records",
      description:
        "You're diligent about tracking vet visits, vaccinations, medications, and health events. You know that good records are essential for quality care and client communication.",
    },
    {
      number: "02",
      title: "Tracking Training & Performance",
      description:
        "You maintain detailed logs of training sessions, performance metrics, and progress notes. This systematic approach helps you identify patterns and optimize your training strategies.",
    },
    {
      number: "03",
      title: "Monitoring Expenses & Revenue",
      description:
        "You keep track of all financial aspects of your operation, from feed costs to client payments. This financial awareness is crucial for running a sustainable business.",
    },
    {
      number: "04",
      title: "Coordinating with Your Team",
      description:
        "You communicate regularly with trainers, vets, farriers, and other team members to ensure everyone is aligned and working towards the same goals for your horses.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
  }

  return (
    <div ref={ref} className="min-h-screen bg-transparent relative p-2">
      <div className="min-h-screen rounded-2xl md:rounded-4xl bg-accent/5 p-3 md:p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Left Side - Image with Stats Card */}
          <motion.div
            className="relative rounded-2xl md:rounded-3xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-170"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
          >
            <Image
              src={WhatYouAreDoingImage || "/placeholder.svg"}
              alt="Horse and rider"
              fill
              className="object-cover"
              priority
            />

            {/* Stats Card */}
            <motion.div
              className="absolute bottom-3 left-3 right-3 md:bottom-8 md:left-8 md:right-auto md:max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-[#F1F1F1] rounded-lg md:rounded-2xl p-2 md:p-3 relative md:min-w-sm">
                <div
                  className="p-4 md:p-6 rounded-lg md:rounded-2xl"
                  style={{
                    backgroundImage: `url(/svgs/card-abstract-polygon-shape.svg)`,
                    backgroundSize: "cover",
                  }}
                >
                  <Button className="absolute right-3 md:right-5 top-3 md:top-5" size={"icon-lg"}>
                    <Expand />
                  </Button>

                  <div className="flex items-start justify-between gap-4 mb-4 md:mb-6">
                    <h3 className="text-base md:text-xl font-extrabold text-accent">Those Who Trust Us</h3>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-3xl md:text-5xl font-black text-primary">
                      3.2k <sup>+</sup>
                    </span>
                    <span className="text-xs md:text-sm text-muted-foreground font-medium">
                      Overall
                      <br />
                      Impressions
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="flex flex-col justify-center space-y-6 md:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent mb-6 md:mb-8 text-balance">
                What You're Already Doing Right
              </h2>
            </motion.div>

            {/* Items List */}
            <motion.div className="space-y-4 md:space-y-6" variants={containerVariants}>
              {items.map((item, index) => {
                const isSelected = selectedIndex === index
                return (
                  <motion.div
                    key={index}
                    className="border-b border-gray-300 pb-4 md:pb-6 cursor-pointer transition-all duration-300"
                    onClick={() => setSelectedIndex(isSelected ? null : index)}
                    variants={itemVariants}
                  >
                    <div className="flex gap-3 md:gap-4">
                      <div className="shrink-0">
                        <span className="text-base md:text-lg font-bold text-primary">{item.number}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 md:gap-4 mb-1 md:mb-2">
                          <h3
                            className={`text-sm md:text-base font-semibold ${isSelected ? "text-accent" : "text-accent/50"} transition-colors duration-300`}
                          >
                            {item.title}
                          </h3>
                          <ChevronDown
                            className={`w-4 h-4 md:w-5 md:h-5 text-gray-400 transition-transform duration-300 shrink-0 ${isSelected ? "rotate-180" : ""
                              }`}
                          />
                        </div>
                        <AnimatePresence>
                          {isSelected && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
                            >
                              <p className="text-xs md:text-sm text-gray-600 leading-relaxed pt-2">
                                {item.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
