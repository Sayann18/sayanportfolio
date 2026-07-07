import { memo } from "react";

const Footer = () => {
  return (
    <footer className="relative py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-100/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Sayan Chakraborty. All Rights Reserved.
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last Updated :{" "}
          <span className="font-medium text-gray-700 dark:text-gray-200">
            07 Jul 2026
          </span>
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);