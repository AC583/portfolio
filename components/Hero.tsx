'use client'

import { m } from 'framer-motion'
import { useState } from 'react'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Hero() {
  const [particles] = useState(() =>
    [...Array(50)].map(() => ({
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      duration: Math.random() * 3 + 2,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }))
  )

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-surface text-on-background">
      {/* Gradient overlay + particles */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/40 to-surface">
        {particles.map((p, i) => (
          <m.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            animate={{
              x: [0, p.x],
              y: [0, p.y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              left: p.left,
              top: p.top,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <m.div
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
          <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-mono">System Status: Operational</span>
        </m.div>

        <m.h1
          className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary via-primary-fixed to-secondary-fixed-dim bg-clip-text text-transparent tracking-tight font-sans"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Adrian Huang
        </m.h1>
        <m.p
          className="text-xl md:text-2xl mb-4 text-primary font-sans font-medium tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Computer Science & ECE Engineer
        </m.p>
        <m.p
          className="text-lg mb-10 max-w-2xl mx-auto text-on-surface-variant leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Passionate about building innovative solutions at the intersection of software and hardware engineering.
        </m.p>
        <m.div
          className="flex flex-col md:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            type="button"
            onClick={() => scrollToSection('projects')}
            className="w-full md:w-auto px-8 py-4 bg-primary text-on-primary font-bold rounded neon-border transition-all duration-300"
          >
            View Projects
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="w-full md:w-auto px-8 py-4 bg-transparent border border-white/20 text-on-background font-bold rounded hover:bg-white/5 transition-all duration-300"
          >
            Contact Me
          </button>
        </m.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-mono">Scroll to initialize</span>
        <m.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-primary text-xl"
        >
          ↓
        </m.div>
      </div>

    </section>
  )
}
