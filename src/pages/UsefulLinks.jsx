import { useState } from "react";
import PageHero from "../components/about/PageHero";

export default function UsefulLinksTable() {
  const data = [
    {
      id: 1,
      name: "World Congress of Perinatal Medicine (2021)",
      link: "https://www.perinatalmedicine.org/",
      category: "Congress",
    },
    {
      id: 2,
      name: "Cochrane Neonatal Review on Phototherapy",
      link: "https://public.vtoxford.org",
      category: "Research",
    },
    {
      id: 3,
      name: "COGI Congress (Obstetrics & Gynecology)",
      link: "https://cogi-congress.org/",
      category: "Conference",
    },
    {
      id: 4,
      name: "World Association of Perinatal Medicine",
      link: "http://www.wapm.info/",
      category: "Organization",
    },
  ];

  const [search, setSearch] = useState("");

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const getBadgeColor = (type) => {
    switch (type) {
      case "Congress":
        return "bg-blue-100 text-blue-700";
      case "Research":
        return "bg-green-100 text-green-700";
      case "Conference":
        return "bg-purple-100 text-purple-700";
      case "Organization":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    
    <div className="min-h-screen bg-gray-50 py-0 px-0">
      {/* Header */}
      <PageHero
              title="Other Links"
              breadcrumb="Home"
            />
      
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-md rounded-xl p-6 mb-6 border">
          <h1 className="text-2xl font-bold text-gray-800">
            Useful Links

          </h1>
          <p className="text-gray-500 text-sm">
            Medical Association <br></br>Links to FAOPS related organizasions
          </p>

          {/* Search */}
          <input
            type="text"
            placeholder="Search links..."
            className="mt-4 w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table Card */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden border">
          <table className="w-full">
            <thead className="bg-[#344474] text-white">
              <tr>
                <th className="p-4 text-left">Sr.No.</th>
                <th className="p-4 text-left">Details</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Links</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium text-gray-700">
                    {index + 1}
                  </td>

                  <td className="p-4 text-gray-800">
                    {item.name}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-xs rounded-full font-medium ${getBadgeColor(
                        item.category
                      )}`}
                    >
                      {item.category}
                    </span>
                  </td>

                  <td className="p-4">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Visit →
                    </a>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center p-6 text-gray-500"
                  >
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-400 mt-4">
          Showing {filtered.length} entries
        </div>
      </div>
    </div>
  );
}