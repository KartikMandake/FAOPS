import PageHero from "../components/about/PageHero";
import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Council() {

  const members = [
    {
      id: 1,
      name: "Dr. Han-Suk Kim",
      designation: "President",
      country: "Republic of Korea",
      email: "kimhans@snu.ac.kr",
      image: "/jp1.webp",
    },

    {
      id: 2,
      name: "Dr. Milind Shah",
      designation: "Secretary General",
      country: "India",
      email: "drmilindshah@gmail.com",
      image: "/milind.webp",
    },

    {
      id: 3,
      name: "Dr. Victor Sam Rajadurai",
      designation: "Immediate Past President",
      country: "Singapore",
      email: "victor.samuel@singhealth.com.sg",
      image: "/pres1.webp",
    },

    {
      id: 4,
      name: "Dr. Laila Arjumand Banu",
      designation: "President-Elect",
      country: "Bangladesh",
      email: "laila04@gmail.com",
      image: "/Prof._Laila_Arjumand_Banu-removebg-preview.webp",
    },

    {
      id: 5,
      name: "Dr. Mamoru Tanaka",
      designation: "Treasurer",
      country: "Japan",
      email: "mtanaka@keio.jp",
      image: "/jp.webp",
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
              Council Members

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