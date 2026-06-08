'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    year: 'Jul 2025 – Aug 2025',
    title: 'Microelectronics',
    company: 'Beaverworks Summer Institute',
    description: 'Studied electrical engineering theory behind semiconductors; gained hands-on experience with various microelectronic components; built and presented a microelectronics project developing problem solving and communication skills with a team.',
    type: 'education'
  },
  {
    year: 'Sep 2022 – Jun 2026',
    title: 'Senior',
    company: 'Queens High School for the Sciences at York College',
    description: 'Grade: Senior. Activities and societies: Robotics Team, Science Olympiad Team, Hackathon Committee',
    type: 'education'
  }
]

export default function Experience() {
  return (
    <section className="py-24 px-4 bg-surface text-on-background" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] uppercase tracking-widest text-primary font-mono mb-2 block">System Log</span>
          <h2 className="text-4xl md:text-5xl font-bold text-on-background tracking-tight font-sans">
            Experience & Achievements
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.year}-${exp.title}`}
              className="relative flex items-start mb-10 pl-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center ${
                index === 0
                  ? 'bg-surface border-2 border-primary'
                  : 'bg-surface border-2 border-white/20'
              }`}>
                <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-primary' : 'bg-white/20'}`}></div>
              </div>

              <div className="glass-panel rounded-xl p-6 flex-1 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-on-background font-sans tracking-tight">{exp.title}</h3>
                  <span className="text-[10px] font-mono text-on-surface-variant mt-1 md:mt-0 uppercase tracking-widest">{exp.year}</span>
                </div>
                <p className="text-secondary text-sm mb-2 font-medium">{exp.company}</p>
                <p className="text-on-surface-variant text-sm leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
