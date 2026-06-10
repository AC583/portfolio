'use client'

import { m } from 'framer-motion'
import { useState, useEffect } from 'react'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <m.nav
      className={`fixed top-0 w-full z-50 border-b border-white/10 shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0b]/90 backdrop-blur-xl'
          : 'bg-[#0a0a0b]/70 backdrop-blur-xl'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-sans tracking-tight">
        <div className="flex justify-between items-center w-full">
          <m.div
            className="text-xl font-bold text-primary tracking-tighter"
            whileHover={{ scale: 1.05 }}
          >
            AH
          </m.div>

          <div className="hidden md:flex items-center space-x-8">
            {['about', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                type="button"
                onClick={() => scrollToSection(section)}
                className="text-on-surface-variant font-medium hover:text-primary transition-colors capitalize text-sm tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button type="button" aria-label="Toggle navigation menu" className="text-on-surface-variant hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </m.nav>
  )
}
