import PageHero from "../components/about/PageHero";
import { motion } from "framer-motion";
import {
  Award,
  Heart,
  Lightbulb,
  ShieldCheck,
  Users,
  Handshake
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    desc: "Delivering the highest standards in perinatal healthcare."
  },
  {
    icon: Heart,
    title: "Empathy",
    desc: "Compassionate care for mothers, babies and families."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Supporting research and new healthcare solutions."
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Maintaining professionalism and ethical practice."
  },
  {
    icon: Users,
    title: "Inclusivity",
    desc: "Respecting diversity across Asia and Oceania."
  },
  {
    icon: Handshake,
    title: "Collaboration",
    desc: "Building partnerships among member societies."
  }
];

export default function Values() {
  return (
    <>
      <PageHero title="Core Values" breadcrumb="Core Values" />

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-[#344474]">
              Our Core Values
            </h2>

            <div className="w-24 h-1 bg-[#F7DB07] mx-auto rounded-full mt-5"></div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {values.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -10
                  }}
                  className="bg-slate-50 rounded-3xl p-8 shadow-lg border border-slate-100"
                >

                  <div className="w-16 h-16 rounded-2xl bg-[#344474]/10 flex items-center justify-center">

                    <Icon
                      className="text-[#344474]"
                      size={34}
                    />

                  </div>

                  <h3 className="text-2xl font-bold mt-6">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 mt-4 leading-8">
                    {item.desc}
                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>
    </>
  );
}