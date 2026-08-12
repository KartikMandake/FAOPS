import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/** "09:00 AM" -> "09:00:00" so FullCalendar can parse the ISO datetime. */
function to24Hour(time) {
  if (!time) return null;

  const match = /^(\d{1,2}):(\d{2})\s*(AM|PM)$/i.exec(time.trim());
  if (!match) return time;

  const [, rawHour, minutes, meridiem] = match;
  let hour = Number(rawHour) % 12;

  if (meridiem.toUpperCase() === "PM") hour += 12;

  return `${String(hour).padStart(2, "0")}:${minutes}:00`;
}

export default function EventDay({ events }) {
  const navigate = useNavigate();

  const calendarEvents = events.map((event) => {
    const start = to24Hour(event.time);
    const end = to24Hour(event.endTime);

    return {
      title: event.title,
      start: start ? `${event.date}T${start}` : event.date,
      ...(end ? { end: `${event.date}T${end}` } : {}),
      extendedProps: event,
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-3xl shadow-xl p-8 mt-8"
    >
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay"
        height="auto"
        events={calendarEvents}
        nowIndicator={true}
        allDaySlot={false}
        slotMinTime="06:00:00"
        slotMaxTime="22:00:00"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "",
        }}
        eventClick={(info) => {
          const event = info.event.extendedProps;
          navigate(`/events/${event.slug ?? event.id}`);
        }}
      />
    </motion.div>
  );
}
