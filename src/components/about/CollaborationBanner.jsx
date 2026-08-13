import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CollaborationBanner() {
  return (
    <section className="relative py-10 overflow-hidden">

      {/* Background Image */}
      <img
        src="/ab-bg-discover.webp"   // Replace with your image
        alt="Collaboration"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#344474]/80"></div>

      {/* Floating Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#F7DB07]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="uppercase tracking-[3px] sm:tracking-[5px] text-[#F7DB07] font-semibold text-xs sm:text-sm"
        >
          Our Commitment
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .3, duration: .7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-slate-200 text-sm sm:text-lg leading-relaxed sm:leading-8 mt-4 sm:mt-8"
        >
          FOSTER COLLABORATION AND KNOWLEDGE EXCHANGE AMONG PERINATAL HEALTHCARE PROFESSIONALS AND SOCIETIES.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .6 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          {/* <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#F7DB07] text-[#344474] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Get Involved
            <ArrowRight size={20} />
          </Link> */}
        </motion.div>

      </div>

    </section>
  );
}