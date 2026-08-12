import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Clock3,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function EventList({ events }) {
  if (events.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-16 text-center shadow">
        <h2 className="text-2xl font-bold text-[#344474]">
          No Events Found
        </h2>

        <p className="text-slate-500 mt-3">
          Try selecting another date or search keyword.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {events.map((event, index) => (

        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          viewport={{ once: true }}
          whileHover={{
            y: -6,
          }}
          className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all"
        >

          <div className="grid lg:grid-cols-4">

            {/* IMAGE */}

            <div className="relative h-64 lg:h-full">

              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />

              {/* Category */}

              <div className="absolute top-5 left-5 bg-[#F7DB07] text-slate-900 px-4 py-2 rounded-full text-sm font-semibold shadow">

                {event.category}

              </div>

            </div>

            {/* CONTENT */}

            <div className="lg:col-span-3 p-8">

              {/* Date */}

              <div className="flex flex-wrap gap-6 text-slate-500 text-sm">

                <div className="flex items-center gap-2">

                  <CalendarDays size={18} />

                  {event.date}

                </div>

                <div className="flex items-center gap-2">

                  <Clock3 size={18} />

                  {event.time}

                </div>

                <div className="flex items-center gap-2">

                  <MapPin size={18} />

                  {event.location}

                </div>

              </div>

              {/* Title */}

              <h2 className="text-3xl font-bold text-[#344474] mt-6">

                {event.title}

              </h2>

              {/* Description */}

              <p className="mt-5 text-slate-600 leading-8">

                {event.description}

              </p>

              {/* Button */}

              <Link
                to={`/events/${event.slug ?? event.id}`}
                className="mt-8 inline-flex items-center gap-3 bg-[#344474] hover:bg-[#22345f] text-white px-7 py-3 rounded-full font-semibold transition-all"
              >
                Read More

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

        </motion.div>

      ))}

    </div>
  );
}