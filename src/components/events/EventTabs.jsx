import { List, CalendarDays, CalendarRange } from "lucide-react";
import { motion } from "framer-motion";

export default function EventTabs({ view, setView }) {
  const tabs = [
    {
      id: "list",
      label: "List",
      icon: List,
    },
    {
      id: "month",
      label: "Month",
      icon: CalendarDays,
    },
    {
      id: "day",
      label: "Day",
      icon: CalendarRange,
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mt-8 mb-10">

      {/* Left */}
      <h2 className="text-2xl font-bold text-[#344474]">
        Event Views
      </h2>

      {/* Tabs */}
      <div className="flex bg-slate-100 rounded-2xl p-1 shadow-inner">

        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <motion.button
              key={tab.id}
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setView(tab.id)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300
              
                ${
                  view === tab.id
                    ? "bg-[#344474] text-white shadow-lg"
                    : "text-slate-600 hover:bg-white"
                }`}
            >
              <Icon size={18} />

              {tab.label}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}