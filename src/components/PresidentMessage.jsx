import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function PresidentMessage() {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-slate-50 mb-1 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-[3px] sm:tracking-[4px] text-[#344474] text-xs sm:text-sm font-semibold">
              MESSAGE FROM THE PRESIDENT
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-2 sm:mt-4 leading-tight">
              Welcome to
              <span className="text-[#344474]"> FAOPS</span>
            </h2>

            <Quote
              size={36}
              className="text-[#344474] mt-5 sm:mt-8 mb-4 sm:mb-5"
            />

            <p className="text-slate-700 leading-relaxed sm:leading-8 mb-4 text-sm sm:text-base">
              <strong>Dear Colleagues, Friends, and Visitors,</strong>
            </p>

            <p className="text-slate-600 leading-relaxed sm:leading-8 mb-4 text-sm sm:text-base">
              Welcome to the official website of the
              <strong> Federation of Asia-Oceania Perinatal Societies (FAOPS)</strong>.
              FAOPS has long served as a vital platform for collaboration among
              perinatal health professionals across our diverse region,
              promoting research, education, and policy advancement in maternal
              and neonatal care.
            </p>

            <p className="text-slate-600 leading-relaxed sm:leading-8 mb-4 text-sm sm:text-base">
              The Asia-Oceania region presents both unique challenges and
              significant opportunities in perinatal medicine. From rapidly
              evolving healthcare systems to disparities in resources and
              outcomes, our mission is to bridge these gaps, facilitate the
              exchange of knowledge, and foster innovations that ultimately
              benefit mothers, infants, and families in all member countries.
            </p>

            <p className="text-slate-600 leading-relaxed sm:leading-8 text-sm sm:text-base">
              As President, I remain committed to strengthening our collective
              voice and expanding FAOPS's presence within the global perinatal
              community. We will continue supporting academic congresses,
              workshops, educational initiatives, and collaborative research to
              improve maternal and newborn health throughout Asia and Oceania.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className="mt-6 sm:mt-10 border-l-4 border-[#F7DB07] pl-4 sm:pl-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#344474]">
                Han-Suk Kim, M.D., Ph.D.
              </h3>

              <p className="text-slate-500 text-xs sm:text-sm">
                Republic of Korea
              </p>

              <p className="text-slate-500 text-xs sm:text-sm">
                President, Federation of Asia-Oceania Perinatal Societies
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end mt-6 lg:mt-0"
          >
            {/* Background Glow */}
            <div className="absolute w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] bg-blue-500/10 blur-3xl rounded-full"></div>

            {/* Borderless image with soft float shadow */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 w-full max-w-xs sm:max-w-md shadow-[0_25px_50px_-12px_rgba(30,58,95,0.35)]"
            >
              <img
                src="/president.webp"
                alt="President Han-Suk Kim"
                className="block w-full h-auto object-cover rounded-lg sm:rounded-none"
              />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute bottom-2 sm:bottom-8 left-2 sm:left-4 bg-white/95 backdrop-blur shadow-xl px-3 sm:px-6 py-2.5 sm:py-5 border border-slate-200 z-20 rounded-lg sm:rounded-none"
            >
              <h3 className="text-base sm:text-xl font-bold text-[#344474]">
                Han-Suk Kim
              </h3>

              <p className="text-slate-500 text-xs sm:text-sm">
                President, FAOPS
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}