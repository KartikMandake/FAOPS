import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Download } from "lucide-react";
import PageHero from "../components/about/PageHero";

export default function SocietyCongresses() {

  const congresses = [
    { year: "2025", number: "24", city: "Kathmandu", country: "Nepal", download: "#" },
    { year: "2024", number: "23", city: "Seoul", country: "Korea", download: "" },
    { year: "2023", number: "22", city: "Tokyo", country: "Japan", download: "" },
    { year: "2022", number: "21", city: "Kuala Lumpur (Hybrid)", country: "Malaysia", download: "" },
    { year: "2021", number: "-", city: "Jakarta (Cancelled)", country: "Indonesia", download: "" },
    { year: "2020", number: "-", city: "Tokyo (Cancelled)", country: "Japan", download: "" },
    { year: "2018", number: "20", city: "Manila", country: "Philippines", download: "#" },
    { year: "2016", number: "19", city: "Taipei", country: "Taiwan", download: "#" },
    { year: "2014", number: "18", city: "Dhaka", country: "Bangladesh", download: "#" },
    {
      year: "2012",
      number: "17",
      city: "Sydney",
      country: "Australia",
      download: "https://pubmed.ncbi.nlm.nih.gov/22454843/",
    },
    { year: "2010", number: "16", city: "New Delhi", country: "India", download: "" },
    { year: "2008", number: "15", city: "Nagoya", country: "Japan", download: "" },
    { year: "2006", number: "14", city: "Bangkok", country: "Thailand", download: "" },
    { year: "2004", number: "13", city: "Kuala Lumpur", country: "Malaysia", download: "" },
    { year: "2002", number: "12", city: "Christchurch", country: "New Zealand", download: "" },
    { year: "2000", number: "11", city: "Manila", country: "Philippines", download: "" },
    { year: "1998", number: "10", city: "Seoul", country: "Korea", download: "" },
    { year: "1996", number: "9", city: "Singapore", country: "Singapore", download: "" },
    { year: "1994", number: "8", city: "Taipei", country: "Taiwan", download: "" },
    { year: "1992", number: "7", city: "Bangkok", country: "Thailand", download: "" },
    { year: "1990", number: "6", city: "Perth", country: "Australia", download: "" },
    { year: "1988", number: "5", city: "Bali", country: "Indonesia", download: "" },
    { year: "1986", number: "4", city: "Tokyo", country: "Japan", download: "" },
    { year: "1984", number: "3", city: "Calcutta", country: "India", download: "" },
    { year: "1982", number: "2", city: "Auckland", country: "New Zealand", download: "" },
    { year: "1980", number: "1", city: "Singapore", country: "Singapore", download: "" },
  ];

  const [search, setSearch] = useState("");

  const filtered = congresses.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <PageHero
        title="Society Congresses"
        breadcrumb="Medical Association Congress"
      />

      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <h2 className="text-5xl font-bold text-[#344474]">
              Society Congresses
            </h2>

            <div className="w-24 h-1 bg-[#F7DB07] rounded-full mx-auto mt-5 mb-7"></div>

            <p className="max-w-4xl mx-auto text-slate-600 leading-8 text-lg">
              Attending medical association congresses can be a valuable way to
              stay connected with industry trends, network with peers, and
              enhance your professional development.
            </p>

          </motion.div>

          {/* Search */}

          <div className="flex justify-end mt-12 mb-8">

            <div className="relative w-full md:w-96">

              <Search
                size={18}
                className="absolute left-4 top-4 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-5 py-3 rounded-xl border border-slate-200 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-[#344474]"
              />

            </div>

          </div>

                    {/* Table */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[30px] bg-white/80 backdrop-blur-xl border border-white shadow-2xl"
          >

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-[#344474] text-white">

                  <tr>

                    <th className="px-6 py-5 text-left font-semibold">
                      Year
                    </th>

                    <th className="px-6 py-5 text-left font-semibold">
                      Congress Number
                    </th>

                    <th className="px-6 py-5 text-left font-semibold">
                      City
                    </th>

                    <th className="px-6 py-5 text-left font-semibold">
                      Country
                    </th>

                    <th className="px-6 py-5 text-center font-semibold">
                      Download
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filtered.map((item, index) => (

                    <tr
                      key={index}
                      className="border-b border-slate-100 hover:bg-blue-50/50 transition duration-300"
                    >

                      <td className="px-6 py-5 font-semibold text-[#344474]">
                        {item.year}
                      </td>

                      <td className="px-6 py-5">
                        {item.number}
                      </td>

                      <td className="px-6 py-5">
                        {item.city}
                      </td>

                      <td className="px-6 py-5">
                        {item.country}
                      </td>

                      <td className="px-6 py-5 text-center">

                        {item.download ? (

                          item.download.startsWith("http") ? (

                            <a
                              href={item.download}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#344474] text-white hover:bg-[#23315c] transition"
                            >
                              View
                            </a>

                          ) : (

                            <a
                              href={item.download}
                              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#344474] text-white hover:bg-[#23315c] transition"
                            >
                              <Download size={18} />
                              Download
                            </a>

                          )

                        ) : (

                          <span className="inline-block px-4 py-2 rounded-full bg-slate-100 text-slate-500 font-medium">
                            NA
                          </span>

                        )}

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </motion.div>

          {/* Bottom Note */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >

            <div className="rounded-[30px] bg-white/70 backdrop-blur-xl border border-white shadow-xl p-10">

              <h3 className="text-3xl font-bold text-[#344474]">
                FAOPS Congress Archive
              </h3>

              <div className="w-20 h-1 bg-[#F7DB07] rounded-full mx-auto my-5"></div>

              <p className="text-slate-600 max-w-3xl mx-auto leading-8">
                The Federation of Asia-Oceania Perinatal Societies has organized
                scientific congresses across Asia and Oceania since 1980,
                bringing together clinicians, researchers, educators, and
                healthcare professionals to advance maternal, fetal, and
                neonatal care through collaboration, innovation, and knowledge
                sharing.
              </p>

            </div>

          </motion.div>

        </div>

      </section>

    </>

  );

}