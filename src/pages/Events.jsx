import { useState } from "react";

import EventHeader from "../components/events/EventHeader";
import EventTabs from "../components/events/EventTabs";
import EventList from "../components/events/EventList";
import EventMonth from "../components/events/EventMonth";
import EventDay from "../components/events/EventDay";

import PageHero from "../components/about/PageHero";

import { eventsData } from "../data/eventsData";

export default function Events() {
  const [view, setView] = useState("list");

  return (
    <>
      <PageHero
        title="Events"
        currentPage="Events"
      />

      <EventHeader />

      <div className="max-w-7xl mx-auto px-6 py-12">

        <EventTabs
          view={view}
          setView={setView}
        />

        {view === "list" && (
          <EventList events={eventsData} />
        )}

        {view === "month" && (
          <EventMonth events={eventsData} />
        )}

        {view === "day" && (
          <EventDay events={eventsData} />
        )}

      </div>
    </>
  );
}
