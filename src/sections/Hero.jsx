// import { memo, useCallback, useEffect, useRef, useState } from "react";
// import {
//   motion,
//   useReducedMotion,
//   useScroll,
//   useTransform,
//   useMotionValue,
//   useMotionTemplate
// } from "framer-motion";

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//       delayChildren: 0.15,
//     },
//   },
// };

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: [0.25, 0.46, 0.45, 0.94],
//     },
//   },
// };

// const imageVariants = {
//   hidden: {
//     opacity: 0,
//     scale: 0.92,
//     y: 20,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: {
//       duration: 0.9,
//       delay: 0.25,
//       ease: [0.25, 0.46, 0.45, 0.94],
//     },
//   },
// };

// const Hero = () => {
//   const prefersReducedMotion = useReducedMotion();

//   const { scrollY } = useScroll();
//   const imageX = useTransform(scrollY, [0, 500], [0, -40]);
//   const imageScale = useTransform(scrollY, [0, 500], [1, 0.96]);
//   const imageOpacity = useTransform(scrollY, [0, 500], [1, 0.85]);

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const handleMouseMove = useCallback((e) => {
//     const { currentTarget, clientX, clientY } = e;
//     const { left, top } = currentTarget.getBoundingClientRect();
//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);
//   }, [mouseX, mouseY]);

//   const [imgLoaded, setImgLoaded] = useState(false);
//   const imgRef = useRef(null);

//   useEffect(() => {
//     const img = new Image();
//     img.src = "/images/profile-pic.jpeg";
//     img.onload = () => setImgLoaded(true);
//     img.onerror = () => setImgLoaded(false);
//   }, []);

//   const scrollToSection = useCallback((id) => {
//     const element = document.getElementById(id);
//     if (!element) return;
    
//     const navHeight = 80;
//     const top = element.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    
//     window.scrollTo({
//       top,
//       behavior: "smooth",
//     });
//   }, []);

//   const handleResumeClick = useCallback(() => {
//     const link = document.createElement("a");
//     link.href = "/images/Resume.pdf";
//     link.download = "Sayan_Chakraborty_Resume.pdf";
//     link.target = "_blank";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }, []);

//   return (
//     <section
//   id="home"
//   onMouseMove={handleMouseMove}
//   className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 overflow-hidden"
// >
//       <div className="relative z-10 max-w-7xl mx-auto w-full">
//         <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
//           <motion.div
//             className="text-center lg:text-left order-2 lg:order-1"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >

//             <motion.h1
//               variants={itemVariants}
//               className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-bold mb-4 sm:mb-5 tracking-tight leading-[1.1]"
//             >
//               <span className="text-gray-900">Hi, I'm </span>
//               <br />
//               <span className="gradient-blue">Sayan</span>
//               <br />
//               <span className="gradient-blue pb-2 inline-block">Chakraborty</span>
//             </motion.h1>
            
//             <motion.p
//               variants={itemVariants}
//               className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium mb-4"
//             >
//               Cyber Security Learner
//             </motion.p>
//             <motion.p
//               variants={itemVariants}
//               className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10"
//             >
//               A passionate undergraduate at{" "}
//               <span className="font-medium text-gray-700">
//                 Haldia Institute of Technology
//               </span>
//               , specializing in Cyber Security, Full Stack Development and Artificial Intelligence.
//             </motion.p>
            
//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start mb-10"
//             >
//               {/* Primary Button - Gradient & Vibrant Glow */}
//               <button
//                 onClick={handleResumeClick}
//                 className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.35)] hover:shadow-[0_0_30px_rgba(79,70,229,0.55)] hover:-translate-y-1 overflow-hidden"
//               >
//                 <svg
//                   className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                   />
//                 </svg>
//                 <span className="relative z-10">View Resume</span>
//                 {/* Inner hover flash effect */}
//                 <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </button>

//               {/* Secondary Button 1 - Crisp Glass & Soft Glow */}
//               <button
//                 onClick={() => scrollToSection("contact")}
//                 className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold text-gray-800 transition-all duration-300 bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-[0_0_15px_rgba(226,232,240,0.8)] hover:shadow-[0_0_25px_rgba(148,163,184,0.4)] hover:-translate-y-1"
//               >
//                 <svg
//                   className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 text-blue-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//                 <span>Contact Me</span>
//               </button>

//               {/* Secondary Button 2 - Crisp Glass & Soft Glow */}
//               <button
//                 onClick={() => scrollToSection("projects")}
//                 className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold text-gray-800 transition-all duration-300 bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-[0_0_15px_rgba(226,232,240,0.8)] hover:shadow-[0_0_25px_rgba(148,163,184,0.4)] hover:-translate-y-1"
//               >
//                 <svg
//                   className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 text-blue-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
//                   />
//                 </svg>
//                 <span>Explore Portfolio</span>
//               </button>
//             </motion.div>

//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col lg:flex-row items-center lg:items-center gap-5 mb-8 sm:mb-10"
//             >
//               <div className="hero-brand-band group">
//                 <span className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">
//                   Intern @
//                 </span>
//                 <img
//                   src="/images/flyrank-logo.png"
//                   alt="FlyRank AI Logo"
//                   className="w-6 h-6 rounded-md object-contain"
//                   loading="lazy"
//                   decoding="async"
//                 />
//                 <a
//                   href="https://flyrank.ai/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flyrank-link"
//                 >
//                   FlyRank AI
//                 </a>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* ── PROFILE PICTURE SECTION ── */}
//           <motion.div
//             className="flex justify-center lg:justify-end order-1 lg:order-2"
//             variants={imageVariants}
//             initial="hidden"
//             animate="visible"
//             style={{ x: imageX, scale: imageScale, opacity: imageOpacity }}
//           >
//             {/* Simple, professional hover scale */}
//             <motion.div
//               className="relative"
//               whileHover={!prefersReducedMotion ? { scale: 1.03 } : {}}
//               transition={{ duration: 0.4, ease: "easeOut" }}
//             >
//               {/* Perfect Edge Glow Effect */}
//               <div
//                 className="absolute inset-0 rounded-full pointer-events-none"
//                 style={{
//                   boxShadow: "0 0 35px 2px rgba(99, 102, 241, 0.15)",
//                   transform: "translateZ(0)",
//                 }}
//               />

//               <div
//                 className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden"
//                 style={{
//                   border: "2px solid rgba(255, 255, 255, 0.6)",
//                   boxShadow: "0 15px 35px -10px rgba(0,0,0,0.1), inset 0 0 20px rgba(255,255,255,0.4)",
//                   transform: "translateZ(0)",
//                 }}
//               >
//                 <img
//                   ref={imgRef}
//                   src="/images/profile-pic.jpeg"
//                   alt="Sayan Chakraborty - Cyber Security & Full Stack Developer"
//                   className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
//                     imgLoaded ? "opacity-100" : "opacity-0"
//                   }`}
//                   loading="eager"
//                   decoding="async"
//                   fetchPriority="high"
//                   onLoad={() => setImgLoaded(true)}
//                   onError={(e) => {
//                     e.target.style.display = "none";
//                     const fallback = e.target.nextElementSibling;
//                     if (fallback) fallback.style.display = "flex";
//                   }}
//                 />

//                 <div
//                   className="hidden absolute inset-0 bg-gradient-to-br from-slate-900/40 to-slate-800/20 items-center justify-center"
//                   aria-hidden="true"
//                 >
//                   <span className="text-5xl sm:text-6xl font-bold text-slate-400/40">
//                     SC
//                   </span>
//                 </div>
//               </div>

//               {/* Internship Badge */}
//               <div
//                 className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full flex items-center gap-2.5 whitespace-nowrap"
//                 style={{
//                   background: "rgba(255, 255, 255, 0.65)",
//                   backdropFilter: "blur(16px)",
//                   WebkitBackdropFilter: "blur(16px)",
//                   border: "1px solid rgba(255, 255, 255, 0.8)",
//                   boxShadow: "0 8px 24px -8px rgba(0, 0, 0, 0.12)",
//                   transform: "translateZ(0)",
//                 }}
//               >
//                 <span className="relative flex h-2.5 w-2.5">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
//                   <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
//                 </span>
//                 <span className="text-xs sm:text-sm text-gray-800 font-medium tracking-wide">
//                   Available for Internships
//                 </span>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default memo(Hero);



import { memo, useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate
} from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.25,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const { scrollY } = useScroll();
  const imageX = useTransform(scrollY, [0, 500], [0, -40]);
  const imageScale = useTransform(scrollY, [0, 500], [1, 0.96]);
  const imageOpacity = useTransform(scrollY, [0, 500], [1, 0.85]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback((e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }, [mouseX, mouseY]);

  const [imgLoaded, setImgLoaded] = useState(false);
  const imgRef = useRef(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
  const updateTheme = () => {
    setIsDark(document.documentElement.classList.contains("dark"));
  };

  updateTheme();

  const observer = new MutationObserver(updateTheme);

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  return () => observer.disconnect();
}, []);

  useEffect(() => {
  const img = new Image();
  img.src = isDark
    ? "/images/profile-dark.jpeg"
    : "/images/profile-pic.jpeg";

  img.onload = () => setImgLoaded(true);
  img.onerror = () => setImgLoaded(false);
}, [isDark]);
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (!element) return;
    
    const navHeight = 80;
    const top = element.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }, []);

  const handleResumeClick = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/images/Resume.pdf";
    link.download = "Sayan_Chakraborty_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <section
  id="home"
  onMouseMove={handleMouseMove}
  className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 overflow-hidden"
>
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-bold mb-4 sm:mb-5 tracking-tight leading-[1.1]"
            >
              <span className="text-gray-900">Hi, I'm </span>
              <br />
              <span className="gradient-blue">Sayan</span>
              <br />
              <span className="gradient-blue pb-2 inline-block">Chakraborty</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium mb-4"
            >
              Computer Science Undergraduate
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10"
            >
              Studying at{" "}
              <a
                href="https://hithaldia.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-4 decoration-blue-500 dark:decoration-blue-400"
              >
                Haldia Institute of Technology
              </a>
              , specializing in Cyber Security.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start mb-10"
            >
              <button
                onClick={handleResumeClick}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:px-8 sm:py-3.5 
                rounded-full text-sm sm:text-base font-semibold text-white 
                transition-all duration-300 
                bg-gradient-to-r from-blue-600 to-indigo-600 
                shadow-[0_0_20px_rgba(79,70,229,0.35)] 
                hover:shadow-[0_0_30px_rgba(79,70,229,0.55)] 
                hover:-translate-y-1 overflow-hidden"
              >
                <svg
                  className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="relative z-10">View Resume</span>
                <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5
                rounded-full text-sm sm:text-base 
                font-semibold text-gray-800 
                transition-all duration-300 
                bg-white/90 backdrop-blur-md 
                border border-gray-200/80 
                shadow-[0_6px_16px_rgba(255,255,255,0.08)]
                hover:shadow-[0_8px_22px_rgba(255,255,255,0.12)] 
                hover:-translate-y-1"
              >
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Contact Me</span>
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 
                rounded-full text-sm sm:text-base
                font-semibold text-gray-800
                transition-all duration-300
                bg-white/90 backdrop-blur-md border 
                border-gray-200/80 
                shadow-[0_0_8px_rgba(226,232,240,0.25)] 
                hover:shadow-[0_0_14px_rgba(148,163,184,0.18)] 
                hover:-translate-y-1"
              >
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <span>Explore Portfolio</span>
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col lg:flex-row items-center lg:items-center gap-5 mb-8 sm:mb-10"
            >
              <div className="hero-brand-band group">
                <span className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">
                  Intern @
                </span>
                <img
                  src="/images/flyrank-logo.png"
                  alt="FlyRank AI Logo"
                  className="w-6 h-6 rounded-md object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <a
                  href="https://flyrank.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flyrank-link"
                >
                  FlyRank AI
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            style={{ x: imageX, scale: imageScale, opacity: imageOpacity }}
          >
            <motion.div
              className="relative"
              whileHover={!prefersReducedMotion ? { scale: 1.03 } : {}}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  boxShadow: "0 0 35px 2px rgba(99, 102, 241, 0.15)",
                  transform: "translateZ(0)",
                }}
              />

              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden"
                style={{
                  border: "2px solid rgba(255, 255, 255, 0.6)",
                  boxShadow: "0 15px 35px -10px rgba(0,0,0,0.1), inset 0 0 20px rgba(255,255,255,0.4)",
                  transform: "translateZ(0)",
                }}
              >
                <img
                  ref={imgRef}
                  src={
                    isDark
                      ? "/images/profile-dark.jpeg"
                      : "/images/profile-pic.jpeg"
                  }
                  alt="Sayan Chakraborty - Cyber Security & Full Stack Developer"
                  className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
                    imgLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  onLoad={() => setImgLoaded(true)}
                  onError={(e) => {
                    e.target.style.display = "none";
                    const fallback = e.target.nextElementSibling;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />

                <div
                  className="hidden absolute inset-0 bg-gradient-to-br from-slate-900/40 to-slate-800/20 items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="text-5xl sm:text-6xl font-bold text-slate-400/40">
                    SC
                  </span>
                </div>
              </div>

              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full flex items-center gap-2.5 whitespace-nowrap"
                style={{
                  background: isDark
                    ? "rgba(15,23,42,.75)"
                    : "rgba(255,255,255,.65)",

                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",

                  border: isDark
                    ? "1px solid rgba(255,255,255,.12)"
                    : "1px solid rgba(255,255,255,.8)",

                  boxShadow: isDark
                    ? "0 8px 24px rgba(0,0,0,.45)"
                    : "0 8px 24px -8px rgba(0,0,0,.12)",

                  transform: "translateZ(0)",
                }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span
                  className="text-xs sm:text-sm font-medium tracking-wide"
                  style={{
                    color: isDark ? "#f8fafc" : "#1f2937",
                  }}
                >
                  Open to Opportunities
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);