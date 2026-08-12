// import { Link } from "react-router-dom";
// import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
// import PageHero from "../components/about/PageHero";
// import { motion } from "framer-motion";
// export default function FAOPS2022() {
//   return (
//     <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">

//       {/* Hero */}
//       <PageHero
//         title="FAOPS - 2022"
//         breadcrumb="Gallery"
//       />

//       <div className="max-w-7xl mx-auto px-5 py-12">

//         {/* Back Button */}

//         <Link
//           to="/Gallery"
//           className="inline-flex items-center gap-2 text-[#344474] font-semibold hover:text-[#F7DB07] duration-300 mb-8"
//         >
//           <ArrowLeft size={18} />
//           Back to Gallery
//         </Link>

//         {/* Header Card */}

//         <div className="relative overflow-hidden rounded-[35px] border border-white/60 bg-white/60 backdrop-blur-2xl shadow-[0_20px_60px_rgba(52,68,116,0.15)]">

//           {/* Decoration */}

//           <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#344474]/10 blur-3xl"></div>
//           <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#F7DB07]/20 blur-3xl"></div>

//           <div className="relative grid lg:grid-cols-2 gap-10 items-center p-10">

//             {/* Left */}

//             <div>

//               <span className="inline-flex px-5 py-2 rounded-full bg-[#344474] text-white text-sm font-semibold shadow-lg">
//                 FAOPS Gallery 2022
//               </span>

//               <h1 className="mt-6 text-5xl font-extrabold text-[#344474] leading-tight">
//                 World Prematurity Day 2022
//               </h1>

//               <p className="mt-5 text-lg text-slate-600 leading-8">
//                 A memorable celebration organized by the Federation of Asia and
//                 Oceania Perinatal Societies to promote awareness of preterm birth,
//                 maternal care and newborn health.
//               </p>

//               <div className="mt-8 space-y-4">

//                 <div className="flex items-center gap-4">

//                   <div className="w-12 h-12 rounded-2xl bg-[#344474] flex items-center justify-center shadow-lg">
//                     <CalendarDays
//                       size={22}
//                       className="text-[#F7DB07]"
//                     />
//                   </div>

//                   <div>
//                     <p className="text-sm text-slate-500">
//                       Event
//                     </p>

//                     <h4 className="font-semibold text-[#344474]">
//                       World Prematurity Day 2022
//                     </h4>

//                   </div>

//                 </div>

//                 <div className="flex items-center gap-4">

//                   <div className="w-12 h-12 rounded-2xl bg-[#344474] flex items-center justify-center shadow-lg">

//                     <MapPin
//                       size={22}
//                       className="text-[#F7DB07]"
//                     />

//                   </div>

//                   <div>

//                     <p className="text-sm text-slate-500">
//                       Venue
//                     </p>

//                     <h4 className="font-semibold text-[#344474]">
//                       KK Women's & Children's Hospital,
//                       Singapore
//                     </h4>

//                   </div>

//                 </div>

//               </div>

//             </div>

//             {/* Right Hero Image */}

//             <div>

//               <div className="rounded-[30px] overflow-hidden border-4 border-white shadow-2xl">

//                 <img
//                   src="/gallery2022/main.jpg"
//                   alt=""
//                   className="w-full h-[450px] object-cover hover:scale-105 duration-700"
//                 />

//               </div>

//             </div>

//           </div>

//         </div>

//         {/* Gallery Heading */}

//         <div className="mt-20 text-center">

//           <span className="text-[#F7DB07] font-semibold tracking-widest uppercase">
//             Event Gallery
//           </span>

//           <h2 className="text-4xl font-bold text-[#344474] mt-3">
//             World Prematurity Awareness Month
//           </h2>

//           <p className="mt-4 text-slate-600 max-w-3xl mx-auto leading-8">
//             Explore memorable moments from the World Prematurity Awareness
//             Month celebrations conducted at KK Women's & Children's Hospital,
//             Singapore during FAOPS 2022.
//           </p>

//         </div>

//         {/* Image Gallery */}

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

//           <div className="group bg-white/70 backdrop-blur-xl rounded-[28px] overflow-hidden border border-white shadow-xl hover:shadow-2xl duration-500">

//             <div className="overflow-hidden">

//               <img
//                 src="/gallery2022/1.jpg"
//                 alt=""
//                 className="w-full h-72 object-cover group-hover:scale-110 duration-700"
//               />

//             </div>

//             <div className="p-6">

//               <h3 className="font-bold text-[#344474] text-xl">
//                 World Prematurity Awareness Month
//               </h3>

//               <p className="text-slate-500 mt-2">
//                 KK Hospital, Singapore
//               </p>

//             </div>

//           </div>

//           <div className="group bg-white/70 backdrop-blur-xl rounded-[28px] overflow-hidden border border-white shadow-xl hover:shadow-2xl duration-500">

//             <div className="overflow-hidden">

//               <img
//                 src="/gallery2022/2.jpg"
//                 alt=""
//                 className="w-full h-72 object-cover group-hover:scale-110 duration-700"
//               />

//             </div>

//             <div className="p-6">

//               <h3 className="font-bold text-[#344474] text-xl">
//                 Awareness Campaign
//               </h3>

//               <p className="text-slate-500 mt-2">
//                 Singapore
//               </p>

//             </div>

//           </div>

//           <div className="group bg-white/70 backdrop-blur-xl rounded-[28px] overflow-hidden border border-white shadow-xl hover:shadow-2xl duration-500">

//             <div className="overflow-hidden">

//               <img
//                 src="/gallery2022/3.jpg"
//                 alt=""
//                 className="w-full h-72 object-cover group-hover:scale-110 duration-700"
//               />

//             </div>

//             <div className="p-6">

//               <h3 className="font-bold text-[#344474] text-xl">
//                 Singapore Zoo Celebration
//               </h3>

//               <p className="text-slate-500 mt-2">
//                 World Prematurity Day 2022
//               </p>

//             </div>

//           </div>

//         </div>

//               {/* ========================= */}
//       {/* KKH SINGAPORE ZOO */}
//       {/* ========================= */}

//       <section className="mb-16">
//         <div className="relative mb-8">
//           <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[#344474]/20 to-transparent"></div>

//           <div className="relative inline-block bg-white px-6">
//             <h2 className="text-3xl font-bold text-[#344474]">
//               KKH World Prematurity Day 2022 Celebration at Singapore Zoo
//             </h2>
//           </div>
//         </div>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

//           {[
//             "/gallery/faops2022/zoo1.jpg",
//             "/gallery/faops2022/zoo2.jpg",
//             "/gallery/faops2022/zoo3.jpg",
//             "/gallery/faops2022/zoo4.jpg",
//             "/gallery/faops2022/zoo5.jpg",
//             "/gallery/faops2022/zoo6.jpg",
//           ].map((img, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -8 }}
//               className="group overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-white"
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={img}
//                   alt=""
//                   className="h-72 w-full object-cover duration-500 group-hover:scale-110"
//                 />
//               </div>
//             </motion.div>
//           ))}

//         </div>
//       </section>

//       {/* ========================= */}
//       {/* WORLD PREMATURITY MONTH */}
//       {/* ========================= */}

//       <section className="mb-16">

//         <div className="relative mb-8">
//           <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[#344474]/20 to-transparent"></div>

//           <div className="relative inline-block bg-white px-6">
//             <h2 className="text-3xl font-bold text-[#344474]">
//               World Prematurity Awareness Month at KK Hospital Singapore
//             </h2>
//           </div>
//         </div>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

//           {[
//             "/gallery/faops2022/month1.jpg",
//             "/gallery/faops2022/month2.jpg",
//             "/gallery/faops2022/month3.jpg",
//             "/gallery/faops2022/month4.jpg",
//           ].map((img, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.03 }}
//               className="rounded-3xl overflow-hidden bg-white shadow-xl border border-white"
//             >
//               <img
//                 src={img}
//                 alt=""
//                 className="h-64 w-full object-cover transition duration-500 hover:scale-110"
//               />
//             </motion.div>
//           ))}

//         </div>

//       </section>

//       {/* ========================= */}
//       {/* SINGAPORE ZOO PART 2 */}
//       {/* ========================= */}

//       <section className="mb-16">

//         <div className="relative mb-8">
//           <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[#344474]/20 to-transparent"></div>

//           <div className="relative inline-block bg-white px-6">
//             <h2 className="text-3xl font-bold text-[#344474]">
//               KKH Singapore Zoo Celebration Highlights
//             </h2>
//           </div>
//         </div>

//         <div className="grid gap-6 md:grid-cols-3">

//           {[
//             "/gallery/faops2022/highlight1.jpg",
//             "/gallery/faops2022/highlight2.jpg",
//             "/gallery/faops2022/highlight3.jpg",
//           ].map((img, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -10 }}
//               className="overflow-hidden rounded-[30px] bg-white shadow-xl border"
//             >
//               <img
//                 src={img}
//                 alt=""
//                 className="h-80 w-full object-cover transition duration-500 hover:scale-110"
//               />
//             </motion.div>
//           ))}

//         </div>

//       </section>

//       {/* ========================= */}
//       {/* NEPAL */}
//       {/* ========================= */}

//       <section className="mb-16">

//         <div className="relative mb-8">
//           <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[#344474]/20 to-transparent"></div>

//           <div className="relative inline-block bg-white px-6">
//             <h2 className="text-3xl font-bold text-[#344474]">
//               Nepal World Prematurity Day 2022
//             </h2>
//           </div>
//         </div>

//         <motion.div
//           whileHover={{ y: -6 }}
//           className="overflow-hidden rounded-[32px] bg-white shadow-xl border border-white"
//         >
//           <img
//             src="/gallery/faops2022/nepal.jpg"
//             alt=""
//             className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
//           />
//         </motion.div>

//            </section>
// </div>
//       </div>
   
      
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageHero from "../components/about/PageHero";
import GalleryLightbox from "../components/gallery/GalleryLightbox";

export default function FAOPS2022() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
const gallerySections = [
  {
    title: "World Prematurity Day 2022KK Women’s and Children’s Hospital, Singapore",
    images: [
      "/gallery/Purple-lights-@-KKH-1.webp",
      "/gallery/Neonatal-Intensive-Care-Unit-1536x1152.webp",
      "/gallery/Special-Care-Nursery-1536x1152.webp",
    ],
  },
  {
    title: "World Prematurity Awareness Month at KK Hospital Singapore",
    images: [
      "/gallery/Lift-door-sticker-Banner.webp",
      "/gallery/Window-display-Featuring-our-Ex-Preemie-Warrior-1536x1152.webp",
      // "/gallery/DSC1131.webp",
    ],
  },

  {
    title: "KKH World Prematurity Day 2022 Celebration at Singapore Zoo!",
    images: [
      "/gallery/Best-Animal-Costume-competition.webp",
      "/gallery/img74.webp",
      "/gallery/img75.webp",
      "/gallery/Best-Animal-.webp",
      "/gallery/img51.webp",
      "/gallery/img50.webp",
      "/gallery/img69.webp",
      "/gallery/img60.webp",
      "/gallery/img54.webp",
      "/gallery/img55.webp",
      "/gallery/Amazing-Race-1536x863.webp",


    ],
  },

  {
    title: "World Prematurity Awareness Month at KK Hospital Singapore",
    images: [
      "/gallery/Singhealth-wide.webp",
      "/gallery/Webinar.webp",
      "/gallery/Token-for-parents.webp",
      "/gallery/Staff-wear-purple.webp",
      "/gallery/Poster-Display.webp",
       ],
  },

   {
    title: "KKH World Prematurity Day 2022 Celebration at Singapore Zoo!",
    images: [
      "/gallery/Dance-performance-by-the-Preemies-1.webp",
      "/gallery/img84.webp",
      "/gallery/img85.webp",
      "/gallery/img86.webp",
      "/gallery/Lunch-Buffet.webp",
      "/gallery/Preemie-day-T-shirt-1-1536x1024.webp",

       ],
  },

     {
    title: "Nepal World Prematurity Day 2022",
    images: [
      "/gallery/IMG-20221112-WA0018.webp",
      "/gallery/IMG-20221112-WA0021.webp",
      "/gallery/IMG-20221112-WA0019.webp",
      "/gallery/IMG-20221112-WA0017.webp",
       ],
  },

     {
    title: "1st Human Breast Milk Bank in Paropakar Maternity",
    images: [
      "/gallery/IMG-20221112-WA0020.webp",
       ],
  },
    {
    title: "Perinatal Society of Cambodia ( PSC)",
    images: [
      "/gallery/IMG_0300-1536x1020.webp",
      "/gallery/IMG_54A1469901D8-1.webp",
      "/gallery/IMG_75EA4316F334-1.webp",
      "/gallery/IMG_0290-1-1536x935.webp",
      "/gallery/IMG_0296-1536x864.webp",
      "/gallery/IMG_0299-1536x1020.webp",
      "/gallery/4E2A0399-1536x1024.webp",
       ],
  },
  
];

  /* Flatten every section into one carousel list, keeping the section title as
     the caption, plus the global index each section starts at. */

  const flatImages = gallerySections.flatMap((section) =>
    section.images.map((src) => ({ src, caption: section.title }))
  );

  const sectionOffsets = gallerySections.reduce(
    (offsets, section, i) => [
      ...offsets,
      i === 0 ? 0 : offsets[i - 1] + gallerySections[i - 1].images.length,
    ],
    []
  );

  return (
    <>
      <PageHero
        title="FAOPS - 2022"
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

        
              <div>

      

          </div>

          {/* Heading */}

          <div className="text-center mb-14">

            <span className="uppercase tracking-[5px] text-[#344474] font-semibold">
              Event Gallery
            </span>


          </div>

          {/* Gallery */}

<div className="space-y-20">

  {gallerySections.map((section, sectionIndex) => (

    <section key={sectionIndex}>

      {/* Section Title */}

      <div className="text-center mb-10">

        <h2 className="text-3xl font-bold text-[#344474]">
          {section.title}
        </h2>

        <div className="w-24 h-1 bg-[#F7DB07] rounded-full mx-auto mt-4"></div>

      </div>

      {/* Images */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {section.images.map((image, index) => (

          <motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1 }}
  whileHover={{ y: -8 }}
  className="group rounded-[30px] overflow-hidden bg-white shadow-xl cursor-pointer"
  onClick={() => setLightboxIndex(sectionOffsets[sectionIndex] + index)}
>

  <div className="bg-white p-4">

    <img
      src={image}
      alt=""
      className="w-full h-80 object-cover transition duration-500 group-hover:scale-105 rounded-[10]"
    />

  </div>

</motion.div>

        ))}

      </div>

    </section>

  ))}

</div>


          </div>

          {/* Carousel viewer */}

          <GalleryLightbox
            items={flatImages}
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

      {/* </div> */}
    </>
  );
}