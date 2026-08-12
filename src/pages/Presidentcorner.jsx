import { motion } from "framer-motion";
import { Eye, Download } from "lucide-react";
import PageHero from "../components/about/PageHero";
import publications from "../data/publicationsData";

export default function Publications() {
  return (
    <>

    <PageHero
  title="President's Corner"
  breadcrumb="Home"
/>

<section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}

    <div className="text-center mb-16">

      {/* <span className="uppercase tracking-[5px] text-[#344474] font-semibold">
        Leadership Message
      </span> */}

      <h2 className="text-5xl font-bold text-[#344474] mt-4">
        Message from the President
      </h2>

      <div className="w-24 h-1 bg-[#F7DB07] rounded-full mx-auto mt-6"></div>

    </div>

    {/* Main Card */}

    <div className="bg-white/70 backdrop-blur-xl rounded-[35px] border border-white shadow-2xl overflow-hidden">

      <div className="grid lg:grid-cols-3 gap-12 p-10">

        {/* Left */}

        <div className="lg:col-span-2">

          <span className="inline-block bg-[#344474] text-white px-5 py-2 rounded-full text-sm font-semibold">
            President's Message
          </span>

          <h2 className="text-4xl font-bold text-[#344474] mt-6">
            Dear Colleagues, Friends, and Visitors,
          </h2>

          <div className="space-y-6 text-slate-700 leading-8 text-lg mt-8">

            <p>
              Welcome to the official website of the Federation of Asia-Oceania
              Perinatal Societies (FAOPS)!
            </p>

            <p>
              FAOPS has long served as a vital platform for collaboration among
              perinatal health professionals across our diverse region,
              promoting research, education, and policy advancement in maternal
              and neonatal care.
            </p>

            <p>
              The Asia-Oceania region presents both unique challenges and
              significant opportunities in the field of perinatal medicine.
              From rapidly evolving healthcare systems to disparities in
              resources and outcomes, our mission is to bridge these gaps,
              facilitate the exchange of knowledge, and foster innovations that
              ultimately benefit mothers, infants, and families in all member
              countries.
            </p>

          </div>

        </div>

        {/* Right */}

        <div>

          <div className="rounded-[30px] overflow-hidden border-4 border-white shadow-2xl">

            <img
              src="/president.webp"
              alt="Han-Suk Kim"
              className="w-full h-[500px] object-cover"
            />

          </div>

          <div className="mt-6 text-center">

            <h3 className="text-2xl font-bold text-[#344474]">
              Han-Suk Kim
            </h3>

            <p className="text-[#344474] font-semibold mt-2">
              President
            </p>

            <p className="text-slate-500 mt-1">
              Federation of Asia-Oceania
              <br />
              Perinatal Societies (FAOPS)
            </p>

            <p className="text-slate-500 mt-3">
              Republic of Korea
            </p>

          </div>

        </div>

      </div>

    </div>

    {/* Message Continued */}

    <div className="mt-16 bg-white rounded-[35px] shadow-xl border border-slate-100 p-10">

      <div className="space-y-7 text-slate-700 leading-9 text-lg">

        <p>
          As the President, I am committed to strengthening our collective
          voice and expanding FAOPS’s presence within the global perinatal
          community. We will continue to support academic congresses, practical
          workshops, and educational initiatives that empower healthcare
          providers throughout the region.
        </p>

        <p>
          At the same time, we will advocate for equitable access to
          high-quality perinatal care, guided by evidence, compassion, and
          collaboration.
        </p>

        <p>
          I warmly invite you to explore our website, engage with colleagues
          across borders, and join us in our shared mission to improve
          perinatal health outcomes in Asia and Oceania.
        </p>

        <p>
          Thank you for your continued support and dedication.
        </p>

        <div className="pt-10 border-t border-slate-200">

          <p className="text-xl font-semibold text-[#344474]">
            Warm regards,
          </p>

          <h3 className="text-3xl font-bold text-[#344474] mt-5">
            Han-Suk Kim, M.D., Ph.D.
          </h3>

          <p className="mt-2 text-slate-600">
            Republic of Korea
          </p>

          <p className="text-[#344474] font-semibold mt-3">
            President, Federation of Asia-Oceania Perinatal Societies (FAOPS)
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
    
       </>
  );
}