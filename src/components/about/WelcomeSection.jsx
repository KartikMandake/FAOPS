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
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">
         <center>

           

            <span className="uppercase tracking-[5px] text-[#344474] font-semibold">
              Welcome to FAOPS
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-5 text-slate-900 leading-tight">
              Federation of Asia &
              <br />
              Oceania Perinatal Societies
            </h2>
                        <div className="w-24 h-1 rounded-full bg-[#F7DB07] mt-6 mb-8"></div>

 </center>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
           

            <p className="text-slate-600 leading-8 mb-6">
             The Federation of Asia and Oceania Perinatal Societies (FAOPS) was established in 1980 following the Alma Ata Declaration of 1978, and the first congress held in 1979 in Singapore.
            </p>

            <p className="text-slate-600 leading-8 mb-6">
              In its thirty-eight (45) years of existence, the FAOPS has evolved into a vibrant community of leaders, researchers and experts in the eld of Perinatology. It is governed by the FAOPS Constitution and By-Laws and has upheld the tenets of professionalism and cooperation among member countries. Its operation as an organization is maintained by a Council of executive ocers composed of the Immediate Past President, President, President-Elect, Treasurer, Secretary General and three (3) Deputy Secretary Generals, each representing the Eastern, Western and Central regions of Asia and Oceania. It has also recently, involved its former presidents through the creation of a Council of Advisers.
            </p>

            {/* <p className="text-slate-600 leading-8">
              Guided by its Constitution and By-Laws, FAOPS promotes
              professionalism, scientific advancement, collaboration,
              education and innovation while strengthening partnerships among
              member countries and international organizations.
            </p> */}

            {/* Highlights */}

           {/* Highlights */}


          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
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
              className="relative rounded-[35px] shadow-2xl object-cover"
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
              className="absolute -bottom-8 -left-8 bg-white rounded-3xl shadow-xl p-8 border"
            >

              <h3 className="text-5xl font-bold text-[#344474]">
                45+
              </h3>

              <p className="text-slate-500 mt-2">
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