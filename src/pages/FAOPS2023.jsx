import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  MapPin,
} from "lucide-react";
import PageHero from "../components/about/PageHero";
import GalleryLightbox from "../components/gallery/GalleryLightbox";

export default function faops2023() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const galleryImages = [
    {
      image: "/gallery/faops-1.webp",
    },
     {
      image: "/gallery/faops-2.webp",
    },
     {
      image: "/gallery/DSC0670.webp",
    },
    {
      image: "/gallery/DSC1052-1536x1024.webp",
    },
    {
      image: "/gallery/DSC0657.webp",
    },
    {
      image: "/gallery/DSC1131.webp",
    },
    {
      image: "/gallery/DSC1260.webp",
    },
    {
      image: "/gallery/DSC1155.webp",
    },
    {
      image: "/gallery/DSC1585.webp",
    },
    {
      image: "/gallery/DSC1596.webp",
    },
    {
      image: "/gallery/DSC1076.webp",
    },
    {
      image: "/gallery/DSC1450.webp",
    },

    {
      image: "/gallery/DSC1610.webp",
    },
    {
      image: "/gallery/DSC1077.webp",
    },
    {
      image: "/gallery/DSC1086.webp",
    },
    {
      image: "/gallery/DSC1097.webp",
    },
    {
      image: "/gallery/DSC1090.webp",
    },
    {
      image: "/gallery/DSC1113.webp",
    },

    {
      image: "/gallery/DSC1152.webp",
    },
    {
      image: "/gallery/DSC0016.webp",
    },
    {
      image: "/gallery/DSC0624.webp",
    },
    {
      image: "/gallery/DSC0647.webp",
    },
    {
      image: "/gallery/DSC0621.webp",
    },
  ];

  return (
    <>
      <PageHero
        title="FAOPS - 2023"
        breadcrumb="Gallery"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16">

        <div className="max-w-7xl mx-auto px-6">

          {/* Back Button */}

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 font-semibold text-[#344474] hover:text-[#F7DB07] duration-300 mb-10"
          >
            <ArrowLeft size={18} />
            Back to Gallery
          </Link>

          {/* Hero Card */}

          <div className="relative overflow-hidden rounded-[35px] bg-white/70 backdrop-blur-2xl border border-white shadow-2xl p-10 mb-20">

            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#344474]/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#F7DB07]/20 blur-3xl"></div>

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">

              <div>

                <span className="inline-block bg-[#344474] text-white px-5 py-2 rounded-full text-sm font-semibold">
                  FAOPS Gallery 2023
                </span>

                <h1 className="text-5xl font-bold text-[#344474] mt-6">
                  FAOPS – 2023
                </h1>

                <p className="mt-6 text-slate-600 leading-8 text-lg">
                  Explore memorable moments from FAOPS 2023 featuring
                  international delegates, scientific sessions,
                  networking events and celebrations dedicated to
                  maternal and newborn healthcare.
                </p>

                <div className="mt-10 space-y-5">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-2xl bg-[#344474] flex items-center justify-center">
                      <CalendarDays
                        className="text-[#F7DB07]"
                        size={22}
                      />
                    </div>

                    <div>

                      <p className="text-sm text-slate-500">
                        Event Year
                      </p>

                      <h4 className="font-semibold text-[#344474]">
                        FAOPS 2023
                      </h4>

                    </div>

                  </div>

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-2xl bg-[#344474] flex items-center justify-center">
                      <MapPin
                        className="text-[#F7DB07]"
                        size={22}
                      />
                    </div>

                    <div>

                      <p className="text-sm text-slate-500">
                        Conference
                      </p>

                      <h4 className="font-semibold text-[#344474]">
                        Federation of Asia &
                        Oceania Perinatal Societies
                      </h4>

                    </div>

                  </div>

                </div>

              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-[30px] shadow-2xl border-4 border-white"
              >

                <img
                  src="/gallery/IMG_0300-rpku3gra1f1opxxigss2fu5q94izp3ojets8uhm1s8 (1).webp"
                  alt="FAOPS 2023"
                  className="w-full h-[430px] object-cover duration-700 hover:scale-110"
                />

              </motion.div>

            </div>

          </div>

          {/* Heading */}

          <div className="text-center mb-14">

            <span className="uppercase tracking-[5px] text-[#344474] font-semibold">
              Event Gallery
            </span>

            <h2 className="text-4xl font-bold text-[#344474] mt-4">
              FAOPS 2023 Highlights
            </h2>

            <div className="w-24 h-1 bg-[#F7DB07] rounded-full mx-auto my-6"></div>

            {/* <p className="text-slate-600 max-w-3xl mx-auto">
              Discover some of the most memorable moments captured
              during FAOPS 2023.
            </p> */}

          </div>

          {/* Gallery */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

  {galleryImages.map((item, index) => (

    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer rounded-[30px] overflow-hidden bg-white shadow-xl hover:shadow-2xl duration-500"
      onClick={() => setLightboxIndex(index)}
    >

      <div className="bg-slate-100 flex items-center justify-center h-[340px] overflow-hidden">

        <img
          src={item.image}
          alt=""
          className="max-w-full max-h-full object-contain transition duration-700 group-hover:scale-105"
        />

      </div>

    </motion.div>

  ))}

</div>

{/* Carousel viewer */}

<GalleryLightbox
  items={galleryImages.map((item) => item.image)}
  index={lightboxIndex}
  onIndexChange={setLightboxIndex}
  onClose={() => setLightboxIndex(null)}
/>

          {/* Bottom */}

          <div className="mt-20 rounded-[35px] bg-white/70 backdrop-blur-xl border border-white shadow-xl p-12 text-center">

            <h2 className="text-3xl font-bold text-[#344474]">
              Thank You
            </h2>

            <div className="w-20 h-1 bg-[#F7DB07] rounded-full mx-auto my-5"></div>

            <p className="text-slate-600 max-w-3xl mx-auto leading-8">
              Thank you to every delegate, speaker, healthcare
              professional and partner society who contributed to the
              success of FAOPS 2023. Together we continue advancing
              maternal and newborn healthcare across Asia and Oceania.
            </p>

          </div>

        </div>

      </div>
    </>
  );
}