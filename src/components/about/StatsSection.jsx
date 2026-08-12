import { motion } from "framer-motion";
import { CalendarClock, Users, Globe2 } from "lucide-react";

const stats = [
  {
    icon: CalendarClock,
    number: "45+",
    title: "Years",
    description: "Serving the perinatal community since 1980.",
  },
  {
    icon: Users,
    number: "70+",
    title: "Members",
    description: "Healthcare professionals and member societies.",
  },
  {
    icon: Globe2,
    number: "19",
    title: "Countries",
    description: "Representing Asia and Oceania.",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-14"
        >

          <span className="uppercase tracking-[4px] text-[#344474] font-semibold">
            FAOPS at a Glance
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-slate-900">
            Growing Together Since 1980
          </h2>

          <div className="w-24 h-1 bg-[#F7DB07] rounded-full mx-auto mt-6"></div>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .2,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 text-center group hover:shadow-2xl transition-all"
              >

                <div className="w-20 h-20 mx-auto rounded-2xl bg-[#344474] flex items-center justify-center group-hover:bg-[#F7DB07] duration-300">

                  <Icon
                    size={40}
                    className="text-white group-hover:text-[#1E3A5F]"
                  />

                </div>

                <h2 className="text-5xl font-bold text-[#344474] mt-8">
                  {item.number}
                </h2>

                <h3 className="text-2xl font-semibold mt-4 text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-500 mt-4 leading-7">
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