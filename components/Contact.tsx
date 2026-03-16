'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Linkedin, Send } from 'lucide-react'
import { useState } from 'react'

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
    : title === 'Email'   ? 'var(--color-accent-green)'
    : title === 'Malt'    ? 'var(--color-accent-orange)'
    : 'var(--color-accent-teal)'

  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="card-base"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -3 }}
      viewport={{ once: true }}
      style={{ textDecoration: 'none' }}
    >
      <div className="flex items-center gap-4">
        <div
          className="p-3 rounded-lg flex items-center justify-center"
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
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
    } finally {
      setLoading(false)
    }
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
            <motion.div className="pulse" style={{ width: '12px', height: '12px', background: 'var(--color-accent-green)', borderRadius: '50%' }} />
            <p className="text-base" style={{ color: 'var(--color-accent-green)', fontFamily: 'var(--font-body)' }}>
              Disponible pour missions
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Cards — 3 colonnes sur md+, 2 sur sm, 1 sur mobile */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ContactCard icon={Phone}    title="Téléphone" value="06 45 53 38 62"        href="tel:+33645533862"                             index={0} />
          <ContactCard icon={Mail}     title="Email"     value="antoine-p@hotmail.com"  href="mailto:antoine-p@hotmail.com"                 index={1} />
          <ContactCard icon={Linkedin} title="LinkedIn"  value="Antoine PELTIER 👨‍💻"        href="https://www.linkedin.com/in/antoine-peltier72" index={2} />
          <ContactCard imageSrc="/icons/malt.png"       title="Malt"       value="Antoine P." href="https://www.malt.fr/profile/antoinepeltier2"       index={3} />
          <ContactCard imageSrc="/icons/collective.png" title="Collective" value="Antoine PELTIER" href="https://www.collective.work/profile/antoine-peltier"            index={4} />
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="card-base max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>
            Envoyez-moi un message
          </h3>

          {submitted ? (
            <motion.div
              className="p-4 rounded-xl text-center text-sm"
              style={{ background: 'rgba(48, 209, 88, 0.10)', border: '0.5px solid rgba(48, 209, 88, 0.3)', color: 'var(--color-accent-green)', fontFamily: 'var(--font-body)' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              ✓ Message envoyé — je vous répondrai au plus vite.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>Nom</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>Message</label>
                <textarea
                  name="message"
                  placeholder="Décrivez votre projet ou votre besoin…"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full"
                  style={{ fontFamily: 'var(--font-body)', resize: 'vertical' }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Send size={16} strokeWidth={1.5} />
                {loading ? 'Envoi en cours…' : 'Envoyer le message'}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}