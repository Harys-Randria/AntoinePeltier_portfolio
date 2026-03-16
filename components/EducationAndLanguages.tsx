'use client'

import { motion } from 'framer-motion'
import { BookOpen, Globe } from 'lucide-react'

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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Education */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="card-base h-full"
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg" style={{ background: 'rgba(108, 99, 255, 0.1)' }}>
                  <BookOpen size={28} style={{ color: 'var(--color-accent-violet)' }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>Formation</h3>
              </div>
              <div>
                <p className="text-lg font-semibold mb-2" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>OpenClassrooms</p>
                <p className="font-medium mb-2" style={{ color: 'var(--color-accent-violet)', fontFamily: 'var(--font-display)' }}>Développeur d'application mobile</p>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>01/2018 – 07/2019</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Languages */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="card-base h-full"
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg" style={{ background: 'rgba(108, 99, 255, 0.1)' }}>
                  <Globe size={28} style={{ color: 'var(--color-accent-violet)' }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>Langues</h3>
              </div>
              
              <div className="space-y-6">
                {/* French */}
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="font-semibold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>🇫🇷 Français</p>
                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>100%</span>
                  </div>
                  <div className="w-full rounded-full h-2 overflow-hidden" style={{ background: '#E2E8F0' }}>
                    <motion.div
                      className="h-full"
                      style={{ background: 'var(--color-accent-violet)' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <p className="text-xs mt-2" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>Langue maternelle</p>
                </div>

                {/* English */}
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="font-semibold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>🇬🇧 Anglais</p>
                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>75%</span>
                  </div>
                  <div className="w-full rounded-full h-2 overflow-hidden" style={{ background: '#E2E8F0' }}>
                    <motion.div
                      className="h-full"
                      style={{ background: 'var(--color-accent-violet)' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: '75%' }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <p className="text-xs mt-2" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>Professionnel</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
