import { memo } from "react";

const TechStack = () => {
  const categories = [
    {
      title: 'Languages',
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
      colorClass: 'text-blue-600',
    },
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'React.js', 'Next.js', 'Tailwind CSS'],
      colorClass: 'text-rose-500',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs'],
      colorClass: 'text-emerald-600',
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'MySQL'],
      colorClass: 'text-amber-500',
    },
    {
      title: 'Developer Tools',
      skills: ['Git', 'GitHub', 'Linux', 'VS Code', 'Figma'],
      colorClass: 'text-purple-600',
    },
  ]

  return (
    <section id="tech-stack" className="relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="section-label reveal">Tech Stack</div>

        <div className="mb-12 reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 pb-1">
            <span className="text-slate-900">Tech </span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent inline-block">Stack</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Technologies, languages, frameworks, tools, and platforms I use to build modern, scalable, and secure applications.
          </p>
        </div>

        <div className="space-y-10">
          {categories.map((category, catIndex) => (
            <div key={category.title} className="reveal" style={{ transitionDelay: `${catIndex * 0.1}s` }}>
              <h3 className={`text-sm font-extrabold uppercase tracking-widest mb-4 ${category.colorClass}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <span
                      key={skill}
                      className="tech-chip px-5 py-3 rounded-full text-sm font-medium text-gray-700 cursor-default"
                    >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(TechStack);