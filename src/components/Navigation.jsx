import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";

const Navigation = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
useEffect(() => {
  if (!isMobileMenuOpen) return;

  const handleScroll = () => {
    setIsMobileMenuOpen(false);
  };

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [isMobileMenuOpen]);
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const mobileNavItems = [
  ...navItems,
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
];

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-500
          left-4 md:left-1/2
          md:-translate-x-1/2
          ${isScrolled ? "top-4" : "top-6"}
  `}
>
  <div
    className={`hidden md:flex glass-strong items-center gap-2 rounded-full px-3 py-2 transition-all duration-500 ${
      isScrolled
        ? "shadow-lg shadow-slate-900/5 dark:shadow-black/20"
        : ""
    }`}
  >
    <div className="flex items-center gap-1">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeSection === item.id
              ? "nav-pill-active"
              : "text-gray-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  </div>
  <div className="md:hidden relative">
    <div
      className={`glass-strong rounded-2xl transition-all duration-300 ${
        isScrolled
          ? "shadow-lg shadow-slate-900/5 dark:shadow-black/20"
          : ""
      }`}
      style={{
        padding: "6px",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="
          w-11 h-11
          rounded-full
          flex items-center justify-center
          text-gray-700
          dark:text-gray-300
          transition-all
          duration-500
          ease-[cubic-bezier(.22,1,.36,1)]
          hover:scale-105
          active:scale-90
          "
      >
        <motion.svg
          animate={{
            rotate: isMobileMenuOpen ? 180 : 0,
            scale: isMobileMenuOpen ? 0.92 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 25,
          }}
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </motion.svg>
      </button>
    </div>

    {isMobileMenuOpen && (
      <motion.div
        initial={{
          opacity: 0,
          y: -12,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        exit={{
          opacity: 0,
          y: -12,
        }}

         
        className="absolute left-0 top-full mt-2 min-w-[180px] w-fit glass-strong rounded-2xl p-3 origin-top"
      >
        <div className="flex flex-col gap-2">
          {mobileNavItems.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, x: -12 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      delay: index * 0.05,
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    <button
      onClick={() => scrollToSection(item.id)}
      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
        activeSection === item.id
          ? "nav-pill-active"
          : "text-gray-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
      }`}
    >
      {item.label}
    </button>
  </motion.div>
))}
        </div>
      </motion.div>
    )}
  </div>
</nav>
    </>
  )
}

export default Navigation