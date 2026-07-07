import { memo } from 'react'
import { motion } from 'framer-motion'
import { HiBuildingLibrary } from 'react-icons/hi2'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const Education = () => {
  return (
    <section
  id="education"
  className="relative px-4 sm:px-6 lg:px-8 overflow-hidden"
>
      <div className="max-w-7xl mx-auto">
        <div className="section-label reveal">
          Education
        </div>

        <div className="mb-12 sm:mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 pb-1 text-balance">
            <span className="text-slate-900">Academic </span>
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent inline-block pb-2">Journey</span>
          </h2>
        </div>

        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          <div className="absolute left-[19px] sm:left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-slate-500/50 via-slate-400/30 to-transparent" />

          <motion.div
            className="relative pl-12 sm:pl-16"
            variants={itemVariants}
          >
            <div className="absolute left-3 sm:left-5 top-2 w-3.5 h-3.5 rounded-full bg-gray-950 border-2 border-slate-500 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            </div>

            <div className="glass-card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-5">
                    <a href="https://hithaldia.ac.in/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex-shrink-0">
                      <img src="/images/hit.jpg" alt="HIT Logo" className="w-full h-full object-contain" />
                    </a>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Bachelor of Technology</h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-5">
                    <HiBuildingLibrary className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      {/* Added Link Here */}
                      <a 
                        href="https://hithaldia.ac.in/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 hover:underline transition-colors duration-200"
                      >
                        Haldia Institute of Technology
                      </a>
                      {' · Haldia, West Bengal'}
                    </span>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 mb-2">Computer Science & Engineering</p>
                  <p className="text-slate-500 font-medium text-sm sm:text-base mb-4">Specialization: Cyber Security</p>
                  <p className="text-sm sm:text-base text-gray-600">CGPA : <span className="font-semibold text-slate-500">8.58 / 10</span> (Up to 3rd Semester)</p>
                </div>
                <div className="sm:text-right flex-shrink-0">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-500 text-sm font-medium">2024 – 2028</span>
                  <p className="text-sm text-gray-500 mt-2">Pursuing</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="relative pl-12 sm:pl-16 mt-10" variants={itemVariants}>
            <div className="absolute left-3 sm:left-5 top-2 w-3.5 h-3.5 rounded-full bg-gray-950 border-2 border-slate-500 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            </div>
            <div className="glass-card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-5">
                    <a href="https://school.banglarshiksha.gov.in/ws/website/index/19121207805" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex-shrink-0">
                      <img src="/images/school-logo.png" alt="School Logo" className="w-full h-full object-contain" />
                    </a>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Higher Secondary (Class XII)</h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-5">
                    <HiBuildingLibrary className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      {/* Added Link Here */}
                      <a 
                        href="https://school.banglarshiksha.gov.in/ws/website/index/19121207805" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 hover:underline transition-colors duration-200"
                      >
                        Badanganj High School
                      </a>
                      {' · Badanganj, West Bengal'}
                    </span>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 mb-2">Science Stream</p>
                  <p className="text-slate-500 font-medium text-sm sm:text-base mb-4">WBCHSE Board</p>
                  <p className="text-sm sm:text-base text-gray-600">Marks Obtained : <span className="font-semibold text-slate-500">79%</span></p>
                </div>
                <div className="sm:text-right flex-shrink-0">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-500 text-sm font-medium">2022 – 2024</span>
                  <p className="text-sm text-emerald-600 mt-2 font-medium">Completed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="relative pl-12 sm:pl-16 mt-10" variants={itemVariants}>
            <div className="absolute left-3 sm:left-5 top-2 w-3.5 h-3.5 rounded-full bg-gray-950 border-2 border-slate-500 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            </div>
            <div className="glass-card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-5">
                    <a href="https://school.banglarshiksha.gov.in/ws/website/index/19121207805" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex-shrink-0">
                      <img src="/images/school-logo.png" alt="School Logo" className="w-full h-full object-contain" />
                    </a>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Secondary (Class X)</h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-5">
                    <HiBuildingLibrary className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      {/* Added Link Here */}
                      <a 
                        href="https://school.banglarshiksha.gov.in/ws/website/index/19121207805" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 hover:underline transition-colors duration-200"
                      >
                        Badanganj High School
                      </a>
                      {' · Badanganj, West Bengal'}
                    </span>
                  </div>
                  <p className="text-slate-500 font-medium text-sm sm:text-base mb-4">WBBSE Board</p>
                  <p className="text-sm sm:text-base text-gray-600">Marks Obtained : <span className="font-semibold text-slate-500">87.14%</span></p>
                </div>
                <div className="sm:text-right flex-shrink-0">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-500 text-sm font-medium">2022</span>
                  <p className="text-sm text-emerald-600 mt-2 font-medium">Completed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(Education)