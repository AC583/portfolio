'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollProgress from '../components/ScrollProgress'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

export default function Home() {
  const { scrollY } = useScroll()
  const gridY = useTransform(scrollY, (v) => v * -0.15)

  return (
    <main className="min-h-screen bg-surface">
      <ScrollProgress />
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          y: gridY,
        }}
      />
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}
