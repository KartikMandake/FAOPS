import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin, Users } from "lucide-react";

import PageHero from "../components/about/PageHero";
import membershipData from "../data/membershipData";
import { navLinks } from "../data/navLinks";

/**
 * The single membership page. It renders one of three views based on the route:
 *
 *   /membership           -> index of every member society, grouped by region
 *   /membership/:country  -> that country's executive committee
 *   unknown :country      -> not found
 */
export default function Membership() {
  const { country } = useParams();

  if (!country) return <MembershipIndex />;

  const data = membershipData[country];

  if (!data) return <CountryNotFound />;

  return <CountryDetail data={data} />;
}

/* ============================================================
   Shared helpers
   ============================================================ */

/**
 * Build the region -> country index straight from the nav tree, so this page
 * can never drift from the Membership menu. Countries whose nav path has no
 * matching `membershipData` entry are skipped rather than rendered as dead
 * links.
 */
function buildRegions() {
  const membership = navLinks.find((item) => item.title === "Membership");

  return (membership?.children || [])
    .map((region) => ({
      title: region.title,
      countries: (region.children || [])
        .map((leaf) => {
          const key = leaf.path?.split("/").filter(Boolean).pop();
          const data = key ? membershipData[key] : undefined;

          return data ? { key, path: leaf.path, ...data } : null;
        })
        .filter(Boolean),
    }))
    .filter((region) => region.countries.length > 0);
}

/**
 * Circular white-framed flag. `pad` is a prop rather than part of `className`
 * so callers can't end up with two competing padding utilities.
 */
const FlagCircle = ({ flag, className = "", pad = "p-2" }) => (
  <div
    className={`rounded-full bg-white ring-1 ring-slate-200 ${pad} ${className}`}
  >
    <div className="w-full h-full rounded-full overflow-hidden">
      <span
        className={`fi fi-${flag}`}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  </div>
);

/* ============================================================
   View: index (/membership)
   ============================================================ */

function MembershipIndex() {
  const regions = buildRegions();

  const totalCountries = regions.reduce(
    (sum, region) => sum + region.countries.length,
    0
  );

  return (
    <>
      <PageHero
        title="Membership"
        breadcrumb="Home"
        currentPage="Membership"
      />

      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="uppercase tracking-[4px] text-[#344474] font-semibold text-sm">
              Member Societies
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#344474] mt-3">
              FAOPS Member Countries
            </h2>

            <div className="w-24 h-1 bg-[#F7DB07] rounded-full mx-auto my-6" />

            <p className="text-slate-600 max-w-2xl mx-auto leading-8">
              {totalCountries} perinatal societies across {regions.length}{" "}
              regions of Asia and Oceania. Select a country to view its
              executive committee.
            </p>
          </motion.div>

          {/* Regions */}

          <div className="space-y-16">

            {regions.map((region) => (

              <section key={region.title}>

                <div className="flex flex-wrap items-center gap-4 mb-8">

                  <span className="inline-flex items-center gap-2 rounded-full bg-[#344474] text-white px-5 py-2 text-sm font-semibold">
                    <MapPin size={16} className="text-[#F7DB07]" />
                    {region.title}
                  </span>

                  <span className="text-sm text-slate-500">
                    {region.countries.length}{" "}
                    {region.countries.length === 1 ? "society" : "societies"}
                  </span>

                  <div className="hidden md:block flex-1 h-px bg-slate-200" />

                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                  {region.countries.map((item, index) => (

                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: Math.min(index * 0.06, 0.3),
                      }}
                      whileHover={{ y: -6 }}
                    >

                      <Link
                        to={item.path}
                        className="group flex h-full items-center gap-5 rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl hover:border-[#344474]/30 p-6 transition-all"
                      >

                        <FlagCircle
                          flag={item.flag}
                          pad="p-1.5"
                          className="w-16 h-16 shrink-0 shadow-sm"
                        />

                        <div className="min-w-0 flex-1">

                          <h3 className="text-lg font-bold text-[#344474] leading-snug">
                            {item.title}
                          </h3>

                          <p className="mt-1.5 flex items-center gap-2 text-sm text-slate-500">
                            <Users size={15} className="text-[#344474]" />
                            {item.members.length}{" "}
                            {item.members.length === 1
                              ? "office bearer"
                              : "office bearers"}
                          </p>

                        </div>

                        <ArrowRight
                          size={20}
                          className="shrink-0 text-slate-300 group-hover:text-[#344474] group-hover:translate-x-1 transition-all"
                        />

                      </Link>

                    </motion.div>

                  ))}

                </div>

              </section>

            ))}

          </div>

        </div>

      </section>
    </>
  );
}

/* ============================================================
   View: country detail (/membership/:country)
   ============================================================ */

function CountryDetail({ data }) {
  return (
    <>
      <PageHero
        title={data.title}
        breadcrumb="Membership"
        currentPage={data.title}
      />

      <section className="py-10 bg-gradient-to-br from-slate-50 via-blue-50 to-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* Back Button */}

          <Link
            to="/membership"
            className="inline-flex items-center gap-2 mb-6 text-[#344474] hover:text-[#F7DB07] font-semibold duration-300"
          >
            <ArrowLeft size={18} />
            Back to Membership
          </Link>

          {/* ================= HEADER ================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="h-16 md:h-20 rounded-[20px] md:rounded-[35px] bg-gradient-to-r from-[#344474] via-[#4c63a0] to-[#344474] shadow-xl relative overflow-hidden">

              {/* Decorative */}

              <div className="absolute -left-12 -top-12 w-52 h-52 rounded-full bg-white/10"></div>

              <div className="absolute right-0 bottom-0 w-64 h-64 rounded-full bg-[#F7DB07]/10"></div>

            </div>

            {/* Flag */}

            <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 md:-bottom-14">

              <FlagCircle
                flag={data.flag}
                className="w-24 h-24 md:w-28 md:h-28 shadow-[0_16px_40px_rgba(52,68,116,.20)]"
              />

            </div>

          </motion.div>

          {/* Country */}
          {/* Top margin clears the flag overhang plus breathing room. */}

          <div className="text-center mt-16 md:mt-20">

            <h1 className="text-4xl md:text-5xl font-bold text-[#344474]">
              {data.title}
            </h1>

            <div className="w-20 h-1 rounded-full bg-[#F7DB07] mx-auto mt-5"></div>

          </div>

          {/* Section Heading */}

          <div className="text-center mt-14 mb-12">

            <span className="uppercase tracking-[4px] text-[#344474] font-semibold">
              Executive Committee
            </span>

          </div>

          {/* ================= MEMBERS ================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {data.members.map((member, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[30px] shadow-xl overflow-hidden border border-slate-200"
              >

                {/* Card Top */}

                <div className="h-24 bg-gradient-to-r from-[#344474] to-[#4962a1]"></div>

                {/* Image */}

                <div className="-mt-14 flex justify-center">

                  <div className="w-32 h-32 rounded-full border-[6px] border-white shadow-xl overflow-hidden bg-white">

                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />

                  </div>

                </div>

                {/* Details */}

                <div className="px-8 pt-6 pb-8 text-center">

                  <h3 className="text-2xl font-bold text-[#344474]">
                    {member.name}
                  </h3>

                  <div className="mt-4">

                    <span className="text-[#344474] px-5 py-2 rounded-full text-sm font-bold">
                      {member.designation}
                    </span>

                  </div>

                  {member.description && (

                    <p className="mt-5 text-slate-600 leading-7">
                      {member.description}
                    </p>

                  )}

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
    </>
  );
}

/* ============================================================
   View: unknown country
   ============================================================ */

function CountryNotFound() {
  return (
    <>
      <PageHero title="Membership" breadcrumb="Home" currentPage="Membership" />

      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#344474]">
            Country Not Found
          </h2>

          <p className="text-slate-500 mt-4">
            This member society page isn't available yet.
          </p>

          <Link
            to="/membership"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#344474] hover:bg-[#22345f] text-white font-semibold transition-all"
          >
            <ArrowLeft size={18} />
            Back to Membership
          </Link>
        </div>
      </div>
    </>
  );
}
