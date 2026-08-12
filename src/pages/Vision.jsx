import PageHero from "../components/about/PageHero";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export default function Vision() {
  return (
    <>
      <PageHero title="Vision" breadcrumb="Vision" />

      <section className="py-20 bg-slate-50">

        <div className="max-w-4xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl p-12 text-center"
          >

            <Eye
              className="mx-auto text-[#344474]"
              size={70}
            />

            <h2 className="text-4xl font-bold mt-8 text-[#344474]">
              Our Vision
            </h2>

            <p className="mt-8 text-xl leading-10 text-slate-700">
              To be the leading advocate and knowledge hub for perinatal care
              in the Asian and Oceanian regions, driving advancements,
              promoting collaboration, and ensuring the health and well-being
              of mothers and newborns.
            </p>

          </motion.div>

        </div>

      </section>
    </>
  );
}