'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Smart Home Automation System',
    description: 'IoT-based home automation using Raspberry Pi and sensors for energy-efficient control.',
    tech: ['Python', 'Raspberry Pi', 'MQTT', 'React'],
    github: '#',
    demo: '#',
    tag: 'Hardware',
    tagColor: 'text-tertiary border-tertiary/20 bg-tertiary/10',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application with payment integration and admin dashboard.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    github: '#',
    demo: '#',
    tag: 'Full-Stack',
    tagColor: 'text-primary border-primary/20 bg-primary/10',
  },
  {
    title: 'Machine Learning Stock Predictor',
    description: 'LSTM-based model for stock price prediction using historical data and technical indicators.',
    tech: ['Python', 'TensorFlow', 'Pandas', 'Flask'],
    github: '#',
    demo: '#',
    tag: 'AI / ML',
    tagColor: 'text-secondary border-secondary/20 bg-secondary/10',
  },
  {
    title: 'FPGA Graphics Processor',
    description: 'Hardware-accelerated graphics rendering using Verilog on FPGA development board.',
    tech: ['Verilog', 'FPGA', 'VHDL', 'C++'],
    github: '#',
    demo: '#',
    tag: 'Hardware',
    tagColor: 'text-tertiary border-tertiary/20 bg-tertiary/10',
  },
  {
    title: 'Real-time Chat Application',
    description: 'Scalable chat app with real-time messaging, file sharing, and group management.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: '#',
    demo: '#',
    tag: 'Real-time',
    tagColor: 'text-primary border-primary/20 bg-primary/10',
  },
  {
    title: 'Arduino Robotics Project',
    description: 'Autonomous robot navigation using ultrasonic sensors and motor control algorithms.',
    tech: ['Arduino', 'C++', 'Sensors', 'PID Control'],
    github: '#',
    demo: '#',
    tag: 'Embedded',
    tagColor: 'text-tertiary border-tertiary/20 bg-tertiary/10',
  }
]

export default function Projects() {
  return (
    <section className="py-24 px-4 bg-surface-container-lowest text-on-background" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-[10px] uppercase tracking-widest text-primary font-mono mb-2 block">System Registry</span>
            <h2 className="text-4xl md:text-5xl font-bold text-on-background tracking-tight font-sans">
              Projects
            </h2>
          </div>
          <div className="h-px flex-1 bg-white/10 hidden md:block mx-10 mb-2"></div>
          <p className="text-on-surface-variant max-w-xs text-sm">A selection of end-to-end engineered solutions across the stack.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-panel rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500 group flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2 py-1 border rounded text-[10px] font-mono uppercase tracking-wider ${project.tagColor}`}>
                    {project.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors font-sans tracking-tight">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant mb-5 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-on-surface-variant"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 border-t border-white/5 pt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors text-xs font-medium uppercase tracking-wider"
                  >
                    <Github size={14} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors text-xs font-medium uppercase tracking-wider"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
