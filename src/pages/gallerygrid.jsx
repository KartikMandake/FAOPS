import { motion } from "framer-motion";
import { Images, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/about/PageHero";

export default function gallerygrid() {
  const albums = [
    {
      id: 1,
      title: "Purple Lights @ KKH",
      image: "/gallery/Purple-lights-@-KKH-rpku3gra1f1opxxigss2fu5q94izp3ojets8uhm1s8.webp",
      slug: "purple-lights-kkh",
    },
    {
      id: 2,
      title: "FAOPS - 2022",
      image: "/gallery/faops2022.webp",
      slug: "faops-2022",
    },
    {
      id: 3,
      title: "Perinatal Society of Cambodia",
      image: "/gallery/cambodia.webp",
      slug: "perinatal-society-cambodia",
    },
    {
      id: 4,
      title: "FAOPS - 2023",
      image: "/gallery/faops2023.webp",
      slug: "faops-2023",
    },
    {
      id: 5,
      title: "FAOPS - 2024",
      image: "/gallery/faops2024.webp",
      slug: "faops-2024",
    },
    {
      id: 6,
      title: "FAOPS - 2025",
      image: "/gallery/faops2025.webp",
      slug: "faops-2025",
    },
  ];

  return (
    <>
      <PageHero title="Gallery" breadcrumb="Home" />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="uppercase tracking-[5px] text-[#344474] font-semibold">
              FAOPS Memories
            </span>

            <h2 className="text-5xl font-bold text-[#344474] mt-4">
              Gallery Albums
            </h2>

            <div className="w-24 h-1 bg-[#F7DB07] rounded-full mx-auto my-6"></div>

            <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-8">
              Explore memorable moments from FAOPS congresses,
              conferences, workshops and international collaborations
              across Asia and Oceania.
            </p>
          </motion.div>

          {/* Album Grid */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {albums.map((album, index) => (

              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >

                <Link
                  to={`/gallery/${album.slug}`}
                  className="group block relative h-[320px] rounded-[30px] overflow-hidden shadow-xl"
                >

                  {/* Background */}

                  <img
                    src={album.image}
                    alt={album.title}
                    className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d2951]/95 via-[#344474]/70 to-transparent"></div>

                  {/* Decorative Circle */}

                  <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#F7DB07]/20 rounded-full blur-2xl"></div>

                  {/* Content */}

                  <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">

                    <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-lg flex items-center justify-center mb-6 border border-white/20">

                      <Images
                        size={34}
                        className="text-[#F7DB07]"
                      />

                    </div>

                    <h3 className="text-3xl font-bold leading-snug">
                      {album.title}
                    </h3>

                    <div className="mt-6 flex items-center text-[#F7DB07] font-semibold group-hover:translate-x-2 transition">

                      View Album

                      <ArrowRight
                        size={18}
                        className="ml-2"
                      />

                    </div>

                  </div>

                </Link>

              </motion.div>

            ))}

          </div>

        </div>
      </section>
    </>
  );
}