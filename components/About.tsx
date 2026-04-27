'use client'

import { motion } from 'framer-motion'

export default function About() {
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

  return (
    <section className="py-24 px-4 bg-surface text-on-background" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] uppercase tracking-widest text-primary font-mono mb-2 block">System Profile</span>
          <h2 className="text-4xl md:text-5xl font-bold text-on-background tracking-tight font-sans">
            About Me
          </h2>
        </motion.div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated Computer Science and Electrical & Computer Engineering student with a passion for
            creating innovative solutions that bridge the gap between software and hardware. My experience spans
            full-stack development, embedded systems, and machine learning, with a focus on building scalable
            and efficient applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              className="glass-panel rounded-xl p-6 hover:border-white/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
