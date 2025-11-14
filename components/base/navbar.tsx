"use client"

import Link from "next/link"
import { Home } from "lucide-react"
import { useEffect, useState } from "react"
import Logo from "@/public/assets/Logo.png"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, type Variants } from "framer-motion"

export default function EquinovaNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "#", isActive: true },
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "FAQ", href: "#" },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const },
    },
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-accent" : "bg-transparent"
        }`}
    >
      <div className="px-3 sm:px-5 md:px-10">
        <div className="flex items-center justify-between py-3 md:py-0">
          {/* Logo */}
          <Link href="/" className="shrink-0 w-24 h-14 sm:w-32 sm:h-16 md:w-40 md:h-20">
            <Image
              src={Logo || "/placeholder.svg"}
              alt="Equinova Logo"
              className="object-center object-cover w-full h-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5 bg-accent p-1 rounded-full font-inter">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.label}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all font-medium text-sm ${link.isActive
                      ? "bg-secondary text-secondary-foreground border border-secondary-foreground"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {link.isActive && <Home className="w-4 h-4" />}
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <Button size={"lg"} className="text-xs sm:text-sm">
              Join the Waitlist
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 8 : 0,
              }}
              className="w-6 h-0.5 bg-secondary-foreground block"
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-secondary-foreground block"
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -8 : 0,
              }}
              className="w-6 h-0.5 bg-secondary-foreground block"
            />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden flex flex-col gap-3 py-4 bg-accent p-4 rounded-lg mt-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all font-medium text-sm ${link.isActive
                    ? "bg-secondary text-secondary-foreground border border-secondary-foreground"
                    : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
              >
                {link.isActive && <Home className="w-4 h-4" />}
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
