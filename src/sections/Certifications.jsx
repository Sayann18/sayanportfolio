import { memo } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

const masterCertificateLink =
  "https://www.credly.com/users/sayan-chakraborty.b2e45268/badges/credly";

const certifications = [
  {
    title: "Google Cloud",
    date: "May 2026",
    description:
      "5 Certifications & Skill Badges covering Cloud Computing, Networking, Compute Engine, and Kubernetes.",
    logo: `${import.meta.env.BASE_URL}images/google.png`,
    link:
      "https://www.credly.com/badges/4ece1ca6-d77b-4404-9a5a-7ffe194a27cd/linked_in_profile",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
    date: "Apr 2026",
    description:
      "Industry certification validating foundational knowledge of AI, Machine Learning, Generative AI, and Oracle Cloud Infrastructure.",
    logo: `${import.meta.env.BASE_URL}images/oracle.png`,
    link:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=237C35D944A9312F5125A07D1FF66A8549FB1D16CBD94A92F28E070E39954354",
  },
  {
    title: "Tata Cybersecurity Analyst Job Simulation",
    date: "Apr 2026",
    description:
      "Hands-on experience in cybersecurity, threat analysis, and risk assessment.",
    logo: `${import.meta.env.BASE_URL}images/tata.png`,
    link:
      "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_69ea65088e60d413d531726d_1776971251105_completion_certificate.pdf",
  },
  {
    title: "Deloitte Australia Cyber Job Simulation",
    date: "Apr 2026",
    description:
      "Practical simulation focused on incident response, cyber risk, and security consulting.",
    logo: `${import.meta.env.BASE_URL}images/deloitte.avif`,
    link:
      "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_69ea65088e60d413d531726d_1776969352007_completion_certificate.pdf",
  },
  {
    title: "Basics of Data Analytics – PW",
    date: "Apr 2025",
    description:
      "Foundation in data analytics, visualization, and statistical analysis.",
    logo: `${import.meta.env.BASE_URL}images/pw.png`,
    link:
      "https://cdn.pwskills.com/learn/certificates/fef55c60-82bb-43d2-b9f5-637f3dbfe57e.pdf",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-label reveal">
          Certifications
        </div>

        <div className="mb-12 sm:mb-16 reveal">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold pb-1 text-balance">
              <span className="text-slate-900">
                Professional{" "}
              </span>

              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent inline-block">
                Certifications
              </span>
            </h2>

            <a
              href={masterCertificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-600 transition-all duration-300 hover:scale-110"
              title="View All Certifications"
            >
              <HiOutlineArrowTopRightOnSquare className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-400/30 to-transparent" />

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
          >
            {certifications.map((cert) => (
              <motion.div
  key={cert.title}
  variants={itemVariants}
  className="relative pl-12 sm:pl-16"
>
  <div className="absolute left-3 sm:left-5 top-1.5 w-3.5 h-3.5 rounded-full bg-gray-950 border-2 border-purple-500 flex items-center justify-center">
    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
  </div>

  <a
    href={cert.link}
    target="_blank"
    rel="noopener noreferrer"
    className="glass-card block p-5 sm:p-6 group transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/5 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(168,85,247,0.12)]"
  >
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">

      <div className="flex items-center gap-3 sm:gap-4 flex-1">

        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/95 p-1.5 border border-purple-500/20 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
          <img
            src={cert.logo}
            alt={`${cert.title} logo`}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
            {cert.title}
          </h3>

          <HiOutlineArrowTopRightOnSquare
            className="w-4 h-4 text-purple-500 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
          />
        </div>

      </div>

      {/* Date */}
      <span className="sm:ml-auto text-xs sm:text-sm text-purple-600 font-medium bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 w-fit shrink-0 mt-2 sm:mt-0">
        {cert.date}
      </span>

    </div>

    <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-[3.25rem] sm:pl-[4rem]">
      {cert.description}
    </p>
  </a>
</motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Certifications);