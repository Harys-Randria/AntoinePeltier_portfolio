'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

interface Experience {
  company: string
  position: string
  period: string
  type: string
  sector: string
  description: string[]
  stack: string[]
}

const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => {
  const calculateDuration = (period: string) => {
    const [start, end] = period.split(' – ')
    const [startMonth, startYear] = start.split('/').map(Number)
    const [endMonth, endYear] = end.split('/').map(Number)

    const months = (endYear - startYear) * 12 + (endMonth - startMonth)
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12

    if (years > 0 && remainingMonths > 0) {
      return `${years} an${years > 1 ? 's' : ''} ${remainingMonths} mois`
    } else if (years > 0) {
      return `${years} an${years > 1 ? 's' : ''}`
    }
    return `${remainingMonths} mois`
  }

  return (
    <motion.div
      className="flex gap-6 md:gap-8"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Timeline Dot */}
      <div className="flex flex-col items-center">
        <motion.div
          className="w-4 h-4 rounded-full ring-4 shadow-lg"
          style={{
            background: exp.type === 'CDI' ? 'var(--color-accent-teal)' : 'var(--color-accent-blue)',
            boxShadow: exp.type === 'CDI' ? '0 0 12px rgba(90, 200, 250, 0.5)' : '0 0 12px rgba(0, 122, 255, 0.5)',
          }}
          whileInView={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 0.6, delay: index * 0.07 }}
          viewport={{ once: true }}
        />
        {index < 3 && (
          <div className="w-1 h-24" style={{
            background: exp.type === 'CDI' ? 'var(--color-accent-teal)' : 'var(--color-accent-blue)',
            opacity: 0.2,
          }} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 text-left">
        <motion.div
          className="card-base"
          whileHover={{ y: -3 }}
        >
          {/* Accent bar */}
          <div className="h-1 -mx-6 -mt-6 mb-4" style={{ background: exp.type === 'CDI' ? 'var(--color-accent-teal)' : 'var(--color-accent-blue)' }} />

          {/* Header */}
          <div className="flex flex-col gap-2 mb-4">
            <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>{exp.company}</h3>
            <p className="font-semibold" style={{ color: 'var(--color-accent-blue)', fontFamily: 'var(--font-display)' }}>{exp.position}</p>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>{exp.period} • {calculateDuration(exp.period)}</p>
          </div>

          {/* Badges */}
          <div className="flex gap-2 mb-4 flex-wrap">
            <span className="badge-base badge-blue text-xs">{exp.sector}</span>
            <span className="badge-base badge-cyan text-xs">{exp.type}</span>
          </div>

          {/* Description */}
          <ul className="space-y-2 mb-4">
            {exp.description.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
                <span style={{ color: 'var(--color-accent-blue)' }}>›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {exp.stack.map((tech, i) => (
              <span key={i} className="badge-base badge-blue text-xs">{tech}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Experiences() {
  const experiences: Experience[] = [
    {
      company: 'Galeries Lafayette',
      position: 'Développeur iOS',
      period: '01/2023 – 12/2025',
      type: 'Mission freelance',
      sector: 'Retail/E-commerce',
      description: [
        'Modernisation de l\'application iOS dans le cadre d\'un projet de replatforming et de refonte UX/UI',
        'Migration des API vers SAP Commerce Cloud (SAPCC) et refonte des appels réseau',
        'Conception de composants SwiftUI réutilisables pour garantir la scalabilité',
        'Amélioration des performances et de la stabilité de l\'application',
        'Collaboration avec les équipes produit, design et backend',
        'Participation active aux rituels agiles et au cycle CI/CD (App Store Connect)',
      ],
      stack: ['Swift', 'SwiftUI', 'iOS', 'CI/CD', 'Firebase', 'Jira', 'App Store Connect', 'SAP Commerce Cloud'],
    },
    {
      company: 'Galeries Lafayette',
      position: 'Tech Lead Android',
      period: '10/2022 – 12/2023',
      type: 'Mission freelance',
      sector: 'Retail/E-commerce',
      description: [
        'Refonte complète de l\'application Android autour de SAP Commerce Cloud',
        'Conception d\'un socle technique modulaire et pérenne',
        'Mise en place et optimisation du pipeline CI/CD (Bitrise, multi-environnements)',
        'Définition des parcours utilisateurs et coordination avec les équipes backend, web et design',
      ],
      stack: ['Kotlin', 'Coroutines', 'Retrofit', 'Hilt', 'MVVM', 'GitLab', 'Firebase', 'Material Design', 'Bitrise', 'SAP Commerce Cloud'],
    },
    {
      company: 'Tifo',
      position: 'Développeur Android',
      period: '05/2022 – 09/2022',
      type: 'CDI',
      sector: 'Sport',
      description: [
        'Développement from scratch d\'une application de gestion sportive et financière',
        'Gestion des comptes bancaires, dépenses en temps réel et virements P2P',
      ],
      stack: ['Kotlin', 'Room', 'Retrofit', 'Hilt', 'Firebase', 'MVVM', 'Maps', 'Material Design'],
    },
    {
      company: 'Vaultia',
      position: 'Développeur Android',
      period: '10/2019 – 04/2022',
      type: 'CDI',
      sector: 'Fintech / Néobanque',
      description: [
        'Développement complet d\'une néobanque (10 000 téléchargements, note 4,4/5)',
        'Gestion des cartes physiques et virtuelles, notifications push en temps réel',
      ],
      stack: ['Java', 'Kotlin', 'RxJava', 'Retrofit', 'Realm', 'Firebase', 'MVVM'],
    },
  ]

  return (
    <section id="experiences" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
            <span className="label-uppercase">Expériences</span>
            <div className="h-1 w-8 rounded" style={{ background: 'linear-gradient(90deg, #6C63FF, #3B82F6)' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}>
            Mon parcours professionnel
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}