import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "/background.webp",
    title: "Founded in 1978",
    subtitle:
      "Dedicated to Improve Perinatal Care in Asia Oceania Region",
  },
  {
    image: "/IMG_0300-rpku3gra1f1opxxigss2fu5q94izp3ojets8uhm1s8.webp",
    title: "45+ Years of Excellence",
    subtitle:
      "Promoting Maternal, Fetal & Neonatal Healthcare",
  },
  {
    image: "/gallery/DSC1131.webp",
    title: "19 Member Countries",
    subtitle:
      "Connecting Perinatal Experts Across Asia & Oceania",
  },
];

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden pb-12">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#F7DB07]/10 blur-3xl -translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-[#344474]/5 blur-3xl translate-x-24 translate-y-24"></div>
      

      <div className="w-full relative z-10">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          loop
          className="pb-12"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden h-[440px] sm:h-[600px] lg:h-[720px] flex items-center shadow-2xl bg-slate-900">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover transition-transform duration-[8000ms] scale-105"
                  />
                  {/* More transparent overlay to let the background image show through clearly while keeping text readable */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1c2748]/85 via-[#1c2748]/60 to-transparent" />
                </div>

                {/* Left Content */}
                <div className="relative z-10 mx-4 sm:mx-12 md:mx-20 lg:mx-32 xl:mx-40 max-w-xl text-left py-6 sm:py-10 px-2 sm:px-0">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F7DB07] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F7DB07]"></span>
                    </span>
                    <span className="text-[9px] font-extrabold tracking-widest text-white uppercase">
                      FAOPS
                    </span>
                  </motion.div>

                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-4 sm:mt-6 text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white tracking-tight"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-3 sm:mt-5 text-xs sm:text-base leading-relaxed text-slate-200 font-medium max-w-lg"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8"
                  >
                    <Link 
                      to="/about"
                      className="bg-[#F7DB07] hover:bg-[#ebd006] text-[#344474] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer text-center text-sm"
                    >
                      Read More
                    </Link>
                    <Link 
                      to="/contact"
                      className="border-2 border-white/80 text-white hover:bg-white hover:text-[#344474] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-center text-sm"
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Stats Board with premium card design */}
      <div className="relative z-20 px-4 sm:px-6 pb-6 mt-6 sm:mt-12">
        <div className="max-w-5xl mx-auto rounded-2xl sm:rounded-[2rem] overflow-hidden bg-gradient-to-r from-[#344474] via-[#3a4d85] to-[#344474] shadow-[0_20px_50px_rgba(52,68,116,0.25)] border border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {[
              {
                value: "45+",
                label: "Years of Trust",
              },
              {
                value: "70+",
                label: "Global Members",
              },
              {
                value: "19+",
                label: "Perinatal Societies",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                className="py-6 sm:py-8 text-center transition-colors duration-300"
              >
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  {item.value}
                </h2>
                <div className="w-12 h-1 bg-[#F7DB07] mx-auto my-2.5 sm:my-3.5 rounded-full"></div>
                <p className="uppercase tracking-[3px] text-white/80 text-[10px] sm:text-[11px] font-extrabold">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}