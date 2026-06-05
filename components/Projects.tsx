'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'QHSS City (Eco Metropolis)',
    description: 'Engineered an asynchronous, event-driven city-building simulation engine utilizing complex algorithmic mathematical modeling and structural design patterns. Developed a multi-threaded data pipeline to manage state mutation and natural decay mechanics across 8 interdependent statistical vectors. Architected a custom JavaScript runtime sandbox using execution isolation primitives to parse code, handle errors, and interface safely with a proprietary spatial placement API. Integrated Firebase Realtime Database to implement real-time synchronization, multi-tenant room logic, and cross-session state persistence.',
    tech: ['JavaScript (ES6+)', 'Firebase Realtime DB', 'LocalStorage', 'CSS3'],
    github: 'https://github.com/AC583/QHSS-Metropolis',
    demo: 'https://qhss-city.web.app',
    tag: 'Full-Stack / Systems',
    tagColor: 'text-primary border-primary/20 bg-primary/10',
  },
  {
    title: 'QuickTube',
    description: 'Designed and deployed a full-stack, distributed AI-powered video analysis platform utilizing an asynchronous task pipeline architecture. Leveraged Next.js Serverless Functions alongside Trigger.dev worker queues to handle long-running, multi-step backend background jobs, bypassing compute timeouts and mitigating server strain. Orchestrated Retrieval-Augmented Generation (RAG) conversational workflows and multi-turn prompt engineering sequences via the NVIDIA NIM ecosystem (Llama 3.1). Modeled a relational database schema using Prisma ORM and PostgreSQL, implementing programmatic API key rotation pools to achieve high throughput and prevent rate-limiting bottlenecks.',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma', 'Trigger.dev', 'NVIDIA NIM'],
    github: 'https://github.com/AC583/QuickTube',
    demo: 'https://youtube-summarizer-rdpywf2v3-ac583s-projects.vercel.app/',
    tag: 'AI / Distributed Systems',
    tagColor: 'text-secondary border-secondary/20 bg-secondary/10',
  },
  {
    title: 'Physics Solver',
    description: 'Built and published a high-performance productivity tool leveraging the Chrome Extensions Manifest V3 architecture for low-latency background page processing. Engineered content scripts to inject UI viewports into active browser tabs, capturing DOM coordinates to execute regional viewport screenshots. Integrated the Groq Vision API to process unstructured graphical assets, utilizing structural parsing algorithms to extract step-by-step problem resolutions. Implemented the KaTeX engine to achieve client-side LaTeX math rendering for complex algebraic equations. Used the Chrome Storage API to securely manage persistent local state and user configuration parameters.',
    tech: ['Chrome MV3', 'JavaScript', 'KaTeX', 'Groq Vision API', 'Chrome APIs'],
    github: 'https://github.com/AC583/Physics-Solver-Extension',
    demo: '#',
    tag: 'Browser Extension',
    tagColor: 'text-tertiary border-tertiary/20 bg-tertiary/10',
  },
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
