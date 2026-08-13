import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageHero({
  title,
  breadcrumb = "Home",
  currentPage,
  background = "/banner.webp",
}) {
  return (
    <section className="relative h-[200px] sm:h-[260px] md:h-[320px] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={background}
          alt={title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#1c2748]/90 via-[#344474]/70 to-[#344474]/60" />
      </div>

      {/* Floating Shapes */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
        }}
        className="absolute top-10 left-10 w-24 h-24 md:w-44 md:h-44 rounded-full bg-white/10 blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute bottom-5 right-16 w-32 h-32 md:w-60 md:h-60 rounded-full bg-[#F7DB07]/10 blur-3xl pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="mt-2 md:mt-6 text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white break-words">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-3 md:mt-8 text-white text-xs sm:text-sm md:text-base">

              <Link
                to="/"
                className="hover:text-[#F7DB07] duration-300 shrink-0"
              >
                {breadcrumb}
              </Link>

              <ChevronRight size={14} className="shrink-0" />

              <span className="text-[#F7DB07] break-words">
                {currentPage || title}
              </span>

            </div>

          </motion.div>

        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute -bottom-1 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          className="w-full fill-white"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,53.3C1120,53,1280,75,1360,85.3L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>

    </section>
  );
}