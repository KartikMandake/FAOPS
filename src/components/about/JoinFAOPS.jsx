import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users } from "lucide-react";

export default function JoinFAOPS() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-[#1E3A5F]"></div>

      {/* Animated Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-yellow-300/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-300/20 blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 text-white mb-8">
            <Globe size={20} />
            <span>Global Perinatal Community</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Join the
            <span className="text-[#F7DB07]">
              {" "}FAOPS Network
            </span>
          </h2>

          <p className="mt-8 text-lg text-slate-200 leading-9 max-w-3xl mx-auto">
            Become part of a growing community dedicated to advancing
            maternal and newborn healthcare through research,
            education, collaboration and innovation across Asia and
            Oceania.
          </p>

          {/* Highlights */}

          <div className="grid md:grid-cols-3 gap-6 mt-14">

            {[
              "International Collaboration",
              "Scientific Conferences",
              "Professional Development",
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
              >
                <Users
                  className="mx-auto text-[#F7DB07]"
                  size={34}
                />

                <p className="text-white font-medium mt-4">
                  {item}
                </p>

              </motion.div>

            ))}

          </div>

          {/* Button */}

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: .95,
            }}
            className="mt-14"
          >
            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                gap-3
                px-10
                py-5
                rounded-full
                bg-white
                text-[#344474]
                font-bold
                text-lg
                hover:shadow-2xl
                transition
              "
            >
              Contact FAOPS

              <ArrowRight size={20} />
            </Link>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}