import { memo } from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const About = () => {
  return (
    <section id="about" className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="section-label reveal">
          About Me
        </div>

        <div className="mb-12 sm:mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 pb-1 text-balance">
            <span className="text-slate-900">The </span>
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent inline-block pb-2">Engineer</span>
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 sm:p-10 lg:p-12 w-full"
          >
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg sm:text-xl">
              <p>
                I'm a Computer Science & Engineering undergraduate at{' '}
                <a 
                  href="https://hithaldia.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0645ad] underline underline-offset-2 decoration-1 hover:text-[#0b0080] transition-colors font-medium"
                >
                  Haldia Institute of Technology
                </a>
                , passionate about AI, software engineering, and building secure, scalable applications. I constantly strive to bridge the gap between theoretical concepts and practical implementation through hands-on projects and continuous learning.
              </p>
              <p>
                Currently, I'm exploring AI, advanced algorithms, system design, and real-world problem solving. Beyond technology, I have a strong interest in geopolitics and global affairs, driven by a curiosity to understand how technology shapes the world. My goal is to build impactful solutions while continuously expanding my technical and analytical expertise.
              </p>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  )
}

export default memo(About)