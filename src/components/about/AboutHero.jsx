import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <section className="relative h-[220px] md:h-[320px] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/banner.webp" // Replace with your banner image
          alt="About FAOPS"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
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
        className="absolute top-10 left-10 w-24 h-24 md:w-44 md:h-44 rounded-full bg-white/10 blur-3xl"
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
        className="absolute bottom-5 right-16 w-32 h-32 md:w-60 md:h-60 rounded-full bg-[#F7DB07]/10 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            {/* <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm tracking-widest uppercase">
              Federation of Asia & Oceania Perinatal Societies
            </span> */}

            <h1 className="mt-2 md:mt-6 text-3xl md:text-5xl lg:text-6xl font-bold text-white">
              About Our Organization
            </h1>

            {/* <p className="mt-5 max-w-2xl text-lg text-slate-200 leading-8">
              Advancing maternal, fetal and neonatal healthcare through
              collaboration, education, innovation and research across Asia and
              Oceania.
            </p> */}

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-4 md:mt-8 text-white text-sm md:text-base">

              <Link
                to="/"
                className="hover:text-[#F7DB07] duration-300"
              >
                Home
              </Link>

              <ChevronRight size={16} />

              <span className="text-[#F7DB07]">
                About Us
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
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,53.3C1120,53,1280,75,1360,85.3L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

    </section>
  );
}