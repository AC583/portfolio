'use client'

import { m } from 'framer-motion'
import Image from 'next/image'
import photo from '../public/photo.png'

const skills = {
  'Programming Languages': ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java'],
  'Frameworks': ['React', 'Next.js', 'Node.js', 'Express', 'Django'],
  'Tools': ['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL'],
  'Hardware/Electronics': ['Arduino', 'Raspberry Pi', 'Verilog', 'FPGA', 'Circuit Design']
}

const categoryColors: Record<string, string> = {
  'Programming Languages': 'text-primary',
  'Frameworks': 'text-secondary',
  'Tools': 'text-tertiary',
  'Hardware/Electronics': 'text-primary-fixed',
}

export default function About() {
  return (
    <section className="py-24 px-4 bg-surface text-on-background relative z-10" id="about">
      <div className="max-w-7xl mx-auto">
        <m.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="text-[10px] uppercase tracking-widest text-primary font-mono mb-2 block">System Profile</span>
          <h2 className="text-4xl md:text-5xl font-bold text-on-background tracking-tight font-sans">
            About Me
          </h2>
        </m.div>

        <m.div
          className="flex flex-col md:flex-row items-center gap-10 mb-16"
          initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <m.div
            className="w-[180px] h-[180px] shrink-0 rounded-full overflow-hidden ring-2 ring-primary/30 shadow-[0_0_30px_rgba(0,240,255,0.15)]"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
          >
            <Image
              src={photo}
              alt="Adrian Huang"
              width={180}
              height={180}
              className="w-full h-full object-cover"
            />
          </m.div>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            I&apos;m a dedicated Computer Science and Electrical & Computer Engineering student with a passion for
            creating innovative solutions that bridge the gap between software and hardware. My experience spans
            full-stack development, embedded systems, and machine learning, with a focus on building scalable
            and efficient applications.
          </p>
        </m.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <m.div
              key={category}
              className="glass-panel rounded-xl p-6 hover:border-white/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30, x: index % 2 === 0 ? -20 : 20, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <h3 className={`text-[10px] uppercase tracking-widest font-mono mb-4 ${categoryColors[category] ?? 'text-primary'}`}>{category}</h3>
              <ul className="space-y-2">
                {skillList.map((skill) => (
                  <li key={skill} className="text-on-surface-variant text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-current opacity-50 shrink-0"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
