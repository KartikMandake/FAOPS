import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase } from "lucide-react";
import PageHero from "../components/about/PageHero";

export default function AdvisoryBoard() {

 const members = [
  {
    id: 1,
    name: "Dr. Chien Nan Lee",
    designation: "Past-President, FAOPS 2016",
    country: "Taiwan",
    email: "d.ellwood@griffith.edu.au",
    image: "/Dr.-Chien-Nan-Lee-rpku3hp0kordlbft2smk9ew4w142r72nw15pyfpwnc.webp",
  },
  {
    id: 2,
    name: "Dr. Mohammod Shahidullah",
    designation: "Past-President, FAOPS 2014 • Neonatology & Pediatrics",
    country: "Bangladesh",
    email: "shahidullahdr@gmail.com",
    image: "/ad2-removebg-preview-1-rpku3gr6duq39ph68a7xox4oan8pjhyxjwi8h5ratk.webp",
  },
  {
    id: 3,
    name: "Dr. David Ellwood",
    designation: "Past-President, FAOPS 2012",
    country: "Australia",
    email: "leecn@ntu.edu.tw",
    image: "/ad3-removebg-preview-rpku3gr6duq39ph68a7xox4oan8pjhyxjwi8h5ratk.webp",
  },
  {
    id: 4,
    name: "Dr. Ranjan Kumar Pejaver",
    designation: "Past-President, FAOPS 2010 • HOD - Pediatrics",
    country: "India",
    email: "sookeemd@yahoo.com",
    image: "/Ranjan-Pejaver-250-removebg-preview-rpku3gr6duq39ph68a7xox4oan8pjhyxjwi8h5ratk.webp",
  },
  {
    id: 5,
    name: "Dr. Tsuyomu Ikenoue",
    designation: "Past-President, FAOPS 2008",
    country: "Japan",
    email: "tsuyomu_ikenoue@med.miyazaki-u.ac.jp",
    image: "/ad4-removebg-preview-1-rpku3gr6duq39ph68a7xox4oan8pjhyxjwi8h5ratk.webp",
  },
  {
    id: 6,
    name: "Dr. T’sang T'ang Hsieh",
    designation: "Past-President, FAOPS 2008",
    country: "Taiwan",
    email: "tth3388@cgmh.org.tw",
    image: "/Dr.-Tsang-Tang-Hsieh-rpku3hp0korntm3y8tysiyt52yc6e5296rwmywze64.webp",
  },
  {
    id: 7,
    name: "Dr. Sookee Mendoza",
    designation: "Neonatology & Pediatrics",
    country: "Philippines",
    email: "sookeemd@yahoo.com",
    image: "/ad6-removebg-preview-1-rpku3gr6duq39ph68a7xox4oan8pjhyxjwi8h5ratk.webp",
  },
  {
    id: 8,
    name: "Dr. Satoshi Kusuda",
    designation:
      "Department of Pediatrics, Kyorin University • Neonatal Research Network of Japan",
    country: "Japan",
    email: "kusuda-satoshi@nrnj.org",
    image: "/past-rpku3gr6duq39ph68a7xox4oan8pjhyxjwi8h5ratk.webp",
  },
];

  return (
    <>
      <PageHero
            title="Office Bearers"
                 breadcrumb="Home"
          />
    
          <section className="py-20 bg-slate-50">
    
            <div className="max-w-7xl mx-auto px-6">
    
              <div className="text-center mb-16">
    
                <h2 className="text-5xl font-bold text-[#344474]">
                  Advisory Board
    
                </h2>
    
                <div className="w-24 h-1 bg-[#F7DB07] mx-auto rounded-full mt-5 mb-6"></div>
    
                {/* <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-8">
                  The Executive Council provides strategic leadership and guidance
                  to strengthen collaboration, research and excellence in
                  perinatal healthcare throughout Asia and Oceania.
                </p> */}
    
              </div>
    
              {/* Council Group Image */}
    
              {/* <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                src="/council/council-group.jpg"
                alt="Council"
                className="rounded-[35px] shadow-2xl mb-20 w-full"
              /> */}
    
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
    
                {members.map((member, index) => (
    
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: .5,
                      delay: index * .15,
                    }}
                    whileHover={{
                      y: -10,
                    }}
                    className="bg-white rounded-[30px] overflow-hidden shadow-xl border border-slate-100"
                  >
    
                    <img
                      src={member.image}
                      alt={member.name}
     className="w-full h-[420px] object-cover"             />
    
                    <div className="p-7">
    
                      <span className="inline-block bg-[#344474]/10 text-[#1E3A5F] px-4 py-2 rounded-full text-sm font-semibold">
                        {member.designation}
                      </span>
    
                      <h3 className="text-[1.2rem] font-bold mt-5">
                        {member.name}
                      </h3>
    
                      <div className="flex items-center gap-2 mt-4 text-slate-600">
    
                        <MapPin
                          size={18}
                          className="text-[#1E3A5F]"
                        />
    
                        {member.country}
    
                      </div>
    
                      <div className="flex items-center gap-2 mt-4 text-slate-600">
    
                        <Mail
                          size={18}
                          className="text-[#1E3A5F]"
                        />
    
                        <a
                          href={`mailto:${member.email}`}
                          className="hover:text-[#344474]"
                        >
                          {member.email}
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