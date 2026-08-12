// import PageHero from "../components/about/PageHero";
// import { motion } from "framer-motion";
// import {
//   GraduationCap,
//   Microscope,
//   Globe,
//   Trophy,
//   BookOpen,
//   Users
// } from "lucide-react";

// const programs = [
//   {
//     icon: GraduationCap,
//     title: "Education & Training",
//     desc: "Professional development workshops and educational initiatives."
//   },
//   {
//     icon: Microscope,
//     title: "Research",
//     desc: "Promoting collaborative research in perinatal medicine."
//   },
//   {
//     icon: Globe,
//     title: "Scientific Congress",
//     desc: "Biennial international congress among member countries."
//   },
//   {
//     icon: Trophy,
//     title: "Young Investigator Award",
//     desc: "Recognizing young researchers in perinatal medicine."
//   },
//   {
//     icon: BookOpen,
//     title: "Regional Workshops",
//     desc: "FAOPS-supported workshops throughout Asia and Oceania."
//   },
//   {
//     icon: Users,
//     title: "International Collaboration",
//     desc: "Strengthening cooperation among member societies worldwide."
//   }
// ];

// export default function Programs() {
//   return (
//     <>
//       <PageHero
//        title="Programs" breadcrumb="Programs" />

//       <section className="py-20 bg-slate-50">

//         <div className="max-w-7xl mx-auto px-6">

//           <div className="text-center mb-16">

//             <h2 className="text-5xl font-bold text-[#344474]">
//               FAOPS Programs
//             </h2>

//             <div className="w-24 h-1 bg-[#F7DB07] mx-auto rounded-full mt-5 mb-6"></div>

//             <p className="max-w-3xl mx-auto text-slate-600 text-lg leading-8">
//               FAOPS organizes educational programs, scientific congresses,
//               workshops and collaborative initiatives to improve maternal,
//               fetal and neonatal healthcare throughout Asia and Oceania.
//             </p>

//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//             {programs.map((program, index) => {

//               const Icon = program.icon;

//               return (

//                 <motion.div
//                   key={index}
//                   whileHover={{
//                     y: -10,
//                     scale: 1.02
//                   }}
//                   className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100"
//                 >

//                   <div className="w-16 h-16 rounded-2xl bg-[#344474]/10 flex items-center justify-center">

//                     <Icon
//                       className="text-[#344474]"
//                       size={34}
//                     />

//                   </div>

//                   <h3 className="text-2xl font-bold mt-6">
//                     {program.title}
//                   </h3>

//                   <p className="text-slate-600 mt-4 leading-8">
//                     {program.desc}
//                   </p>

//                 </motion.div>

//               );

//             })}

//           </div>

//         </div>

//       </section>
//     </>
//   );
// }


import { motion } from "framer-motion";
import { Eye, Download } from "lucide-react";
import PageHero from "../components/about/PageHero";

export default function Programs() {

  const programs = [
    {
      id: 1,
      title: "FAOPS 2025 Conference",
      file: "/Final_-Scientific-Program-FAOPS2025-_-14-16th-Nov-2025.pdf",
      
    },
    {
      id: 2,
      title: "Brunei Program",
      file: "/Brunei-Program_1.pdf",
      
    },
    {
      id: 3,
      title: "Report - Preterm Birth",
      file: "/Workshop-report-Mongolia_1.pdf",
    },
  ];

  return (
    <>
      <PageHero
        title="Programs"
        breadcrumb="Programs"
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
              FAOPS Programs
            </h2>

            <div className="w-24 h-1 bg-[#F7DB07] rounded-full mx-auto mt-5 mb-6"></div>

            <p className="max-w-3xl mx-auto text-slate-600 text-lg leading-8">
              Explore FAOPS educational programs, workshops and scientific
              initiatives supporting maternal, fetal and neonatal healthcare.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {programs.map((program, index) => (

              <motion.div
                key={program.id}
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
                  src={`${program.file}#toolbar=0`}
                  title={program.title}
                  className="w-full h-80"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-[#344474]">
                    {program.title}
                  </h3>

                  {/* <p className="mt-4 text-slate-600 leading-7">
                    {program.description}
                  </p> */}

                  <div className="flex gap-3 mt-8">

                    <a
                      href={program.file}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 rounded-xl bg-[#344474] text-white flex items-center justify-center gap-2 hover:bg-[#25345c] transition"
                    >
                      <Eye size={18} />
                      View
                    </a>

                    <a
                      href={program.file}
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