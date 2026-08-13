import Hero from '../components/Hero';
import { departments } from '../data/department';
import { doctors } from '../data/doctors';
import DoctorCard from '../components/DoctorCard';
import { motion } from 'framer-motion';
import { Shield, Users, Zap, Heart, ArrowRight, Quote, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Microscope,
  HeartPulse,
  Baby,
} from "lucide-react";
import PresidentMessage from "../components/PresidentMessage";

const features = [
  { icon: Microscope, title: 'The science and art of perinatology',  },
  { icon: HeartPulse, title: 'Maternal, fetal and neonatal welfare', desc: 'Expert medical professionals with years of experience in various fields.' },
  { icon: Baby, title: 'Advances in Newborn Care', desc: 'Equipped with the latest medical technology for precise diagnosis.' },
  // { icon: Heart, title: 'Patient Care', desc: 'Compassionate care focused on patient comfort and recovery.' },
];
const accents = [
  "from-blue-500 to-blue-300",
  "from-green-500 to-green-300",
  "from-purple-500 to-purple-300",
  "from-red-500 to-red-300"
];

const testimonials = [
  { name: 'John Smith', role: 'Patient', text: 'The care I received was exceptional. The doctors and staff were professional and caring throughout my recovery.' },
  { name: 'Sarah Williams', role: 'Patient', text: 'State-of-the-art facilities and very knowledgeable doctors. Highly recommended.' },
  { name: 'Michael Brown', role: 'Patient', text: 'Booking was seamless. The pediatric team is wonderful. Truly a world-class hospital.' },
  { name: 'Anjali Reddy', role: 'Patient', text: 'Doctors explained everything clearly and treatment was excellent.' },
  { name: 'Rahul Kumar', role: 'Patient', text: 'Very clean hospital with friendly staff and quick service.' },
  { name: 'Priya Sharma', role: 'Patient', text: 'Highly satisfied with the care and attention provided.' },
];


export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-20 lg:space-y-28 pb-10 sm:pb-20 lg:pb-24">

      <Hero />

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative bg-white hover:bg-blue-50/30 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              {/* Gradient Top Accent */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${accents[i]} rounded-t-2xl sm:rounded-t-3xl`}
              ></div>

              {/* Icon */}
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-blue-100 transition">
                <feature.icon className="h-6 w-6 text-[#1E3A5F]" />
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {feature.desc}
              </p>

            </div>
          ))}

        </div>
      </section>

      <PresidentMessage />

      {/*  CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E3A5F] rounded-2xl sm:rounded-[3rem] p-6 sm:p-12 md:p-20 text-center text-white">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6">
           Ready to Join Our Events?
          </h2>
          <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            Explore our upcoming conferences, workshops, and scientific events organized by FAOPS across Asia and Oceania.
          </p>

          <Link
            to="/events"
            className="inline-flex px-6 sm:px-10 py-3 sm:py-4 bg-white text-[#1E3A5F] rounded-full font-bold hover:scale-105 transition shadow-xl text-sm sm:text-base"
          >
             View Events
          </Link>
        </div>
      </section> 
    </div>
  );
}