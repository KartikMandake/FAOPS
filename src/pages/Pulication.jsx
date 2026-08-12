import { motion } from "framer-motion";
import { Eye, Download } from "lucide-react";
import PageHero from "../components/about/PageHero";
import publications from "../data/publicationsData";

export default function Publications() {
  return (
    <>
      <PageHero
              title="Publications"
              currentPage="Publications"
            />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#344474]">
              FAOPS Publications
            </h2>

            <div className="w-24 h-1 bg-[#F7DB07] mx-auto rounded-full mt-5 mb-6"></div>

            <p className="max-w-3xl mx-auto text-slate-600 text-lg leading-8">
              Explore FAOPS journals, newsletters and publications that
              promote excellence in maternal, fetal and neonatal healthcare
              across Asia and Oceania.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {publications.map((item, index) => (

              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -10,
                }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100"
              >

                <iframe
                  src={`${item.file}#toolbar=0`}
                  title={item.title}
                  className="w-full h-80"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-[#344474]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-7">
                    {item.description}
                  </p>

                  <div className="flex gap-3 mt-8">

                    <a
                      href={item.file}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 rounded-xl bg-[#344474] text-white flex items-center justify-center gap-2 hover:bg-[#25345c] transition"
                    >
                      <Eye size={18} />
                      View
                    </a>

                    <a
                      href={item.file}
                      download
                      className="flex-1 py-3 rounded-xl border border-[#344474] text-[#344474] flex items-center justify-center gap-2 hover:bg-[#344474] hover:text-white transition"
                    >
                      <Download size={18} />
                      Download
                    </a>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </section>
    </>
  );
}