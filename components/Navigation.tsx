'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsOpen(false)
  }

  const navLinks = [
    { label: 'À propos', id: 'about' },
    { label: 'Compétences', id: 'skills' },
    { label: 'Expériences', id: 'experiences' },
    { label: 'Formation', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--color-separator)' : 'none',
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Photo */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isScrolled ? (
                <motion.div
                  key="photo"
                  initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 10, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500"
                >
                  <Image
                    src="/antoine-peltier.png"
                    alt="Antoine PELTIER"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="logo"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-bold"
                  style={{ 
                    background: 'linear-gradient(135deg, #6C63FF 0%, #3B82F6 100%)', 
                    backgroundClip: 'text', 
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent', 
                    fontFamily: 'var(--font-display)', 
                    fontWeight: 700 
                  }}
                >
                  PORTFOLIO
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Nom visible sur desktop ET mobile quand on scroll */}
            {isScrolled && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-base font-bold block" // Changé: hidden sm:block → block
                style={{ 
                  background: 'linear-gradient(135deg, #6C63FF 0%, #3B82F6 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'var(--font-display)',
                }}
              >
                Antoine PELTIER
              </motion.span>
            )}
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium transition-colors"
                style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
                whileHover={{ color: 'var(--color-accent-violet)' }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <motion.a
            href="/CV-Antoine-PELTIER.pdf"
            download
            className="btn-primary hidden md:flex items-center gap-2 text-sm py-2 px-5"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={16} />
            Télécharger le CV
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: 'var(--color-text-primary)' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              style={{ background: 'var(--color-bg-secondary)', borderBottom: '1px solid var(--color-separator)' }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-4">
                {/* Supprimé la section en double avec photo + nom */}
                {navLinks.map((link) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left px-4 py-2 rounded transition-colors"
                    style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)' }}
                    whileHover={{ x: 4, color: 'var(--color-accent-blue)' }}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.a
                  href="/CV-Antoine-PELTIER.pdf"
                  download
                  className="btn-primary flex items-center justify-center gap-2 text-sm w-full"
                  whileHover={{ scale: 1.02 }}
                >
                  <Download size={16} />
                  Télécharger le CV
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}