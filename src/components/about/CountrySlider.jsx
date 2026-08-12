import { motion } from "framer-motion";

const countries = [
  { name: "Cambodia", flag: "kh" },
  { name: "India", flag: "in" },
  { name: "Indonesia", flag: "id" },
  { name: "Japan", flag: "jp" },
  { name: "Korea", flag: "kr" },
  { name: "Malaysia", flag: "my" },
  { name: "Singapore", flag: "sg" },
  { name: "Thailand", flag: "th" },
  { name: "Vietnam", flag: "vn" },
  { name: "Bangladesh", flag: "bd" },
  { name: "Nepal", flag: "np" },
  { name: "Pakistan", flag: "pk" },
  { name: "Philippines", flag: "ph" },
  { name: "Taiwan", flag: "tw" },
  { name: "Australia", flag: "au" },
  { name: "New Zealand", flag: "nz" },
  { name: "Afghanistan", flag: "af" },
  { name: "United Arab Emirates", flag: "ae" },
  { name: "Sri Lanka", flag: "lk" },
  { name: "Mongolia", flag: "mn" },
];

export default function CountrySlider() {
  return (
    <section className="py-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="uppercase tracking-[4px] text-[#344474] font-semibold">
            Member Countries
          </span>

          {/* <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">
            FAOPS Member Nations
          </h2> */}
{/* 
          <p className="mt-5 text-slate-600 max-w-3xl mx-auto leading-8">
            Our federation unites perinatal healthcare professionals,
            researchers and organizations from across Asia and Oceania,
            strengthening collaboration and advancing maternal and
            newborn healthcare.
          </p> */}

        </div>

      </div>

      {/* Slider */}

      <div className="relative">

        <motion.div
          className="flex gap-8 w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...countries, ...countries].map((country, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              transition={{
                duration: .3,
              }}
              className="
              w-72
              rounded-3xl
              overflow-hidden
              bg-white
              shadow-xl
              border
              border-slate-100
              "
            >

             <div className="flex justify-center pt-10 pb-6 bg-gradient-to-br from-[#344474] to-[#4b5d97]">

  <div className="w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-[#F7DB07]">

    <span
      className={`fi fi-${country.flag} rounded-full text-[70px]`}
    ></span>

  </div>

</div>

              <div className="p-6 text-center">

                <h3 className="text-2xl font-bold text-[#344474]">
                  {country.name}
                </h3>

                <p className="text-slate-500 mt-2">
                  FAOPS Member Country
                </p>

              </div>

            </motion.div>

          ))}
        </motion.div>

      </div>

    </section>
  );
}