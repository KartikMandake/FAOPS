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
    <section className="py-24 bg-slate-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-16"
        >

          <span className="uppercase tracking-[4px] text-[#344474] font-semibold">
            Our Foundation
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">
            Vision, Mission & Values
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">
            These guiding principles reflect FAOPS's commitment to improving
            maternal and newborn healthcare through education, collaboration,
            innovation, research, and professional excellence.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {data.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .2,
                  duration: .7,
                }}
                whileHover={{
                  y: -12,
                }}
                className={`
                  bg-white
                  rounded-3xl
                  p-10
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
                    w-20
                    h-20
                    rounded-2xl
                    ${item.bg}
                    flex
                    items-center
                    justify-center
                    mb-8
                  `}
                >

                  <Icon
                    className={item.color}
                    size={38}
                  />

                </div>

                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-8">
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