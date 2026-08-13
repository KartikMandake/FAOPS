import { motion } from "framer-motion";
import {
  Eye,
  Target,
  HeartHandshake,
} from "lucide-react";

const data = [
  {
    icon: Eye,
    title: "Vision",
    color: "text-[#344474]",
    bg: "bg-[#344474]/10",
    border: "border-[#344474]/20",
    description:
      "To be the leading advocate and knowledge hub for perinatal care across Asia and Oceania by driving innovation, promoting collaboration, advancing research, and ensuring healthier mothers and newborns.",
  },

  {
    icon: Target,
    title: "Mission",
    color: "text-[#F7DB07]",
    bg: "bg-yellow-100",
    border: "border-yellow-300",
    description:
      "FAOPS is dedicated to advancing perinatal healthcare through excellence in education, scientific research, collaboration, and professional development while empowering healthcare providers throughout the region.",
  },

  {
    icon: HeartHandshake,
    title: "Values",
    color: "text-green-600",
    bg: "bg-green-100",
    border: "border-green-200",
    description:
      "Excellence • Empathy • Innovation • Integrity • Inclusivity • Collaboration — these principles guide every initiative and partnership undertaken by FAOPS.",
  },
];

export default function VisionMission() {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-slate-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-10 sm:mb-16"
        >

          <span className="uppercase tracking-[3px] sm:tracking-[4px] text-[#344474] text-xs sm:text-sm font-semibold">
            Our Foundation
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mt-2 sm:mt-4 text-slate-900">
            Vision, Mission & Values
          </h2>

          <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-slate-600 leading-relaxed sm:leading-8 text-sm sm:text-base">
            These guiding principles reflect FAOPS's commitment to improving
            maternal and newborn healthcare through education, collaboration,
            innovation, research, and professional excellence.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {data.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .15,
                  duration: .6,
                }}
                whileHover={{
                  y: -8,
                }}
                className={`
                  bg-white
                  rounded-2xl
                  sm:rounded-3xl
                  p-6
                  sm:p-8
                  lg:p-10
                  border
                  ${item.border}
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-300
                `}
              >

                <div
                  className={`
                    w-16
                    h-16
                    sm:w-20
                    sm:h-20
                    rounded-2xl
                    ${item.bg}
                    flex
                    items-center
                    justify-center
                    mb-6
                    sm:mb-8
                  `}
                >

                  <Icon
                    className={item.color}
                    size={32}
                  />

                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed sm:leading-8 text-sm sm:text-base">
                  {item.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}