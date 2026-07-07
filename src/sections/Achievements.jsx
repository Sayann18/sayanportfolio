import { memo } from 'react'
import { motion } from 'framer-motion'

const achievements = [
  // {
  //   title: 'WBJEE 2024 Merit Admission',
  //   description: 'Secured admission through WBJEE 2024merit list.',
  //   textGradient: 'from-blue-600 to-indigo-600',
  //   glow: 'shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] group-hover:border-blue-200/50',
  // },
  {
    title: 'Tuition Fee Waiver Scholar',
    description: 'Awarded TFW (Tuition Fee Waiver) seat at Haldia Institute of Technology.',
    textGradient: 'from-emerald-500 to-teal-600',
    glow: 'shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] group-hover:border-emerald-200/50',
  },
  {
    title: 'HPF 2025 Scholar',
    description: 'Awarded the Harsh and Payal Hada Foundation Scholarship 2025 through a competitive merit and in-person interview process.',
    textGradient: 'from-purple-600 to-fuchsia-600',
    glow: 'shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] group-hover:border-purple-200/50',
  },
  {
    title: '8.58 CGPA',
    description: 'Maintaining good academic performance.',
    textGradient: 'from-amber-500 to-orange-600',
    glow: 'shadow-[0_0_15px_rgba(245,158,11,0.15)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.35)] group-hover:border-amber-200/50',
  },
  {
    title: 'AI Intern at FlyRank',
    description: 'Professional experience in Communication, collaborative workflows, and modern software engineering practices.',
    textGradient: 'from-cyan-500 to-blue-600',
    glow: 'shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] group-hover:border-cyan-200/50',
  },
  {
    title: 'Selected for Industry Visit – Data Space Academy',
    description: 'Participated in an academic industry visit focused on AI, emerging technologies, and real-world software development practices.',
    textGradient: 'from-rose-500 to-pink-600',
    glow: 'shadow-[0_0_15px_rgba(225,29,72,0.15)] group-hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] group-hover:border-rose-200/50',
  }
]

const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI']

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const Achievements = () => {
  return (
    <section id="achievements" className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="section-label reveal">Achievements</div>

        <div className="mb-12 sm:mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 pb-1 text-balance">
            <span className="text-slate-900">Academic </span>
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent inline-block pb-2">
              Achievements
            </span>
          </h2>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="glass-card p-6 group cursor-default"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start gap-4 sm:gap-5">
                
                <div 
                  className={`relative w-12 h-12 rounded-xl bg-white/80 backdrop-blur-md border border-gray-200/60 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${item.glow}`}
                >
                  <span className={`relative z-10 font-serif text-xl sm:text-2xl font-extrabold tracking-wider bg-gradient-to-br ${item.textGradient} bg-clip-text text-transparent`}>
                    {romanNumerals[index]}
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1.5 text-base sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default memo(Achievements)