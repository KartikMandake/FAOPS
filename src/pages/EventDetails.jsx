import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Building2,
  Users,
  Ticket,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import PageHero from "../components/about/PageHero";
import { eventsData, getEventBySlug } from "../data/eventsData";

function formatDate(value) {
  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) return value;

  return parsed.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function EventDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const event = getEventBySlug(slug);

  if (!event) {
    return (
      <>
        <PageHero title="Event Not Found" currentPage="Events" />

        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold text-[#344474]">
            We couldn't find that event
          </h2>

          <p className="text-slate-500 mt-4">
            The event you are looking for may have been moved or removed.
          </p>

          <Link
            to="/events"
            className="mt-8 inline-flex items-center gap-3 bg-[#344474] hover:bg-[#22345f] text-white px-7 py-3 rounded-full font-semibold transition-all"
          >
            <ArrowLeft size={18} />
            Back to Events
          </Link>
        </div>
      </>
    );
  }

  const otherEvents = eventsData.filter((item) => item.id !== event.id).slice(0, 3);

  const detailRows = [
    { icon: CalendarDays, label: "Date", value: formatDate(event.date) },
    {
      icon: Clock3,
      label: "Time",
      value: event.endTime ? `${event.time} - ${event.endTime}` : event.time,
    },
    { icon: MapPin, label: "Location", value: event.location },
    { icon: Building2, label: "Venue", value: event.venue },
    { icon: Users, label: "Organised by", value: event.organizer },
    { icon: Ticket, label: "Registration", value: event.registration },
  ].filter((row) => Boolean(row.value));

  return (
    <>
      <PageHero title={event.title} currentPage="Event Details" />

      <div className="max-w-7xl mx-auto px-6 pt-10 pb-20">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-[#344474] font-medium transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Events
        </button>

        <div className="grid lg:grid-cols-3 gap-10 mt-8">

          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-10">

            {/* Banner image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[280px] md:h-[420px] object-cover"
              />

              <div className="absolute top-5 left-5 bg-[#F7DB07] text-slate-900 px-4 py-2 rounded-full text-sm font-semibold shadow">
                {event.category}
              </div>
            </motion.div>

            {/* Title + meta */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200"
            >
              <div className="flex flex-wrap gap-6 text-slate-500 text-sm">
                <span className="flex items-center gap-2">
                  <CalendarDays size={18} />
                  {formatDate(event.date)}
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 size={18} />
                  {event.endTime ? `${event.time} - ${event.endTime}` : event.time}
                </span>

                <span className="flex items-center gap-2">
                  <MapPin size={18} />
                  {event.location}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[#344474] mt-5">
                {event.title}
              </h1>

              <p className="mt-5 text-slate-600 leading-8">
                {event.description}
              </p>
            </motion.section>

            {/* Overview */}
            {event.overview?.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200"
              >
                <h2 className="text-2xl font-bold text-[#344474]">
                  About This Event
                </h2>

                <div className="mt-5 space-y-5">
                  {event.overview.map((paragraph, index) => (
                    <p key={index} className="text-slate-600 leading-8">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Highlights */}
            {event.highlights?.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200"
              >
                <h2 className="text-2xl font-bold text-[#344474]">
                  Programme Highlights
                </h2>

                <ul className="mt-6 grid sm:grid-cols-2 gap-4">
                  {event.highlights.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 bg-slate-50 rounded-xl p-4"
                    >
                      <CheckCircle2
                        size={20}
                        className="text-[#344474] shrink-0 mt-0.5"
                      />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* Agenda */}
            {event.agenda?.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200"
              >
                <h2 className="text-2xl font-bold text-[#344474]">
                  Schedule
                </h2>

                <ol className="mt-8 relative border-l-2 border-slate-200 ml-3">
                  {event.agenda.map((slot, index) => (
                    <li key={index} className="ml-6 pb-8 last:pb-0">
                      <span className="absolute -left-[9px] w-4 h-4 rounded-full bg-[#344474] ring-4 ring-white" />

                      <p className="text-sm font-semibold text-[#F0C400]">
                        {slot.time}
                      </p>

                      <h3 className="text-lg font-semibold text-[#344474] mt-1">
                        {slot.title}
                      </h3>

                      {slot.speaker && (
                        <p className="text-slate-500 text-sm mt-1">
                          {slot.speaker}
                        </p>
                      )}
                    </li>
                  ))}
                </ol>
              </motion.section>
            )}

          </div>

          {/* SIDEBAR */}
          <aside className="space-y-8">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 lg:sticky lg:top-28"
            >
              <h2 className="text-xl font-bold text-[#344474]">
                Event Details
              </h2>

              <dl className="mt-6 space-y-5">
                {detailRows.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#344474]/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#344474]" />
                    </div>

                    <div>
                      <dt className="text-xs uppercase tracking-wide text-slate-400 font-semibold">
                        {label}
                      </dt>
                      <dd className="text-slate-700 mt-1 leading-6">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              {event.audience && (
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="text-xs uppercase tracking-wide text-slate-400 font-semibold">
                    Who should attend
                  </p>
                  <p className="text-slate-600 mt-2 leading-7">
                    {event.audience}
                  </p>
                </div>
              )}

              <Link
                to="/contact"
                className="mt-8 flex items-center justify-center gap-3 bg-[#344474] hover:bg-[#22345f] text-white px-6 py-4 rounded-full font-semibold transition-all"
              >
                Enquire About This Event
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/events"
                className="mt-3 flex items-center justify-center gap-2 border border-slate-300 hover:border-[#344474] text-[#344474] px-6 py-4 rounded-full font-semibold transition-all"
              >
                View All Events
              </Link>
            </motion.div>

          </aside>

        </div>

        {/* OTHER EVENTS */}
        {otherEvents.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-[#344474]">
              Other Events
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {otherEvents.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all flex flex-col"
                >
                  <div className="relative h-44">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute top-4 left-4 bg-[#F7DB07] text-slate-900 px-3 py-1.5 rounded-full text-xs font-semibold shadow">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-sm text-slate-500 flex items-center gap-2">
                      <CalendarDays size={16} />
                      {formatDate(item.date)}
                    </p>

                    <h3 className="text-lg font-bold text-[#344474] mt-3">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-7 mt-3 line-clamp-3">
                      {item.description}
                    </p>

                    <Link
                      to={`/events/${item.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-[#344474] font-semibold hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

      </div>
    </>
  );
}
