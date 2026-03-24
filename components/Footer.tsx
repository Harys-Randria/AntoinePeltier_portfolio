'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ background: '#F9FAFB', borderTop: '1px solid var(--color-separator)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="mb-2"
              initial={{ width: 0 }}
              whileInView={{ width: 'auto' }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-2xl font-bold relative inline-block" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="relative z-10" style={{ 
                  background: 'linear-gradient(135deg, #6C63FF 0%, #3B82F6 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Antoine PELTIER
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg -z-10"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  style={{ originX: 0, filter: 'blur(6px)', opacity: 0.2 }}
                />
              </span>
            </motion.div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
              Développeur iOS senior spécialisé dans la création d'applications natives performantes et modernes.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>Navigation</h3>
            <ul className="space-y-2">
              {[
                { label: 'À propos', id: 'about' },
                { label: 'Compétences', id: 'skills' },
                { label: 'Expériences', id: 'experiences' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-blue)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>Connectez-moi</h3>
            <div className="flex gap-4 flex-wrap">
              <motion.a
                href="https://www.linkedin.com/in/antoine-peltier72"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all"
                style={{ background: 'rgba(108, 99, 255, 0.1)', color: 'var(--color-accent-violet)' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:antoine-p@hotmail.com"
                className="p-2 rounded-lg transition-all"
                style={{ background: 'rgba(108, 99, 255, 0.1)', color: 'var(--color-accent-violet)' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="https://www.malt.fr/profile/antoinepeltier2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all"
                style={{ background: 'rgba(108, 99, 255, 0.1)' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/icons/malt.png" alt="Malt" width={20} height={20} className="object-contain" />
              </motion.a>
              <motion.a
                href="https://www.collective.work/profile/antoine-peltier"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all"
                style={{ background: 'rgba(108, 99, 255, 0.1)' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/icons/collective.png" alt="Collective" width={20} height={20} className="object-contain" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="my-8" style={{ borderTop: '1px solid var(--color-separator)' }} />

        {/* Copyright */}
        <motion.div
          className="text-center text-sm"
          style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Antoine PELTIER — Développeur iOS</p>
        </motion.div>
      </div>
    </footer>
  )
}