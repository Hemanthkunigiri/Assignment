const EventCard = ({ event }) => (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="text-gray-600">{event.date} - {event.location}</p>
      <span className="text-sm text-blue-500">{event.category}</span>
    </div>
  );
  
  export default EventCard;
  