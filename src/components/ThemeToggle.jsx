import { memo } from "react";
import { motion } from "framer-motion";
import { HiMoon, HiSun } from "react-icons/hi2";

const smoothSpring = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1,
};

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      role="switch"
      aria-checked={isDarkMode}
      aria-label="Toggle dark mode"
      className="fixed top-6 right-6 sm:top-8 sm:right-8 z-50 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      <div
        className="
          relative
          flex items-center
          w-16 h-8
          p-1
          rounded-full
          transition-all duration-500
          
          /* The Base Glass */
          backdrop-blur-2xl
          backdrop-saturate-200
          
          /* Light Mode */
          bg-gradient-to-tr from-white/40 to-white/70
          border-2 border-white/80
          shadow-[inset_0_2px_10px_rgba(255,255,255,1),0_8px_30px_rgba(31,38,135,0.15)]
          
          /* Dark Mode */
          dark:from-slate-800/60 dark:to-slate-700/80
          dark:border-white/30
          dark:shadow-[inset_0_2px_8px_rgba(255,255,255,0.2),0_8px_30px_rgba(255,255,255,0.15)]
        "
      >
        <motion.span
          className="absolute left-0 w-8 h-full z-20 pointer-events-none flex items-center justify-center"
          animate={{
            opacity: isDarkMode ? 0.65 : 1,
            scale: isDarkMode ? 0.82 : 1,
            color: isDarkMode ? "#fcd34d" : "#f59e0b",
            filter: isDarkMode
              ? "drop-shadow(0 0 2px rgba(252,211,77,0.4))"
              : "drop-shadow(0 0 6px rgba(245,158,11,0.9))",
          }}
          transition={smoothSpring}
        >
          <HiSun className="w-4 h-4" />
        </motion.span>

        <motion.span
          className="absolute right-0 w-8 h-full z-20 pointer-events-none flex items-center justify-center"
          animate={{
            opacity: isDarkMode ? 1 : 0.65,
            scale: isDarkMode ? 1 : 0.82,
            color: isDarkMode ? "#ffffff" : "#475569",
            filter: isDarkMode
              ? "drop-shadow(0 0 6px rgba(255,255,255,0.8))"
              : "drop-shadow(0 0 0px rgba(226,232,240,0))",
          }}
          transition={smoothSpring}
        >
          <HiMoon className="w-4 h-4" />
        </motion.span>

        <motion.div
          className="
            absolute
            w-6 h-6
            rounded-full
            z-10
            border border-white/60
            shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.4)]
          "
          animate={{
            x: isDarkMode ? 32 : 0,
            backgroundColor: isDarkMode
              ? "rgba(15, 23, 42, 1)" 
              : "rgba(255, 255, 255, 1)", 
          }}
          transition={smoothSpring}
        />
      </div>
    </motion.button>
  );
};

export default memo(ThemeToggle);