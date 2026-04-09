'use client'

import { motion } from 'framer-motion'
import { Phone, Linkedin, Calendar, ArrowRight, Clock, CheckCircle } from 'lucide-react'

// ContactCard — supporte Lucide icon OU image PNG
const ContactCard = ({
  icon: Icon,
  imageSrc,
  title,
  value,
  href,
  index,
}: {
  icon?: React.ElementType
  imageSrc?: string
  title: string
  value: string
  href: string
  index: number
}) => {
  const iconColor =
    title === 'Téléphone' ? 'var(--color-accent-blue)'
    : title === 'Malt'    ? 'var(--color-accent-orange)'
    : title === 'Collective' ? 'var(--color-accent-teal)'
    : title === 'LinkedIn'   ? 'var(--color-accent-violet)'
    : 'var(--color-accent-teal)'

  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="card-base group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -3 }}
      viewport={{ once: true }}
      style={{ textDecoration: 'none' }}
    >
      <div className="flex items-center gap-4">
        <div
          className="p-3 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{ background: `color-mix(in srgb, ${iconColor} 15%, transparent)` }}
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              width={24}
              height={24}
              className="object-contain"
            />
          ) : Icon ? (
            <Icon size={24} style={{ color: iconColor }} />
          ) : null}
        </div>
        <div>
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>{title}</p>
          <p className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>{value}</p>
        </div>
      </div>
    </motion.a>
  )
}

export default function Contact() {
  const calendlyUrl = "https://calendly.com/ant-dev-pcjn/30min" 

  const openCalendly = () => {
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F0F7FF 0%, #FFFFFF 50%)' }}>
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl"
          style={{ background: 'var(--color-accent-violet)' }}
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl"
          style={{ background: 'var(--color-accent-blue)' }}
          animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}>
            Travaillons <span style={{ color: 'var(--color-accent-violet)' }}>ensemble</span>
          </h2>
          <motion.div className="flex items-center justify-center gap-2 mb-8">
            <motion.div 
              className="pulse" 
              style={{ width: '12px', height: '12px', background: 'var(--color-accent-green)', borderRadius: '50%' }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p className="text-base" style={{ color: 'var(--color-accent-green)', fontFamily: 'var(--font-body)' }}>
              Disponible pour missions
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Cards — 2 colonnes sur md+, 1 sur mobile */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ContactCard icon={Phone}    title="Téléphone" value="06 45 53 38 62"        href="tel:+33645533862"                             index={0} />
          <ContactCard icon={Linkedin} title="LinkedIn"  value="Antoine PELTIER 👨‍💻"        href="https://www.linkedin.com/in/antoine-peltier72" index={1} />
          <ContactCard imageSrc="/icons/malt.png"       title="Malt"       value="Antoine P." href="https://www.malt.fr/profile/antoinepeltier2"       index={2} />
          <ContactCard imageSrc="/icons/collective.png" title="Collective" value="Antoine PELTIER" href="https://www.collective.work/profile/antoine-peltier"            index={3} />
        </motion.div>

        {/* Calendly Call to Action */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="card-base relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated gradient background */}
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ 
                background: 'radial-gradient(circle at 30% 50%, rgba(108, 99, 255, 0.08), transparent 70%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <div className="relative z-10 text-center p-8 md:p-10">
              <motion.div 
                className="inline-flex items-center justify-center mb-6"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="p-4 rounded-full" style={{ background: 'color-mix(in srgb, var(--color-accent-violet) 15%, transparent)' }}>
                  <Calendar size={40} style={{ color: 'var(--color-accent-violet)' }} />
                </div>
              </motion.div>

              <h3 className="text-3xl font-bold mb-3" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>
                Planifions un <span style={{ color: 'var(--color-accent-violet)' }}>rendez-vous</span>
              </h3>
              
              <p className="text-base mb-6" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
                Discutons de votre projet autour d'un café virtuel. 
                Choisissez le créneau qui vous convient le mieux.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {[
                  { icon: Clock, text: "30 min d'échange" },
                  { icon: CheckCircle, text: "Sans engagement" },
                  { icon: Calendar, text: "100% en ligne" }
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                    style={{ background: 'color-mix(in srgb, var(--color-text-secondary) 5%, transparent)' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <feature.icon size={14} style={{ color: 'var(--color-accent-green)' }} />
                    <span className="text-xs" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={openCalendly}
                className="btn-primary group relative overflow-hidden"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(108, 99, 255, 0.4)',
                    '0 0 0 10px rgba(108, 99, 255, 0)',
                    '0 0 0 0 rgba(108, 99, 255, 0)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="flex items-center gap-2">
                  Réserver un créneau
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <p className="text-xs mt-6" style={{ color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-body)' }}>
                🔒 Prise de rendez-vous sécurisée via Calendly
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}