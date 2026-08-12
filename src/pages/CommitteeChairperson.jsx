import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase } from "lucide-react";
import PageHero from "../components/about/PageHero";

export default function CommitteeChairperson() {

 const members = [
  {
    id: 1,
    name: "Dr. KH Tan",
    designation: "Committee on Research & Projects",
    country: "Singapore",
    email: "tan.kok.hian@singhealth.com.sg",
    image: "/Screenshot-2025-10-17-011306.webp",
  },
  {
    id: 2,
    name: "Dr. Tetsuya Isayama",
    designation: "Committee on Scientific & Training Activities",
    country: "Japan",
    email: "isayama77@gmail.com",
    image: "/Screenshot-2025-10-17-011330.webp",
  },
  {
    id: 3,
    name: " Diosdado V. Mariano",
    designation: "Committee on International Collaboration",
    country: "Philippines",
    email: "ochiemariano@yahoo.com",
    image: "/dr-removebg-preview-rpku3gr6duq39ph68a7xox4oan8pjhyxjwi8h5ratk.webp",
  },
  {
    id: 4,
    name: "Dr. Sookee Mendoza",
    designation: "Committee on Legislation & Election",
    country: "Philippines",
    email: "sookeemd@yahoo.com",
    image: "/ad6-removebg-preview-rpku3gr6duq39ph68a7xox4oan8pjhyxjwi8h5ratk.webp",
  },
  {
    id: 5,
    name: "Dr. Miranda Davies-Tuck",
    designation: "Committee on Philanthropy & Advocacy",
    country: "Australia",
    email: "miranda.davies@hudson.org.au",
    image: "/058_MIRANDA-DAVIES-TUCK_20150526-rpku3jkoycty8jd2rtfteef22sut6la4kagowzn4aw.webp",
  },
  {
    id: 6,
    name: "Dr. Sunil Raja Manandhar",
    designation: "Committee on Communications & Public Relations",
    country: "Nepal",
    email: "drsunilraja@gmail.com",
    image: "/Sunil-Manandhar-5-rpku3jkoycty8jd2rtfteef22sut6la4kagowzn4aw.webp",
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
                 Committee Chairperson

     
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
                        className="w-full h-[420px] object-cover"
                     />
     
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