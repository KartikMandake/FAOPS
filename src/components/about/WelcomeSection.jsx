import { motion } from "framer-motion";
import { CheckCircle2,CheckCircle } from "lucide-react";

const highlights = [
  "Promote the science and art of perinatology,",
  "Promote maternal, fetal and neonatal welfare,",
  "Maintain liaison and promote co-operation and goodwill with other perinatal organization,",
  "To provide expert advice to governmental and other bodies pertaining to perinatology,",
  "To promote research and training in perinatology.",
  "A biennial congress that is held among its member countries",
  "FAOPS-supported perinatal workshops among its sub-regions",
  "Young investigator award",
  "AOPS participation and representation in country perinatal meetings, conferences and workshops."
];

export default function WelcomeSection() {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">

            <span className="uppercase tracking-[3px] sm:tracking-[5px] text-[#344474] text-xs sm:text-sm font-semibold">
              Welcome to FAOPS
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mt-3 sm:mt-5 text-slate-900 leading-tight">
              Federation of Asia &
              <br />
              Oceania Perinatal Societies
            </h2>
            <div className="w-16 sm:w-24 h-1 rounded-full bg-[#F7DB07] mt-4 sm:mt-6 mx-auto"></div>

         </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
           

            <p className="text-slate-600 leading-relaxed sm:leading-8 mb-4 sm:mb-6 text-sm sm:text-base">
             The Federation of Asia and Oceania Perinatal Societies (FAOPS) was established in 1980 following the Alma Ata Declaration of 1978, and the first congress held in 1979 in Singapore.
            </p>

            <p className="text-slate-600 leading-relaxed sm:leading-8 mb-4 sm:mb-6 text-sm sm:text-base">
              In its thirty-eight (45) years of existence, the FAOPS has evolved into a vibrant community of leaders, researchers and experts in the eld of Perinatology. It is governed by the FAOPS Constitution and By-Laws and has upheld the tenets of professionalism and cooperation among member countries. Its operation as an organization is maintained by a Council of executive ocers composed of the Immediate Past President, President, President-Elect, Treasurer, Secretary General and three (3) Deputy Secretary Generals, each representing the Eastern, Western and Central regions of Asia and Oceania. It has also recently, involved its former presidents through the creation of a Council of Advisers.
            </p>

          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative mt-4 lg:mt-0"
          >

            {/* Background */}

            <div className="absolute inset-0 rounded-[40px] bg-[#344474]/10 blur-3xl"></div>

            <motion.img
              src="/DSC10521.webp"
              alt="FAOPS"
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: .4,
              }}
              className="relative rounded-2xl sm:rounded-[35px] shadow-2xl object-cover w-full h-auto"
            />

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -bottom-4 sm:-bottom-8 left-2 sm:left-4 bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-8 border"
            >

              <h3 className="text-3xl sm:text-5xl font-bold text-[#344474]">
                45+
              </h3>

              <p className="text-slate-500 text-xs sm:text-sm mt-1 sm:mt-2">
                Years of Excellence
              </p>

            </motion.div>

          </motion.div>

        </div><br></br>
        <br></br>
        
<div className="grid sm:grid-cols-2 gap-4 mt-10">

  {highlights.map((item, index) => (

    <motion.div
      key={index}
      whileHover={{ x: 8 }}
      className="flex items-center gap-3"
    >

      <CheckCircle
        className="w-6 h-6 text-[#1E3A5F] shrink-0 mt-1"
      />

      <span className="text-slate-700 font-medium">
        {item}
      </span>

    </motion.div>

  ))}

</div>

      </div>


    </section>
  );
}