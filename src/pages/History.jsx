import PageHero from "../components/about/PageHero";
import { motion } from "framer-motion";

export default function History() {
  return (
    <>
      <PageHero
        title="History"
        breadcrumb="History"
      />

      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-6 md:p-10"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-[#344474] mb-6 md:mb-8">
              History of FAOPS
            </h2>

            <div className="space-y-6 text-slate-700 leading-8 text-lg">

              <p>
                The Federation of Asia and Oceania Perinatal Societies (FAOPS)
                was established in 1980 following the Alma Ata Declaration of
                1978 and the first congress held in Singapore in 1979.
              </p>

              <p>
                Over more than four decades, FAOPS has evolved into a vibrant
                organization bringing together leaders, researchers and experts
                in perinatal medicine throughout Asia and Oceania.
              </p>

              <p>
                Guided by its Constitution and By-Laws, FAOPS continues to
                strengthen scientific collaboration, education, research and
                innovation while promoting excellence in maternal and neonatal
                healthcare.
              </p>

            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}