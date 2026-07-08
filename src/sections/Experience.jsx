import { memo } from 'react'
import { motion } from 'framer-motion'
import { HiCalendar } from 'react-icons/hi2'

const tags = ['AI/ML', 'Python', 'Collaboration', 'Software Engineering']

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const Experience = () => {
  return (
  <section id="experience" className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="section-label reveal">Experience</div>

        <div className="mb-12 sm:mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 pb-1 text-balance">
            <span className="text-slate-900">Work </span>
            <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent inline-block">Experience</span>
          </h2>
        </div>

        <motion.div
          className="glass-card p-6 sm:p-8 lg:p-10 group transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/5 hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              
              <div className="w-16 h-16 rounded-2xl bg-white/40 backdrop-blur-md border-2 border-white/60 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_12px_rgba(0,0,0,0.05)] flex items-center justify-center p-2.5 mb-5 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={`${import.meta.env.BASE_URL}images/flyrank-logo.png`}
                  alt="FlyRank AI"
                  className="w-full h-full object-contain drop-shadow-sm"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <a
                  href="https://flyrank.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flyrank-link"
                >
                  FlyRank AI
                </a>

              <h3 className="text-2xl font-bold text-gray-900 mb-1">AI Intern</h3>
              <div className="flex items-center gap-2 text-gray-500 mb-6">
                <HiCalendar className="w-5 h-5 text-cyan-500" />
                <span className="text-sm font-medium">July 2026 - Present</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-800 dark:text-cyan-100 border border-cyan-500/20 transition-colors duration-300 hover:bg-cyan-500/20 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="relative">
                <svg
                  className="absolute -top-2 -left-2 w-8 h-8 text-cyan-500/20 group-hover:text-cyan-500/30 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 leading-relaxed pl-6 text-base sm:text-lg">
                  Working as an AI Intern, gaining practical exposure to AI workflows, collaborative development, and modern software engineering practices. As a fresher, this experience marks the beginning of my professional journey while I continue expanding my expertise in AI, cybersecurity, and full-stack development.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 opacity-75">
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(Experience)