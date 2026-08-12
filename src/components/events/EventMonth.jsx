import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function EventMonth({ events }) {
  const navigate = useNavigate();

  const calendarEvents = events.map((event) => ({
    title: event.title,
    date: event.date,
    extendedProps: event,
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-3xl shadow-lg p-8 mt-10"
    >
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height="auto"
        events={calendarEvents}
        eventClick={(info) => {
          const event = info.event.extendedProps;
          navigate(`/events/${event.slug ?? event.id}`);
        }}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "",
        }}
      />
    </motion.div>
  );
}
