import { motion } from "framer-motion";
import { Users } from "lucide-react";
import PageHero from "../components/about/PageHero";

export default function OrganizationChart() {

  const officeBearers = [
  {
    name: "Dr. Han-Suk Kim",
    designation: "President",
    image: "/president.webp",
  },
  {
    name: "Dr. Milind Shah",
    designation: "Secretary General",
    image: "/milind.webp",
  },
  {
    name: "Dr. Victor Sam Rajadurai",
    designation: "Past President",
    image: "/pres1.webp",
  },
  {
    name: "Dr. Laila Arjumand Banu",
    designation: "President Elect",
    image: "/Prof._Laila_Arjumand_Banu-removebg-preview.webp",
  },
  {
    name: "Dr. Mamoru Tanaka",
    designation: "Treasurer",
    image: "/jp.webp",
  },
];

  const deputySecretaries = [
  {
    name: "Dr. Jose Salazar",
    designation: "East Region",
    image: "/Dr.-Jose-Salazar-Philippines-FAOPS-rpku3hp0kordlbft2smk9ew4w142r72nw15pyfpwnc.webp",
  },
  {
    name: "Dr. Azanna A. Kamar",
    designation: "Central Region",
    image: "/azanna-removebg-preview-rpku3gr6duq39ph68a7xox4oan8pjhyxjwi8h5ratk.webp",
  },
  {
    name: "Dr. Suranta Perera",
    designation: "West Region",
    image: "/1563118746102-rpku3jkoycty8jd2rtfteef22sut6la4kagowzn4aw.webp",
  },
  {
    name: "Dr. Adrienne Gordon",
    designation: "Oceania Region",
    image: "/mam-removebg-preview-rpku3gr6duq39ph68a7xox4oan8pjhyxjwi8h5ratk.webp",
  },
];

 const committeeChairpersons = [
  {
    name: "Dr. K H Tan",
    designation: "Research & Publications",
    image: "/Screenshot-2025-10-17-011306.webp",
  },
  {
    name: "Dr. Tetsuya Isayama",
    designation: "Scientific & Training Activities",
    image: "/Screenshot-2025-10-17-011330.webp",
  },
  {
    name: "Dr. Diosdado V Mariano",
    designation: "Programs, Projects, Advocacies & Awards",
    image: "/dr-removebg-preview-rpku3gr6duq39ph68a7xox4oan8pjhyxjwi8h5ratk.webp",
  },
  {
    name: "Dr. Socorro De Leon Mendoza",
    designation: "Legislation & Election",
    image: "/ad6-removebg-preview-1-rpku3gr6duq39ph68a7xox4oan8pjhyxjwi8h5ratk.webp",
  },
  {
    name: "Dr. Miranda Davies-Tuck",
    designation: "Philanthropy & Advocacy",
    image: "/058_MIRANDA-DAVIES-TUCK_20150526-rpku3jkoycty8jd2rtfteef22sut6la4kagowzn4aw.webp",
  },
  {
    name: "Dr. Sunil Raja Manandhar",
    designation: "Communication & Public Relations",
    image: "/Sunil-Manandhar-5-rpku3jkoycty8jd2rtfteef22sut6la4kagowzn4aw.webp",
  },
];
 const advisoryBoard = [
  {
    name: "Dr. Chien Nan Lee",
    designation: "Past President, FAOPS 2016",
    image: "/Dr.-Chien-Nan-Lee-rpku3hp0kordlbft2smk9ew4w142r72nw15pyfpwnc.webp",
  },
  {
    name: "Dr. Mohammod Shahidullah",
    designation: "Past President, FAOPS 2014",
    image: "/ad2-removebg-preview-1-rpku3gr6duq39ph68a7xox4oan8pjhyxjwi8h5ratk.webp",
  },
  {
    name: "Dr. David A Ellwood",
    designation: "Past President, FAOPS 2012",
    image: "/Dr-9.webp",
  },
  {
    name: "Dr. Ranjan K. Pejaver",
    designation: "Past President, FAOPS 2010",
    image: "/Dr-7.webp",
  },
  {
    name: "Dr. Tsuyomu Ikenoue",
    designation: "Past President, FAOPS 2008",
    image: "/ad4-removebg-preview-1-rpku3gr6duq39ph68a7xox4oan8pjhyxjwi8h5ratk.webp",
  },
  {
    name: "Dr. T'sang T'ang Hsieh",
    designation: "Past President, FAOPS 2004",
    image: "/Dr.-Tsang-Tang-Hsieh-rpku3hp0korntm3y8tysiyt52yc6e5296rwmywze64.webp",
  },
  {
    name: "Dr. Socorro De Leon Mendoza",
    designation: "Neonatology & Pediatrics (Philippines)",
    image: "/ad6-removebg-preview-rpku3gr6duq39ph68a7xox4oan8pjhyxjwi8h5ratk.webp",
  },
  {
    name: "Dr. Satoshi Kusuda",
    designation: "Past President",
    image: "/Dr.webp",
  },
];

  const MemberCard = ({ member }) => (
    <motion.div
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group w-full sm:w-[320px] rounded-[30px] bg-white/70 backdrop-blur-xl border border-white shadow-xl overflow-hidden hover:shadow-2xl duration-500"
    >
      <div className="bg-gradient-to-r from-[#344474] to-[#5063a8] h-32 relative">

        <div className="absolute left-1/2 -bottom-14 -translate-x-1/2">

          <div className="w-28 h-28 rounded-full bg-white shadow-xl p-2">

            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full rounded-full object-cover"
            />

          </div>

        </div>

      </div>

      <div className="pt-20 pb-8 px-6 text-center">

        <h3 className="text-2xl font-bold text-[#344474]">
          {member.name}
        </h3>

        <p className="text-[#1E3A5F] font-semibold mt-2">
          {member.designation}
        </p>

        <p className="text-slate-500 mt-2">
          {member.country}
        </p>

      </div>

    </motion.div>
  );

  return (
    <>
      <PageHero
        title="Organization Chart"
        breadcrumb="About"
      />

      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
{/* 
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          > */}

            {/* <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#344474] shadow-xl">

              <Users
                className="text-[#F7DB07]"
                size={45}
              />

            </div> */}
{/* 
            <h2 className="text-5xl font-bold text-[#344474] mt-8">
              Organization Structure
            </h2> */}

            {/* <p className="mt-5 text-slate-600 max-w-3xl mx-auto text-lg leading-8">
              Meet the dedicated leaders, office bearers, committee
              chairpersons and advisory board members guiding the
              Federation of Asia-Oceania Perinatal Societies.
            </p> */}

            {/* <div className="w-28 h-1 bg-[#F7DB07] rounded-full mx-auto mt-6"></div> */}

          {/* </motion.div> */}

          {/* Office Bearers */}

          <div className="mb-24">

            <h2 className="text-center text-4xl font-bold text-[#344474]">
              Office Bearers
            </h2>

            <div className="w-20 h-1 bg-[#F7DB07] rounded-full mx-auto mt-5 mb-12"></div>

            <div className="flex flex-wrap justify-center gap-8">

              {officeBearers.map((member, index) => (
                <MemberCard
                  key={index}
                  member={member}
                />
              ))}

            </div>

          </div>

          {/* Deputy Secretaries */}

          <div className="mb-24">

            <h2 className="text-center text-4xl font-bold text-[#344474]">
              Deputy Secretaries
            </h2>

            <div className="w-20 h-1 bg-[#F7DB07] rounded-full mx-auto mt-5 mb-12"></div>

            <div className="flex flex-wrap justify-center gap-8">

              {deputySecretaries.map((member, index) => (
                <MemberCard
                  key={index}
                  member={member}
                />
              ))}

            </div>

          </div>
                    {/* ============================= */}
          {/* Committee Chairpersons */}
          {/* ============================= */}

          <div className="mb-24">

            <div className="text-center mb-12">

              <h2 className="text-4xl font-bold text-[#344474]">
                Committee Chairpersons
              </h2>

              <div className="w-20 h-1 bg-[#F7DB07] rounded-full mx-auto mt-5"></div>

            </div>

            <div className="flex flex-wrap justify-center gap-8">

              {committeeChairpersons.map((member, index) => (

                <MemberCard
                  key={index}
                  member={member}
                />

              ))}

            </div>

          </div>

          {/* ============================= */}
          {/* Advisory Board */}
          {/* ============================= */}

          <div className="mb-24">

            <div className="text-center mb-12">

              <h2 className="text-4xl font-bold text-[#344474]">
                Advisory Board
              </h2>

              <div className="w-20 h-1 bg-[#F7DB07] rounded-full mx-auto mt-5"></div>

            </div>

            <div className="flex flex-wrap justify-center gap-8">

              {advisoryBoard.map((member, index) => (

                <MemberCard
                  key={index}
                  member={member}
                />

              ))}

            </div>

          </div>

          {/* ============================= */}
          {/* Bottom Section */}
          {/* ============================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#344474] to-[#5063a8] text-white text-center px-10 py-16 shadow-2xl"
          >

            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#F7DB07]/20 blur-3xl"></div>

            <div className="relative">

              <h2 className="text-4xl font-bold">
                Working Together for Better Perinatal Care
              </h2>

              <p className="mt-6 max-w-4xl mx-auto text-lg leading-8 text-white/90">
                The Federation of Asia-Oceania Perinatal Societies brings together
                distinguished healthcare professionals, researchers and academic
                leaders from across Asia and Oceania to promote excellence in
                maternal and newborn healthcare through education, collaboration,
                research and innovation.
              </p>

            </div>

          </motion.div>

        </div>

      </section>

    </>
  );
}