"use client"

import HeroBg from "@/public/assets/hero-section.jpg"
import Image from "next/image"
import ContainerImage from "@/public/assets/hero-card-section.png"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight } from "lucide-react"
import { motion, type Variants, useReducedMotion } from "framer-motion"

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.7,
        ease: "easeOut",
      },
    },
  }

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        ease: "easeOut",
      },
    },
    floating: prefersReducedMotion
      ? {}
      : {
        y: [0, -8, 0],
        transition: {
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      },
  }

  return (
    <section
      className="min-h-screen w-full flex items-end justify-between layout-container px-4 sm:px-6 lg:px-0 py-12 sm:py-12 lg:py-0"
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5)), url(${HeroBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full mt-20">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-0 h-full">
            {/* Left Content Section */}
            <motion.div
              className="flex gap-2 flex-col max-w-2xl w-full lg:w-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl text-start text-white font-semibold leading-tight"
                variants={itemVariants}
              >
                The Intelligent <br className="hidden sm:block" /> Business Platform
              </motion.h1>

              <motion.p className="text-start text-white text-sm sm:text-base" variants={itemVariants}>
                For Professional Equestrian Facilities
              </motion.p>

              <motion.div className="flex flex-col gap-7" variants={itemVariants}>
                <small className="text-secondary-foreground/70 text-xs sm:text-sm leading-relaxed">
                  Transform barn chaos into predictive intelligence! AI-powered horse management that predicts health
                  issues, optimizes costs, and maximizes profitability so you can focus on what matters: exceptional
                  horse care.
                </small>
                <hr className="opacity-40" />

                <motion.div
                  className="bg-accent/20 backdrop-blur-2xl p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-accent-foreground/20 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 w-full sm:w-fit"
                  variants={itemVariants}
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
                      <Avatar className="size-10 sm:size-12">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="size-10 sm:size-12" />
                        <AvatarFallback className="size-10 sm:size-12">CN</AvatarFallback>
                      </Avatar>
                      <Avatar className="size-10 sm:size-12">
                        <AvatarImage
                          src="https://github.com/maxleiter.png"
                          alt="@maxleiter"
                          className="size-10 sm:size-12"
                        />
                        <AvatarFallback className="size-10 sm:size-12">LR</AvatarFallback>
                      </Avatar>
                      <Avatar className="size-10 sm:size-12">
                        <AvatarImage
                          src="https://github.com/evilrabbit.png"
                          alt="@evilrabbit"
                          className="size-10 sm:size-12"
                        />
                        <AvatarFallback className="size-10 sm:size-12">ER</AvatarFallback>
                      </Avatar>
                      <Avatar className="size-10 sm:size-12">
                        <AvatarFallback className="size-10 sm:size-12 bg-secondary text-white">
                          <ArrowRight className="size-5" />
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  {/* Responsive Divider */}
                  <div className="border border-secondary-foreground/30 w-full sm:w-px sm:h-[50px] hidden sm:block"></div>
                  <h2 className="font-bold uppercase text-secondary-foreground text-xs sm:text-sm">
                    JOIN TOP
                    <br />
                    HORSE RIDERS
                  </h2>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Card Section */}
            <motion.div
              className="w-full sm:w-auto"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative">
                <div
                  className="bg-accent-foreground/70 absolute -top-2 sm:-top-4 left-1/2 transform -translate-x-1/2 rounded-2xl sm:rounded-4xl p-3 sm:p-5 h-full"
                  style={{ width: "calc(100% - 8px)" }}
                  aria-hidden="true"
                ></div>

                <div className="relative bg-primary-foreground p-4 sm:p-5 rounded-2xl sm:rounded-3xl flex flex-row items-center gap-4 sm:gap-5 justify-between">
                  <div className="flex flex-col gap-3 items-center sm:items-start justify-between text-center sm:text-start">
                    <h3 className="text-xl sm:text-2xl text-accent font-extrabold uppercase leading-tight">
                      Limited to <br />
                      200 Founding <br /> Members
                    </h3>
                    <div className="border border-accent/20 w-full my-2 sm:my-3"></div>
                    <Button size={"lg"} className="w-full sm:w-auto">
                      Join the Waitlist
                    </Button>
                  </div>

                  <motion.div
                    variants={imageVariants}
                    animate="floating"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <Image
                      src={ContainerImage || "/placeholder.svg"}
                      alt="Equinova Logo"
                      className="object-center object-cover h-[160px] w-[130px] sm:h-[215px] sm:w-[170px] rounded-xl sm:rounded-2xl"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
