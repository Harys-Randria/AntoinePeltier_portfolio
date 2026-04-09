'use client'

import { motion } from 'framer-motion'
import { BookOpen, Globe, Calendar, ChevronRight } from 'lucide-react'

export default function EducationAndLanguages() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const formations = [
    {
      title: "SwiftUI Advanced Architecture",
      school: "Swiftful Thinking",
      period: "Mar 2025 – Aug 2025",
      description: "Formation avancée en développement iOS, spécialisation architecture SwiftUI pour applications robustes, performantes et évolutives.",
      technologies: ["SwiftUI", "iOS", "Xcode", "Architecture mobile"],
      isCurrent: false
    },
    {
      title: "Développeur d'application Android",
      school: "OpenClassrooms",
      period: "Jan 2018 – Jul 2019",
      description: "Formation complète au développement d'applications Android, couvrant l'ensemble du cycle de vie d'un projet mobile.",
      technologies: ["Android", "Java", "Kotlin", "MVVM"],
      isCurrent: false
    }
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-1 w-8 rounded" style={{ background: 'linear-gradient(90deg, #6C63FF, #3B82F6)' }} />
            <span className="label-uppercase">Formation & Langues</span>
            <div className="h-1 w-8 rounded" style={{ background: 'linear-gradient(90deg, #6C63FF, #3B82F6)' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}>
            Parcours académique
          </h2>
          <p className="text-base mt-4 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
            Une formation continue et des compétences linguistiques pour accompagner mon expertise technique
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="card-base h-full"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  className="p-3 rounded-lg"
                  style={{ background: 'rgba(0, 122, 255, 0.1)' }}
                  whileHover={{ scale: 1.05 }}
                >
                  <BookOpen size={28} style={{ color: 'rgba(0, 122, 255, 0.8)' }} />
                </motion.div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>
                  Formation
                </h3>
              </div>

              <div className="space-y-6">
                {formations.map((formation, idx) => (
                  <motion.div
                    key={idx}
                    className="relative pl-5"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(0, 122, 255, 0.4)' }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h4 className="text-lg font-bold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>
                            {formation.title}
                          </h4>
                        </div>
                        <p className="font-medium text-sm mb-1" style={{ color: 'rgba(0, 122, 255, 0.8)', fontFamily: 'var(--font-display)' }}>
                          {formation.school}
                        </p>
                        <div className="flex items-center gap-1 mb-2">
                          <Calendar size={10} style={{ color: 'var(--color-text-tertiary)' }} />
                          <p className="text-xs" style={{ color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-body)' }}>
                            {formation.period}
                          </p>
                        </div>
                        <p className="text-sm mb-3" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
                          {formation.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {formation.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-xs px-2 py-0.5 rounded-full"
                              style={{ 
                                background: 'rgba(0, 122, 255, 0.08)',
                                color: 'rgba(0, 122, 255, 0.7)',
                                fontFamily: 'var(--font-body)'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Languages Section */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="card-base h-full"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  className="p-3 rounded-lg"
                  style={{ background: 'rgba(0, 122, 255, 0.1)' }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Globe size={28} style={{ color: 'rgba(0, 122, 255, 0.8)' }} />
                </motion.div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>Langues</h3>
              </div>
              
              <div className="space-y-8">
                {/* French */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>🇫🇷 Français</p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-body)' }}>Langue maternelle</p>
                    </div>
                    <span className="text-sm font-medium" style={{ color: 'rgba(0, 122, 255, 0.8)' }}>100%</span>
                  </div>
                  <div className="w-full rounded-full h-1.5 overflow-hidden" style={{ background: '#E2E8F0' }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'rgba(0, 122, 255, 0.8)' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>

                {/* English */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>🇬🇧 Anglais</p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-body)' }}>Professionnel (C1)</p>
                    </div>
                    <span className="text-sm font-medium" style={{ color: 'rgba(0, 122, 255, 0.8)' }}>75%</span>
                  </div>
                  <div className="w-full rounded-full h-1.5 overflow-hidden" style={{ background: '#E2E8F0' }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'rgba(0, 122, 255, 0.8)' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: '75%' }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>

                {/* Additional info */}
                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-2 p-3 rounded-lg" style={{ background: 'rgba(0, 122, 255, 0.05)' }}>
                    <ChevronRight size={14} style={{ color: 'rgba(0, 122, 255, 0.6)', marginTop: '2px' }} />
                    <p className="text-xs" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
                      Anglais technique : lecture de documentation technique, participation à des conférences internationales
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}