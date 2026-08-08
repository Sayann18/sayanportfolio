// import { memo } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { HiMoon, HiSun } from "react-icons/hi2";

// const smoothTransition = {
//   duration: 0.36,
//   ease: [0.22, 1, 0.36, 1],
// };

// const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
//   const Icon = isDarkMode ? HiSun : HiMoon;
//   const label = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode';

//   return (
//     <motion.button
//       onClick={toggleTheme}
//       initial={{ opacity: 0, y: -8 }}
//       animate={{ opacity: 1, y: 0 }}
//       whileHover={{ scale: 1.04 }}
//       whileTap={{ scale: 0.96 }}
//       transition={smoothTransition}
//       role="switch"
//       aria-checked={isDarkMode}
//       aria-label={label}
//       title={label}
//       className="fixed top-6 right-6 sm:top-8 sm:right-8 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/25 text-slate-700 shadow-[0_6px_20px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.5)] backdrop-blur-xl transition-colors duration-300 hover:bg-white/40 disabled:pointer-events-none dark:border-white/15 dark:bg-slate-900/45 dark:text-slate-100 dark:shadow-[0_6px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)] dark:hover:bg-slate-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
//     >
//       <AnimatePresence mode="wait" initial={false}>
//         <motion.span
//           key={isDarkMode ? 'sun' : 'moon'}
//           initial={{ opacity: 0, rotate: -18, scale: 0.92 }}
//           animate={{ opacity: 1, rotate: 0, scale: 1 }}
//           exit={{ opacity: 0, rotate: 18, scale: 0.92 }}
//           transition={smoothTransition}
//           className="flex items-center justify-center"
//         >
//           <Icon className="h-5 w-5" aria-hidden="true" />
//         </motion.span>
//       </AnimatePresence>
//     </motion.button>
//   );
// };

// export default memo(ThemeToggle);

import { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMoon, HiSun } from "react-icons/hi2";

const smoothTransition = {
  duration: 0.36,
  ease: [0.22, 1, 0.36, 1],
};

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  const Icon = isDarkMode ? HiSun : HiMoon;
  const label = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <motion.button
      onClick={(event) => toggleTheme(event.currentTarget)}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={smoothTransition}
      role="switch"
      aria-checked={isDarkMode}
      aria-label={label}
      title={label}
      className="fixed top-6 right-6 sm:top-8 sm:right-8 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/25 text-slate-700 shadow-[0_6px_20px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.5)] backdrop-blur-xl transition-colors duration-300 hover:bg-white/40 disabled:pointer-events-none dark:border-white/15 dark:bg-slate-900/45 dark:text-slate-100 dark:shadow-[0_6px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)] dark:hover:bg-slate-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDarkMode ? 'sun' : 'moon'}
          initial={{ opacity: 0, rotate: -18, scale: 0.92 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 18, scale: 0.92 }}
          transition={smoothTransition}
          className="flex items-center justify-center"
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

export default memo(ThemeToggle);