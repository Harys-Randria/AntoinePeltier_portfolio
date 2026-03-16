'use client'

import { motion } from 'framer-motion'
import {
  Smartphone,
  Bot,
  Plug,
  Database,
  GitBranch,
  Wifi,
  CreditCard,
} from 'lucide-react'

interface SkillGroup {
  category: string
  icon: React.ReactNode
  skills: string[]
}

const SkillPill = ({ skill, index, color = 'blue' }: { skill: string; index: number; color?: string }) => {
  const colorClass = `badge-${color}`
  return (
    <motion.span
      className={`badge-base ${colorClass}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      style={{ fontFamily: 'var(--font-body)' }}
    >
      {skill}
    </motion.span>
  )
}

export default function Skills() {
  const skillGroups: SkillGroup[] = [
    {
      category: 'iOS',
      icon: <Smartphone size={20} strokeWidth={1.5} />,
      skills: ['Swift', 'SwiftUI', 'UIKit', 'Combine', 'Concurrency', 'MVVM', 'Clean Architecture', 'Xcode', 'App Store Connect', 'TestFlight'],
    },
    {
      category: 'Android',
      icon: <Bot size={20} strokeWidth={1.5} />,
      skills: ['Kotlin', 'Java', 'Coroutines', 'LiveData', 'RxKotlin', 'MVVM', 'Material Design'],
    },
    {
      category: 'Backend & Intégrations',
      icon: <Plug size={20} strokeWidth={1.5} />,
      skills: ['Retrofit', 'URLSession', 'Codable', 'Hilt', 'SAP Commerce Cloud', 'Firebase'],
    },
    {
      category: 'Données & Stockage',
      icon: <Database size={20} strokeWidth={1.5} />,
      skills: ['Room', 'Realm', 'Core Data'],
    },
    {
      category: 'DevOps & Collaboration',
      icon: <GitBranch size={20} strokeWidth={1.5} />,
      skills: ['Git', 'GitLab', 'Bitrise', 'GitLab CI', 'Multi-environnements', 'Jira', 'Rituels agiles'],
    },
    {
      category: 'Services & APIs',
      icon: <Wifi size={20} strokeWidth={1.5} />,
      skills: ['REST APIs', 'Notifications push', 'Firebase Analytics', 'Maps integration'],
    },
    {
      category: 'Fintech',
      icon: <CreditCard size={20} strokeWidth={1.5} />,
      skills: ['Gestion cartes bancaires', 'Virements P2P', 'Gestion comptes', 'Dépenses temps réel'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
            <span className="label-uppercase">Compétences</span>
            <div className="h-1 w-8 rounded" style={{ background: 'linear-gradient(90deg, #6C63FF, #3B82F6)' }} />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.02em',
            }}
          >
            Technologies & Expertises
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {skillGroups.map((group, groupIndex) => {
            let color = 'blue'
            if (group.category.includes('Android')) color = 'green'
            else if (group.category.includes('DevOps')) color = 'orange'
            else if (group.category.includes('Fintech')) color = 'teal'
            else if (group.category.includes('Backend') || group.category.includes('API')) color = 'cyan'

            const iconColor: Record<string, string> = {
              blue:   'var(--color-accent-blue)',
              green:  'var(--color-accent-green)',
              orange: 'var(--color-accent-orange)',
              teal:   'var(--color-accent-teal)',
              cyan:   'var(--color-accent-teal)',
              violet: 'var(--color-accent-indigo)',
            }

            return (
              <motion.div
                key={groupIndex}
                className="card-base overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: groupIndex * 0.07,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -3 }}
                viewport={{ once: true }}
              >
                {/* Card header */}
                <div
                  className="flex items-center gap-2.5 px-5 pt-5 pb-3"
                  style={{ borderBottom: '0.5px solid var(--color-separator-opaque)' }}
                >
                  <span style={{ color: iconColor[color] ?? 'var(--color-accent-blue)' }}>
                    {group.icon}
                  </span>
                  <h3
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontFamily: 'var(--font-body)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {group.category}
                  </h3>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2 px-5 py-4">
                  {group.skills.map((skill, skillIndex) => (
                    <SkillPill
                      key={skillIndex}
                      skill={skill}
                      index={skillIndex}
                      color={color}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}