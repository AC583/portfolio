'use client'

import { m, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <m.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[100] origin-left shadow-[0_0_8px_rgba(0,240,255,0.5)]"
      style={{ scaleX }}
    />
  )
}
