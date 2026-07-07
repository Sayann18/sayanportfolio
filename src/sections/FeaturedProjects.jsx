import { memo } from 'react'
import { motion } from 'framer-motion'
import { HiRocketLaunch, HiArrowTopRightOnSquare } from 'react-icons/hi2'

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

const FeaturedProjects = () => {
  return (
    <section id="projects" className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="section-label reveal">Projects</div>

        <motion.div
          className="text-center mb-12 sm:mb-16 reveal"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 pb-1 text-balance"
          >
            <span className="text-slate-900">Featured </span>
            <span className="bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent inline-block">Projects</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 sm:p-12 text-center group"
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl 
            bg-amber-500/10 border border-amber-500/20 
            flex items-center justify-center 
            group-hover:bg-amber-500/20 
            group-hover:border-amber-500/40 
            group-hover:shadow-[0_8px_24px_rgba(245,158,11,0.15)] 
            transition-all duration-300">
              <HiRocketLaunch className="w-10 h-10 text-amber-500" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Projects Coming Soon</h3>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-md mx-auto">
              I'm currently building real-world projects. They will be uploaded and available here soon. Stay tuned for exciting updates!
            </p>

            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
              </span>
              <span className="text-sm text-gray-500 font-medium">In Progress</span>
            </div>

            <a
              href="https://github.com/Sayann18"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium 
              bg-slate-500/10 
              border border-slate-500/20 
              text-slate-700 
              dark:text-slate-300 
              backdrop-blur-md 
              transition-all duration-300 
              hover:bg-white 
              dark:hover:bg-slate-100
              hover:text-slate-900 
              hover:border-white/50 
              hover:shadow-[0_4px_12px_rgba(255,255,255,0.2)] 
              hover:-translate-y-1 
              hover:scale-105"
            >
              <HiArrowTopRightOnSquare className="w-4 h-4 transition-colors duration-300 group-hover:!text-slate-900 dark:group-hover:!text-slate-900" />
            <span className="transition-colors duration-300 
              group-hover:text-slate-900"
            >
                View GitHub
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(FeaturedProjects)