import { useState } from "react";
import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Charity Drive", date: "2025-03-10", category: "Charity", location: "NYC" },
    { id: 2, title: "Interfaith Conference", date: "2025-04-15", category: "Religious", location: "LA" },
    { id: 3, title: "Community Meetup", date: "2025-05-20", category: "Social", location: "San Francisco" }
  ]);
  
  const [filter, setFilter] = useState("");

  return (
    <div className="p-6 mt-12">
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <select className="mb-4 p-2 border rounded" onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>

      <div className="grid gap-4 sm:grid-cols-2">
        {events.filter(e => !filter || e.category === filter).map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <EventForm setEvents={setEvents} />
    </div>
  );
};

export default Events;
