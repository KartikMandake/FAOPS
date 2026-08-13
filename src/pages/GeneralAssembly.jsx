import { motion } from "framer-motion";
import { Download, Search } from "lucide-react";
import { useState } from "react";
import PageHero from "../components/about/PageHero";

export default function GeneralAssembly() {
  const [activeTab, setActiveTab] = useState(1);

  const meetings = [
  {
    date: "July 19, 2025",
    meeting: "MoM of Third FAOPS Council Meeting",
    venue: "Online",
    file: "/meetings/MoM-3rd-Council-meeting-of-year-2025-held-on-19.07.25.docx",
  },
  {
    date: "April 26, 2025",
    meeting: "MoM of Second FAOPS Council Meeting",
    venue: "Online",
    file: "/meetings/MoM-2nd-Council-meeting-of-year-2025-held-on-26.04.2.docx",
  },
  {
    date: "Jan 18, 2025",
    meeting: "MoM of First FAOPS Council Meeting",
    venue: "Conference Hall of the MOH, Ulaanbaatar, Mongolia",
    file: "/meetings/MoM-1st-Council-meeting-of-year-2025-held-on-18.01.25.docx",
  },
  {
    date: "Dec 21, 2024",
    meeting: "MoM of Sixth FAOPS Council Meeting",
    venue: "Online",
    file: "/meetings/MoM-6th-Council-meeting-of-year-2024-held-on-21.12.24.docx",
  },
  {
    date: "Nov 30, 2024",
    meeting: "MoM of Fifth FAOPS Council Meeting",
    venue: "Online",
    file: "/meetings/MoM-5th-Council-meeting-of-year-2024-V2-held-on-30.11.24-Sam.docx",
  },
  {
    date: "Sep 6, 2024",
    meeting: "FAOPS General Assembly 2024",
    venue: "Room 3, Coex, Seoul",
    file: "/meetings/MoM-of-AGM-of-year-2024-held-on-06.09.24.pdf",
  },
  {
    date: "Aug 11, 2024",
    meeting: "MoM of Third FAOPS Council Meeting",
    venue: "Web",
    file: "/meetings/MoM-3rd-Council-meeting-of-year-2024-held-on-11.08.24.docx",
  },
  {
    date: "May 11, 2024",
    meeting: "MoM of Second FAOPS Council Meeting",
    venue: "Web",
    file: "/meetings/MoM-2nd-Council-meeting-of-year-2024-held-on-11.05.24.docx",
  },
  {
    date: "Jan 20, 2024",
    meeting: "MoM of First FAOPS Council Meeting",
    venue: "Web",
    file: "/meetings/MoM-1st-Council-meeting-of-year-2025-held-on-20.01.24.docx",
  },
  {
    date: "Oct 07, 2023",
    meeting: "Council Meeting",
    venue: "Onsite",
    file: "/meetings/MoM-3rd-Council-meeting-held-on-07.10.23-1.pdf",
  },
];

const tab2Meetings = [
  {
    date: "Oct 08, 2023",
    meeting: "General Assembly",
    venue: "NA",
    download: "Snaps",
    file: "https://photos.google.com/share/AF1QipPj4jH-nhCYVfmUcDVCTLlw-ZRZd1BvhSFvHZmwLBSOY7Q4e6M1MCzjetjcmvP9LA?key=S2NpSXotckEtSVNmWWY1R3RUUnZMWFR5TmpYQ0Rn",
  },
  {
    date: "Oct 08, 2023",
    meeting: "MoM, AGM",
    venue: "Hana A, Main Tower 4F, Keio Plaza Hotel, Tokyo",
    download: "Download",
    file: "/meetings/MoM-AGM-8.10.2023.docx",
  },
  {
    date: "May 20, 2023",
    meeting: "Council Meeting",
    venue: "Web",
    download: "Download",
    file: "/meetings/MoM-2nd-Council-meeting-held-on-20.05.23.pdf",
  },
  {
    date: "Feb 11, 2023",
    meeting: "Council Meeting",
    venue: "Web",
    download: "Download",
    file: "/meetings/MoM-1st-Council-meeting-held-on-11.2.23.pdf",
  },
  {
    date: "Dec 17, 2022",
    meeting: "General Assembly (Additional)",
    venue: "Web",
    download: "Download",
    file: "/meetings/MoM_AGM_20221217.pdf",
  },
  {
    date: "Oct 01, 2022",
    meeting: "Council Meeting",
    venue: "Web",
    download: "Download",
    file: "/meetings/councilmeeting20221001.pdf",
  },
  {
    date: "Aug 27, 2022",
    meeting: "General Assembly",
    venue: "Web",
    download: "Download",
    file: "/meetings/generalassembly20220827.pdf",
  },
  {
    date: "Aug 19, 2022",
    meeting: "Council Meeting",
    venue: "Mail",
    download: "Download",
    file: "/meetings/councilmeeting20220819.pdf",
  },
  {
    date: "Jun 18, 2022",
    meeting: "Council Meeting",
    venue: "Web",
    download: "Download",
    file: "/meetings/councilmeeting20220618.pdf",
  },
  {
    date: "Mar 26, 2022",
    meeting: "Council Meeting",
    venue: "Web",
    download: "Download",
    file: "/meetings/councilmeeting20220326.pdf",
  },
];

const tab3Meetings = [
  {
    date: "Dec 18, 2021",
    meeting: "FAOPS General Assembly",
    download: "Download",
    venue: "Web",
    file: "/meetings/generalassembly20211218.pdf",
  },
  {
    date: "Dec 4, 2021",
    meeting: "Council Meeting",
    download: "Download",
    // venue: "Taj Samudra Hotel, Colombo",
    venue: "Web",
    file: "/meetings/councilmeeting20211204.pdf",
  },
  {
    date: "Sep 11, 2021",
    meeting: "Council Meeting",
    download: "Download",
    // venue: "ANA Crowne Plaza Hotel, Toyama",
    venue: "Web",
    file: "/meetings/councilmeeting20210911.pdf",
  },
  {
    date: "Jun 26, 2021",
    meeting: "Council Meeting",
    download: "Download",
    venue: "Web",
    file: "/meetings/councilmeeting20210626.pdf",
  },
  {
    date: "Mar 27, 2021",
    meeting: "Council Meeting",
    download: "Download",
    venue: "Web",
    file: "/meetings/councilmeeting20210327.pdf",
  },
  {
    date: "Dec 19, 2020",
    meeting: "General Assembly",
    download: "Download",
    venue: "Web",
    file: "/meetings/generalassembly20201219.pdf",
  },
  {
    date: "Nov 19, 2020",
    meeting: "Council Meeting",
    download: "NA",
    venue: "Web",
    file: "#",
  },
  {
    date: "Sep 16, 2020",
    meeting: "Council Meeting",
    download: "NA",
    venue: "Web",
    file: "#",
  },
  {
    date: "Aug 15, 2020",
    meeting: "Council Meeting",
    download: "NA",
    venue: "Web",
    file: "#",
  },
  {
    date: "May 14, 2020",
    meeting: "Council Meeting",
    download: "Download",
    venue: "Web",
    file: "/meetings/councilmeeting20200514.pdf",
  },
];

const tab4Meetings = [
  {
    date: "Sept 25, 2018",
    meeting: "2nd Council Meeting",
    venue: "Manila Hotel, Manila",
    download: "Download",
    file: "/meetings/2ndcouncilmeeting20180925.pdf",
  },
  {
    date: "Sept 23, 2018",
    meeting: "General Assembly",
    venue: "Manila Hotel, Manila",
    download: "Download",
    file: "/meetings/generalassembly20180924.pdf",
  },
  {
    date: "Sept 23, 2018",
    meeting: "1st Council Meeting",
    venue: "Manila Hotel, Manila",
    download: "Download",
    file: "/meetings/1stcouncilmeeting20180923.pdf",
  },
  {
    date: "Dec 3, 2016",
    meeting: "2nd Council Meeting",
    venue: "Madison Hotel, Taipei",
    download: "Download",
    file: "/meetings/2ndcouncilmeeting20161203.pdf",
  },
  {
    date: "Dec 2, 2016",
    meeting: "General Assembly",
    venue: "Taipei International Convention Center, Taipei",
    download: "Download",
    file: "/meetings/generalassembly20161202.pdf",
  },
  {
    date: "Dec 2, 2016",
    meeting: "1st Council Meeting",
    venue: "Taipei International Convention Center, Taipei",
    download: "Download",
    file: "/meetings/1stcouncilmeeting20161202.pdf",
  },
  {
    date: "July 18, 2016",
    meeting: "Council Meeting",
    venue: "ANA Crowne Plaza Hotel, Toyama",
    download: "Download",
    file: "/meetings/councilmeeting20160718.pdf",
  },
  {
    date: "July 27, 2015",
    meeting: "Council Meeting",
    venue: "Taj Samudra Hotel, Colombo",
    download: "Download",
    file: "/meetings/councilmeeting20150727.pdf",
  },
  {
    date: "Nov 8, 2014",
    meeting: "2nd Council Meeting",
    venue: "Bangabandhu International Conference Center, Dhaka",
    download: "Download",
    file: "/meetings/2ndcouncilmeeting20141108.pdf",
  },
  {
    date: "Nov 7, 2014",
    meeting: "General Assembly",
    venue: "Bangabandhu International Conference Center, Dhaka",
    download: "Download",
    file: "/meetings/generalassembly20141107.pdf",
  },
];

const tab5Meetings = [
  {
    date: "Nov 6, 2014",
    meeting: "1st Council Meeting",
    venue: "Bangabandhu International Conference Center, Dhaka",
    download: "Download",
    file: "/meetings/1stcouncilmeeting20141106.pdf",
  },
  {
    date: "Mar 20, 2012",
    meeting: "2nd Council Meeting",
    venue: "Sydney Convention and Exhibition Centre, Sydney",
    download: "Download",
    file: "/meetings/2ndcouncilmeeting20120320.pdf",
  },
  {
    date: "Mar 19, 2012",
    meeting: "General Assembly",
    venue: "Sydney Convention and Exhibition Centre, Sydney",
    download: "NA",
    file: "",
  },
  {
    date: "Mar 18, 2012",
    meeting: "1st Council Meeting",
    venue: "Sydney Convention and Exhibition Centre, Sydney",
    download: "NA",
    file: "",
  },
  {
    date: "Dec 16, 2010",
    meeting: "2nd Council Meeting",
    venue: "Hotel Ashoka, New Delhi",
    download: "Download",
    file: "/meetings/2ndcouncilmeeting20101216.pdf",
  },
  {
    date: "Dec 15, 2010",
    meeting: "General Assembly",
    venue: "Hotel Ashoka, New Delhi",
    download: "NA",
    file: "",
  },
  {
    date: "Dec 14, 2010",
    meeting: "1st Council Meeting",
    venue: "Hotel Ashoka, New Delhi",
    download: "NA",
    file: "",
  },
  {
    date: "May 23, 2008",
    meeting: "2nd Council Meeting",
    venue: "Nagoya Congress Centre, Nagoya",
    download: "Download",
    file: "/meetings/2ndcouncilmeeting20080523.pdf",
  },
  {
    date: "May 22, 2008",
    meeting: "General Assembly",
    venue: "Nagoya Congress Centre, Nagoya",
    download: "Download",
    file: "/meetings/generalassembly20080522.pdf",
  },
  {
    date: "May 20, 2008",
    meeting: "1st Council Meeting",
    venue: "Nagoya Congress Centre, Nagoya",
    download: "Download",
    file: "/meetings/1stcouncilmeeting20080520.pdf",
  },
];

  return (
    <>
      <PageHero
        title="General Assembly"
        breadcrumb="Home"
      />

      <section className="py-10 sm:py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#344474]">
              General Assembly Meetings
            </h2>

            <div className="w-16 sm:w-24 h-1 bg-[#F7DB07] rounded-full mx-auto mt-4 sm:mt-5 mb-4 sm:mb-6"></div>

            <p className="text-slate-600 max-w-4xl mx-auto leading-relaxed sm:leading-8 text-sm sm:text-lg">
              It brings together all members of the association, including
              representatives from various specialties and regions.
            </p>

            <p className="text-slate-600 max-w-5xl mx-auto leading-relaxed sm:leading-8 mt-3 sm:mt-4 text-xs sm:text-base">
              General Assembly Meetings are large-scale, periodic gatherings of
              all association members, where major decisions and strategic
              direction are set. Council Meetings are smaller, more frequent
              meetings attended by the association's leadership to handle
              operational matters and facilitate efficient day-to-day
              functioning.
            </p>
          </motion.div>

          {/* Tabs */}

          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {[1, 2, 3, 4, 5].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-12 h-12 rounded-full font-bold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#344474] text-white"
                    : "bg-white text-[#344474] border border-[#344474]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search */}

          <div className="flex justify-end mb-6">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search..."
                className="border rounded-lg pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-[#344474]"
              />
            </div>
          </div>

          {/* Table */}

          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">

            <table className="w-full">

              <thead className="bg-[#344474] text-white">

                <tr>
                  <th className="px-6 py-4 text-left">Date</th>
                  <th className="px-6 py-4 text-left">Type of Meeting</th>
                  <th className="px-6 py-4 text-center">Download</th>
                  <th className="px-6 py-4 text-left">Venue</th>
                </tr>

              </thead>

              <tbody>

                {activeTab === 1 &&
                  meetings.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-slate-50"
                    >
                      <td className="px-6 py-5">{item.date}</td>

                      <td className="px-6 py-5 font-medium text-[#344474]">
                        {item.meeting}
                      </td>

                      <td className="px-6 py-5 text-center">
                        <a
                          href={item.file}
                          className="inline-flex items-center gap-2 bg-[#344474] text-white px-4 py-2 rounded-full font-semibold hover:[#344474] transition"
                        >
                          <Download size={16} />
                          Download
                        </a>
                      </td>

                      <td className="px-6 py-5">{item.venue}</td>
                    </tr>
                  ))}
                  {activeTab === 2 &&
  tab2Meetings.map((item, index) => (
    <tr key={index} className="border-b hover:bg-slate-50">
      <td className="px-6 py-5">{item.date}</td>

      <td className="px-6 py-5 font-medium text-[#344474]">
        {item.meeting}
      </td>

      <td className="px-6 py-5 text-center">
        {item.download === "NA" ? (
          <span className="text-gray-500 font-medium">NA</span>
        ) : (
          <a
            href={item.file}
            className="inline-flex items-center gap-2 bg-[#344474] text-[#fff] px-4 py-2 rounded-full font-semibold hover:bg-yellow-400"
          >
            {item.download}
          </a>
        )}
      </td>

      <td className="px-6 py-5">{item.venue}</td>
    </tr>
  ))}
  {activeTab === 3 &&
  tab3Meetings.map((item, index) => (
    <tr key={index} className="border-b hover:bg-slate-50">
      <td className="px-6 py-5">{item.date}</td>

      <td className="px-6 py-5 font-medium text-[#344474]">
        {item.meeting}
      </td>

      <td className="px-6 py-5 text-center">
        {item.download === "NA" ? (
          <span className="text-gray-500 font-medium">NA</span>
        ) : (
          <a
            href={item.file}
            className="inline-flex items-center bg-[#344474] text-[#fff] px-4 py-2 rounded-full font-semibold hover:bg-yellow-400"
          >
            {item.download}
          </a>
        )}
      </td>

      <td className="px-6 py-5">{item.venue}</td>
    </tr>
  ))}
  {activeTab === 4 &&
  tab4Meetings.map((item, index) => (
    <tr key={index} className="border-b hover:bg-slate-50">
      <td className="px-6 py-5">{item.date}</td>

      <td className="px-6 py-5 font-medium text-[#344474]">
        {item.meeting}
      </td>

      <td className="px-6 py-5 text-center">
        <a
          href={item.file}
          className="inline-flex items-center bg-[#344474] text-[#fff] px-4 py-2 rounded-full font-semibold hover:bg-yellow-400"
        >
          {item.download}
        </a>
      </td>

      <td className="px-6 py-5">{item.venue}</td>
    </tr>
  ))}
  {activeTab === 5 &&
  tab5Meetings.map((item, index) => (
    <tr key={index} className="border-b hover:bg-slate-50">
      <td className="px-6 py-5">{item.date}</td>

      <td className="px-6 py-5 font-medium text-[#344474]">
        {item.meeting}
      </td>

      <td className="px-6 py-5 text-center">
        {item.download === "NA" ? (
          <span className="text-gray-500 font-medium">NA</span>
        ) : (
          <a
            href={item.file}
            className="inline-flex items-center bg-[#344474] text-[#fff] px-4 py-2 rounded-full font-semibold hover:bg-yellow-400"
          >
            {item.download}
          </a>
        )}
      </td>

      <td className="px-6 py-5">{item.venue}</td>
    </tr>
  ))}

                {/* {activeTab !== 1 && (
                  <tr>
                    <td
                      colSpan="4"
                      className="text-center py-16 text-gray-500 text-lg"
                    >
                      Data will be added for Tab {activeTab}.
                    </td>
                  </tr>
                )} */}

                

              </tbody>

            </table>

          </div>

          {/* Footer */}

          <div className="flex justify-between items-center mt-8 flex-wrap gap-4">

            <p className="text-slate-600">
              Showing 1 to 10 of 50 entries
            </p>

            <div className="flex gap-2">

              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setActiveTab(page)}
                  className={`w-10 h-10 rounded-lg font-semibold transition ${
                    activeTab === page
                      ? "bg-[#344474] text-white"
                      : "bg-white border border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}

            </div>

          </div>

        </div>
      </section>
    </>
  );
}