'use client'

import { motion } from 'framer-motion'
import { Smartphone, Building2, Repeat2 } from 'lucide-react'

const AboutCard = ({ icon: Icon, title, description, index }: any) => {
  return (
    <motion.div
      className="card-base"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -3 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg" style={{ background: 'rgba(108, 99, 255, 0.1)' }}>
          <Icon size={28} style={{ color: 'var(--color-accent-violet)' }} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>{title}</h3>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function About() {
  const aboutCards = [
    {
      icon: Smartphone,
      title: 'Expertise iOS & Développement Natif',
      description:
        'Maîtrise complète du développement iOS avec Swift et SwiftUI. Expert en conception d\'applications natives performantes et robustes, de la phase de cadrage au déploiement sur l\'App Store. Spécialiste des architectures modernes (MVVM, Clean Architecture) et de la conception de composants réutilisables pour garantir la scalabilité. Expérience avérée sur des produits à fort trafic comme Galeries Lafayette avec modernisation complète d\'applications et migration vers SAP Commerce Cloud.',
    },
    {
      icon: Building2,
      title: 'Leadership Technique & Architecture Mobile',
      description:
        'Expérience de Tech Lead avec conception de socles techniques modulaires et pérennes. Capacité à définir les parcours utilisateurs et coordonner avec les équipes backend, web et design. Expertise en mise en place et optimisation de pipelines CI/CD (Bitrise, App Store Connect, multi-environnements). Forte sensibilité à la qualité de code, aux performances et à l\'expérience utilisateur.',
    },
    {
      icon: Repeat2,
      title: 'Développement Cross-Platform & Polyvalence',
      description:
        'Background Android solide (Kotlin, Java) qui facilite la collaboration cross-plateforme. Capacité à développer from scratch des applications complexes (néobanque, gestion sportive et financière) avec gestion des cartes bancaires, notifications push temps réel, virements P2P et intégrations Firebase. Autonomie, curiosité, persévérance et sens du produit.',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative" style={{ background: '#F9FAFB' }}>
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
            <span className="label-uppercase">À propos</span>
            <div className="h-1 w-8 rounded" style={{ background: 'linear-gradient(90deg, #6C63FF, #3B82F6)' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}>
            Expertise en développement iOS
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {aboutCards.map((card, index) => (
            <AboutCard key={index} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
