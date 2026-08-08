import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const mobileNavItems = navItems.filter((item) => item.id !== 'tech-stack')

const Navigation = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const itemClassName = (item) => `nav-item ${
    activeSection === item.id
      ? 'nav-pill-active'
      : 'text-gray-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
  }`

  return (
    <>
      <nav
        className={`portfolio-nav-desktop hidden md:flex ${isScrolled ? 'top-4' : 'top-6'}`}
        aria-label="Primary navigation"
      >
        <div className="portfolio-nav-glass flex items-center gap-1 rounded-full px-3 py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={itemClassName(item)}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <motion.nav
        className="portfolio-nav-mobile md:hidden"
        aria-label="Primary navigation"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="portfolio-nav-glass mobile-nav-grid">
          {mobileNavItems.map((item) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              onPointerUp={(event) => event.currentTarget.blur()}
              className={`${itemClassName(item)} mobile-nav-item`}
              aria-label={item.label}
              aria-current={activeSection === item.id ? 'page' : undefined}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.16, ease: 'easeOut' }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.nav>
    </>
  )
}

export default Navigation
