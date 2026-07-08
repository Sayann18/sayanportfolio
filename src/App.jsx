// import React, { useEffect, useState } from 'react'
// import Lenis from "lenis";
// import Navigation from './components/Navigation'
// import ThemeToggle from './components/ThemeToggle'
// import Hero from './sections/Hero'
// import About from './sections/About'
// import Education from './sections/Education'
// import TechStack from './sections/TechStack'
// import FeaturedProjects from './sections/FeaturedProjects'
// import Experience from './sections/Experience'
// import Achievements from './sections/Achievements'
// import Certifications from './sections/Certifications'
// import Contact from './sections/Contact'
// import Footer from './components/Footer'

// function App() {
//   const [activeSection, setActiveSection] = useState('home')
//   const [showBackToTop, setShowBackToTop] = useState(false)

//   const [isDarkMode, setIsDarkMode] = useState(false)

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme')
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

//     if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
//       setIsDarkMode(true)
//       document.documentElement.classList.add('dark')
//     } else {
//       setIsDarkMode(false)
//       document.documentElement.classList.remove('dark')
//     }
//   }, [])

//   const toggleTheme = () => {
//     if (isDarkMode) {
//       document.documentElement.classList.remove('dark')
//       localStorage.setItem('theme', 'light')
//       setIsDarkMode(false)
//     } else {
//       document.documentElement.classList.add('dark')
//       localStorage.setItem('theme', 'dark')
//       setIsDarkMode(true)
//     }
//   }

//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1,
//       smoothWheel: true,
//       wheelMultiplier: 1,
//       touchMultiplier: 1,
//       infinite: false,
//       lerp: 0.08,
//     })

//     let rafId
//     function raf(time) {
//       lenis.raf(time)
//       rafId = requestAnimationFrame(raf)
//     }
//     rafId = requestAnimationFrame(raf)

//     return () => {
//       cancelAnimationFrame(rafId)
//       lenis.destroy()
//     }
//   }, [])

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'education', 'tech-stack', 'projects', 'experience', 'achievements', 'certifications', 'contact']
//       const scrollPosition = window.scrollY + 200

//       if (window.scrollY > 400) {
//         setShowBackToTop(true)
//       } else {
//         setShowBackToTop(false)
//       }

//       for (const section of sections) {
//         const element = document.getElementById(section)
//         if (element) {
//           const { offsetTop, offsetHeight } = element
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section)
//             break
//           }
//         }
//       }
//     }

//     window.addEventListener('scroll', handleScroll, { passive: true })
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('visible')
//           }
//         })
//       },
//       { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
//     )

//     const revealElements = document.querySelectorAll('.reveal')
//     revealElements.forEach((el) => observer.observe(el))

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <div className="relative min-h-screen bg-transparent transition-colors duration-500">

//       <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

//       <Navigation activeSection={activeSection} />

//       <main className="flex flex-col gap-8 sm:gap-12 md:gap-16">
//         <Hero />
//         <About />
//         <Education />
//         <TechStack />
//         <FeaturedProjects />
//         <Experience />
//         <Achievements />
//         <Certifications />
//         <Contact />
//       </main>
//       <Footer />

//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         className={`fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50 flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-[0_8px_25px_rgba(37,99,235,0.4)] hover:bg-blue-700 hover:shadow-[0_8px_30px_rgba(29,78,216,0.6)] hover:-translate-y-1 transition-all duration-500 focus:outline-none ${
//           showBackToTop
//             ? 'opacity-100 translate-y-0 pointer-events-auto'
//             : 'opacity-0 translate-y-10 pointer-events-none'
//         }`}
//         aria-label="Back to top"
//       >
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
//         </svg>
//       </button>
//     </div>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react'
import Lenis from "lenis";
import Navigation from './components/Navigation'
import ThemeToggle from './components/ThemeToggle'
import Hero from './sections/Hero'
import About from './sections/About'
import Education from './sections/Education'
import TechStack from './sections/TechStack'
import FeaturedProjects from './sections/FeaturedProjects'
import Experience from './sections/Experience'
import Achievements from './sections/Achievements'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showBackToTop, setShowBackToTop] = useState(false)

  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDarkMode(true)
    }
  }

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      infinite: false,
      lerp: 0.08,
    })

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'tech-stack', 'projects', 'experience', 'achievements', 'certifications', 'contact']
      const scrollPosition = window.scrollY + 200

      if (window.scrollY > 400) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen bg-transparent transition-colors duration-500">

      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <Navigation activeSection={activeSection} />

      <main className="flex flex-col gap-8 sm:gap-12 md:gap-16">
        <Hero />
        <About />
        <Education />
        <TechStack />
        <FeaturedProjects />
        <Experience />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50 flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-[0_8px_25px_rgba(37,99,235,0.4)] hover:bg-blue-700 hover:shadow-[0_8px_30px_rgba(29,78,216,0.6)] hover:-translate-y-1 transition-all duration-500 focus:outline-none ${
          showBackToTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  )
}

export default App