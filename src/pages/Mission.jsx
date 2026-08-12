import PageHero from "../components/about/PageHero";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

export default function Mission() {
  return (
    <>
      <PageHero title="Mission" breadcrumb="Mission" />

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="bg-white rounded-[35px] shadow-xl p-12 text-center"
          >

            <div className="w-24 h-24 rounded-full bg-[#344474]/10 flex items-center justify-center mx-auto">
              <Target className="text-[#344474]" size={46} />
            </div>

            <h2 className="text-4xl font-bold text-[#344474] mt-8">
              Our Mission
            </h2>

            <div className="w-24 h-1 bg-[#F7DB07] rounded-full mx-auto mt-5"></div>

            <p className="mt-10 text-lg text-slate-700 leading-10">
              FAOPS is dedicated to advancing perinatal care through excellence
              in education, research, and collaboration. We strive to empower
              healthcare professionals, strengthen regional partnerships, and
              improve maternal, fetal and neonatal health across Asia and
              Oceania.
            </p>

          </motion.div>

        </div>
      </section>
    </>
  );
}