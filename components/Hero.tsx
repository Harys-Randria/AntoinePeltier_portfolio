'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

const Counter = ({ end, duration = 1.2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrameId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)

      setCount(Math.floor(end * progress))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [end, duration])

  return <span>{count}</span>
}

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section className="relative min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #F0F7FF 0%, #FFFFFF 40%, #F9FAFB 100%)' }}>
      {/* Decorative background - Xcode window simulation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 opacity-6 rotate-[-5deg] pointer-events-none"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          <div className="w-full h-full bg-gray-900 border border-gray-700 rounded-lg p-4" style={{ fontFamily: 'Courier, monospace', fontSize: '11px', lineHeight: '1.6', color: '#8E8E93' }}>
            <div className="text-purple-300">func</div>
            <div className="text-gray-400">buildApp() async {'{}'}</div>
            <div className="ml-4 text-orange-300">let</div>
            <div className="ml-4 text-gray-400">config = AppConfiguration()</div>
            <div className="ml-4 text-purple-300">let</div>
            <div className="ml-4 text-gray-400">app = try await SwiftUI.App(config)</div>
            <div className="ml-4 text-purple-300">await</div>
            <div className="ml-4 text-orange-300">app.launch()</div>
            <div className="ml-4 text-gray-500">// 🚀</div>
          </div>
        </motion.div>

        {/* Subtle glow circles */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-5"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-6"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-56 h-56 bg-green-500 rounded-full blur-3xl opacity-4"
          animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
          transition={{ duration: 16, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1
              className="text-5xl md:text-6xl font-bold"
              style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
              variants={itemVariants}
            >
              Antoine <br />
              <span style={{ background: 'linear-gradient(135deg, #6C63FF 0%, #3B82F6 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                PELTIER
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="h-12">
              <motion.p
                className="text-2xl font-semibold"
                style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Développeur iOS Senior
              </motion.p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed max-w-lg"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Développeur iOS spécialisé dans la conception et le développement d'applications natives performantes et robustes. Plus de 6 ans d'expérience, de la phase de cadrage au déploiement sur l'App Store.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 py-6"
            >
              {[
                { value: 6, suffix: '+', label: 'ans d\'expérience' },
                { value: 10, suffix: 'K+', label: 'téléchargements' },
                { value: 4.40, suffix: '/5', label: 'note' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="card-base text-center"
                  whileHover={{ y: -3 }}
                >
                  <div className="text-2xl font-bold" style={{ color: 'var(--color-accent-violet)', fontFamily: 'var(--font-display)' }}>
                   
                    {stat.value % 1 !== 0 ? (
                      <>
                        <Counter end={Math.floor(stat.value)} />
                        {`.${String(stat.value).split('.')[1]}`}
                      </>
                    ) : (
                      <Counter end={stat.value} />
                    )}
                    {stat.suffix}
                  </div>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                onClick={() => scrollToSection('experiences')}
                className="btn-primary"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Voir mes réalisations
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Me contacter
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-4"
            >
              <motion.a
                href="https://www.linkedin.com/in/antoine-peltier72"
                target="_blank"
                rel="noopener noreferrer"
                className="card-base p-3"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} style={{ color: 'var(--color-accent-violet)' }} />
              </motion.a>
              <motion.a
                href="mailto:antoine-p@hotmail.com"
                className="card-base p-3"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} style={{ color: 'var(--color-accent-violet)' }} />
              </motion.a>
              <motion.a
                href="https://www.malt.fr/profile/antoinepeltier2"
                target="_blank"
                rel="noopener noreferrer"
                className="card-base p-3"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/icons/malt.png" alt="Malt" width={20} height={20} className="object-contain" />
              </motion.a>
              <motion.a
                href="https://www.collective.work/profile/antoine-peltier"
                target="_blank"
                rel="noopener noreferrer"
                className="card-base p-3"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/icons/collective.png" alt="Collective" width={20} height={20} className="object-contain" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {/* Glow background */}
              <div className="absolute inset-0 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, var(--color-accent-blue), transparent)' }} />

              {/* Border with shadow */}
              <div className="absolute inset-0 rounded-full p-1 flex items-center justify-center" style={{ border: '3px solid var(--color-accent-blue)', boxShadow: '0 0 0 6px rgba(10, 132, 255, 0.1), 0 0 40px rgba(10, 132, 255, 0.15)' }}>
                <div className="w-full h-full rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-bg-card)' }}>
                  <img
                    src="/antoine-peltier.png"
                    alt="Antoine PELTIER"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} style={{ color: 'var(--color-text-secondary)' }} />
      </motion.div>
    </section>
  )
}
