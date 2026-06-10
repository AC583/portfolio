'use client'

import { m } from 'framer-motion'
import { useState } from 'react'
import { Mail, Github, Linkedin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-24 px-4 bg-surface-container text-on-background relative z-10" id="contact">
      <div className="max-w-4xl mx-auto">
        <m.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="text-[10px] uppercase tracking-widest text-primary font-mono mb-2 block">Open Channel</span>
          <h2 className="text-4xl md:text-5xl font-bold text-on-background tracking-tight font-sans">
            Get In Touch
          </h2>
        </m.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <m.div
            initial={{ opacity: 0, x: -30, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <h3 className="text-lg font-semibold mb-6 text-on-background font-sans tracking-tight uppercase text-xs tracking-widest text-on-surface-variant">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] uppercase tracking-wider text-on-surface-variant font-mono">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Input user_name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-white/20 focus:border-primary focus:ring-0 focus:outline-none transition-all text-sm py-2 text-on-background placeholder-outline"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] uppercase tracking-wider text-on-surface-variant font-mono">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="user@domain.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-white/20 focus:border-primary focus:ring-0 focus:outline-none transition-all text-sm py-2 text-on-background placeholder-outline"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-wider text-on-surface-variant font-mono">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter transmission payload..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-transparent border-0 border-b border-white/20 focus:border-primary focus:ring-0 focus:outline-none transition-all text-sm py-2 text-on-background placeholder-outline resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-on-primary font-bold py-4 rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2 uppercase tracking-widest text-xs"
              >
                <Send size={16} />
                Send Transmission
              </button>
            </form>
          </m.div>

          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, x: 30, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <h3 className="text-[10px] uppercase tracking-widest text-on-surface-variant font-mono mb-6">Let&apos;s Connect</h3>
            <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">
              I&apos;m always interested in new opportunities and collaborations.
              Feel free to reach out if you&apos;d like to work together or just have a chat!
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:adrianhuang9981@gmail.com"
                className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors text-sm"
              >
                <Mail size={16} className="text-primary" />
                adrianhuang9981@gmail.com
              </a>
              <a
                href="https://github.com/AC583"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors text-sm"
              >
                <Github size={16} className="text-primary" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/adrian-huang-274527281/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors text-sm"
              >
                <Linkedin size={16} className="text-primary" />
                LinkedIn
              </a>
            </div>

            <div className="glass-panel p-6 rounded-xl">
              <h4 className="text-[10px] uppercase tracking-widest text-primary font-mono mb-2">Quick Response</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                I typically respond to messages within 24 hours. For urgent inquiries,
                feel free to connect on LinkedIn.
              </p>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}
