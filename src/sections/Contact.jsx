import { useState, useRef, useCallback, memo } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { HiMapPin, HiLink, HiPaperAirplane, HiCheck, HiClipboard, HiExclamationCircle } from 'react-icons/hi2'

const socialLinks = [
  {
    name: 'GitHub',
    logo: `${import.meta.env.BASE_URL}images/github.png`,
    href: 'https://github.com/Sayann18',
    brandStyle: 'hover:shadow-[0_0_20px_rgba(24,23,23,0.3)] hover:-translate-y-1 dark:hover:shadow-[0_0_24px_rgba(255,255,255,0.4)] dark:hover:bg-white/10 dark:hover:border-white/50',
  },
  {
    name: 'LinkedIn',
    logo: `${import.meta.env.BASE_URL}images/linkedin.png`,
    href: 'https://www.linkedin.com/in/chakrabortysayan',
    brandStyle: 'hover:shadow-[0_0_20px_rgba(10,102,194,0.4)] hover:-translate-y-1 dark:hover:shadow-[0_0_24px_rgba(10,102,194,0.5)] dark:hover:bg-blue-500/15 dark:hover:border-blue-500/50',
  },
  {
    name: 'Instagram',
    logo: `${import.meta.env.BASE_URL}images/insta.jpg`,
    href: 'https://www.instagram.com/amiisayan?igsh=MWt0dGh0M2llbnN1bw==',
    brandStyle: 'hover:shadow-[0_0_20px_rgba(228,64,95,0.4)] hover:-translate-y-1 dark:hover:shadow-[0_0_24px_rgba(225,48,108,0.5)] dark:hover:bg-pink-500/15 dark:hover:border-pink-500/50',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
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

const Contact = () => {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (status.type) setStatus({ type: '', message: '' })
  }, [status.type])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' })
      return
    }

    setIsLoading(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Sayan Chakraborty',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again or email me directly.' })
    } finally {
      setIsLoading(false)
    }
  }, [formData])

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText('chakrabortysayan861@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  return (
   <section id="contact" className="relative px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="section-label reveal">Contact</div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 pb-1 text-balance"
            >
              <span className="text-slate-900 dark:text-white">Let's </span>
              <span className="bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-transparent inline-block">Connect</span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-10 sm:mb-12 leading-relaxed max-w-md"
            >
              Have a project in mind or just want to say hi? I'm always open to interesting conversations and opportunities.
            </motion.p>

            <motion.div className="space-y-4" variants={containerVariants}>
              <motion.div variants={itemVariants} className="glass-card p-5 sm:p-6 group transition-all duration-300 hover:border-rose-400/40 hover:bg-rose-500/5 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(225,29,72,0.12)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border-2 border-white/60 dark:border-white/10 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)] flex items-center justify-center p-2.5 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={`${import.meta.env.BASE_URL}images/gmail.jpg`}
                      alt="Gmail"
                      className="w-full h-full object-contain transition-all duration-300 dark:brightness-95 dark:contrast-110 rounded-lg"
                    />
                  </div>
                  <span className="text-sm text-gray-500 font-medium">Email</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <a
                    href="mailto:chakrabortysayan861@gmail.com"
                    className="text-gray-900 dark:text-white font-medium hover:text-rose-500 transition-colors duration-200 text-sm sm:text-base break-all"
                  >
                    chakrabortysayan861@gmail.com
                  </a>
                  <button
                    onClick={copyEmail}
                    className="p-2.5 rounded-xl bg-slate-500/10 border border-slate-500/20 text-slate-500 hover:bg-rose-500/10 hover:border-rose-500/30 hover:text-rose-500 transition-all duration-200 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/50"
                    title="Copy email"
                  >
                    {copied ? <HiCheck className="w-4 h-4" /> : <HiClipboard className="w-4 h-4" />}
                  </button>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="glass-card p-5 sm:p-6 group transition-all duration-300 hover:border-rose-400/40 hover:bg-rose-500/5 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(225,29,72,0.12)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform duration-300">
                    <HiMapPin className="w-6 h-6" />
                  </div>
                  <span className="text-sm text-gray-500 font-medium">Location</span>
                </div>
                <p className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">Haldia, West Bengal, India</p>
              </motion.div>

              <motion.div variants={itemVariants} className="glass-card p-5 sm:p-6 group transition-all duration-300 hover:border-rose-400/40 hover:bg-rose-500/5 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(225,29,72,0.12)]">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform duration-300">
                    <HiLink className="w-6 h-6" />
                  </div>
                  <span className="text-sm text-gray-500 font-medium">Social Links</span>
                </div>
                
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center p-3 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/50 bg-white/40 backdrop-blur-md border-2 border-white/60 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_12px_rgba(0,0,0,0.05)] dark:bg-transparent dark:border-transparent dark:shadow-none dark:backdrop-blur-none ${social.brandStyle}`}
                    >
                      <img 
                        src={social.logo} 
                        alt={social.name} 
                        className="w-full h-full object-contain drop-shadow-sm" 
                      />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="glass-card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm text-gray-500 mb-2">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm text-gray-500 mb-2">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm text-gray-500 mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input resize-none"
                    required
                    disabled={isLoading}
                    maxLength={500}
                  />
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formData.message.length}/500
                  </div>
                </div>

                {status.message && (
                  <div
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm ${
                      status.type === 'success'
                        ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-600'
                        : 'bg-red-500/10 border border-red-500/20 text-red-600'
                    }`}
                    role="alert"
                  >
                    {status.type === 'success' ? (
                      <HiCheck className="w-4 h-4 flex-shrink-0" />
                    ) : (
                      <HiExclamationCircle className="w-4 h-4 flex-shrink-0" />
                    )}
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 rounded-xl text-white font-medium bg-gradient-to-r from-rose-600 to-rose-500 border border-rose-400/20 shadow-[0_4px_14px_rgba(225,29,72,0.25)] hover:shadow-[0_6px_20px_rgba(225,29,72,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default memo(Contact)