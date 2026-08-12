import { Search, CalendarDays } from "lucide-react";

export default function EventHeader({
  search,
  setSearch,
  selectedDate,
  setSelectedDate,
}) {
  return (
    <section className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

      {/* Heading */}
      <div className="mb-8">

        <h2 className="text-3xl font-bold text-[#344474]">
          Search for Events
        </h2>

        <p className="text-slate-500 mt-2">
          Find upcoming conferences, workshops and scientific meetings.
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Search */}
        <div>

          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Find Events
          </label>

          <div className="relative">

            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Search events..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-14 rounded-xl border border-slate-300 pl-12 pr-4 outline-none focus:border-[#344474] focus:ring-2 focus:ring-[#344474]/20 transition"
            />

          </div>

        </div>

        {/* Date */}
        <div>

          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Select Date
          </label>

          <div className="relative">

            <CalendarDays
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />

            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full h-14 rounded-xl border border-slate-300 pl-12 pr-4 outline-none focus:border-[#344474] focus:ring-2 focus:ring-[#344474]/20 transition"
            />

          </div>

        </div>

      </div>

    </section>
  );
}