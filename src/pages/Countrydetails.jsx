import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "flag-icons/css/flag-icons.min.css";
import PageHero from "../components/about/PageHero";

const societies = [
  {
    country: "Australia & New Zealand",
    society: "Perinatal Society of Australia and New Zealand",
    flag: "au",
    path: "/membership/australia",
  },
  {
    country: "Bangladesh",
    society: "Bangladesh Perinatal Society",
    flag: "bd",
    path: "/membership/bangladesh",
  },
  {
    country: "Cambodia",
    society: "The Perinatal Society of Cambodia (PSC)",
    flag: "kh",
    path: "/membership/cambodia",
  },
  {
    country: "Indonesia",
    society: "The Indonesian Society of Perinatology (PERINASIA)",
    flag: "id",
    path: "/membership/indonesia",
  },
  {
    country: "Japan",
    society: "Japan Society of Perinatal and Neonatal Medicine",
    flag: "jp",
    path: "/membership/japan",
  },
  {
    country: "Korea",
    society: "The Korean Society of Perinatology",
    flag: "kr",
    path: "/membership/korea",
  },
  {
    country: "Malaysia",
    society: "Perinatal Society of Malaysia",
    flag: "my",
    path: "/membership/malaysia",
  },
  {
    country: "Philippines",
    society: "Perinatal Association Of The Philippines, Inc",
    flag: "ph",
    path: "/membership/philippines",
  },
  {
    country: "Singapore",
    society: "Perinatal Society of Singapore",
    flag: "sg",
    path: "/membership/singapore",
  },
  {
    country: "Taiwan",
    society: "Taiwan Society of Perinatology",
    flag: "tw",
    path: "/membership/taiwan",
  },
  {
    country: "Thailand",
    society: "Perinatal Society of Thailand",
    flag: "th",
    path: "/membership/thailand",
  },
  {
    country: "Vietnam",
    society: "Perinatal Society of Vietnam",
    flag: "vn",
    path: "/membership/vietnam",
  },
  {
    country: "Afghanistan",
    society: "Perinatal Society of Afghanistan",
    flag: "af",
    path: "/membership/afghanistan",
  },
  {
    country: "India",
    society: "Perinatal Society of India",
    flag: "in",
    path: "/membership/india",
  },
  {
    country: "Nepal",
    society: "Perinatal Society of Nepal",
    flag: "np",
    path: "/membership/nepal",
  },
  {
    country: "Pakistan",
    society: "Perinatal Society of Pakistan",
    flag: "pk",
    path: "/membership/pakistan",
  },
  {
    country: "Sri Lanka",
    society: "Perinatal Society of Sri Lanka",
    flag: "lk",
    path: "/membership/sri-lanka",
  },
  {
    country: "United Arab Emirates",
    society: "Perinatal Society of United Arab Emirates",
    flag: "ae",
    path: "/membership/uae",
  },
  {
    country: "Mongolia",
    society: "Perinatal Society of Mongolia",
    flag: "mn",
    path: "/membership/mongolia",
  },
];

export default function CountryDetails() {
  return (
    <>
      <PageHero
        title="Country Details"
        breadcrumb="Home"
      />

      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <span className="uppercase tracking-[5px] text-[#344474] font-semibold">
              Member Societies
            </span>

            <h2 className="text-5xl font-bold text-[#344474] mt-5">
              Country wise Society Presidents & Representatives
            </h2>

            <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-8">
              Explore the member societies of the Federation of
              Asia-Oceania Perinatal Societies (FAOPS). Click on any
              country to view its President, Representatives and
              Society Members.
            </p>

            <div className="w-24 h-1 bg-[#F7DB07] rounded-full mx-auto mt-6"></div>

          </motion.div>

          {/* Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {societies.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
              >

                <Link
                  to={item.path}
                  className="block h-full rounded-[30px] bg-white border border-slate-100 shadow-xl hover:shadow-2xl duration-300 overflow-hidden"
                >

                  {/* Top */}

                 <div className="h-24 bg-gradient-to-r from-[#344474] to-[#5668a7] relative">

  <div className="absolute left-1/2 -translate-x-1/2 top-12">

    <div className="w-24 h-24 rounded-full bg-white shadow-xl border-4 border-white flex items-center justify-center">

      <div className="w-16 h-16 rounded-full overflow-hidden">

        <span
          className={`fi fi-${item.flag}`}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></span>

      </div>

    </div>

  </div>

</div>

                  {/* Bottom */}

                  <div className="pt-16 pb-8 px-7 text-center">

                    <h3 className="text-2xl font-bold text-[#344474]">
                      {item.country}
                    </h3>

                    <p className="mt-4 text-slate-600 leading-7 min-h-[80px]">
                      {item.society}
                    </p>

                    <button className="mt-8 px-6 py-3 rounded-full bg-[#344474] text-white font-semibold hover:bg-[#F7DB07] hover:text-[#344474] duration-300">
                      View Representatives
                    </button>

                  </div>

                </Link>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
    </>
  );
}