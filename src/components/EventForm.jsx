import { useState } from "react";

const EventForm = ({ setEvents }) => {
  const [formData, setFormData] = useState({ title: "", date: "", category: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents(prev => [...prev, { ...formData, id: Date.now() }]);
    setFormData({ title: "", date: "", category: "" });
  };

  return (
    <form className="mt-6 p-4 border rounded-lg bg-gray-50" onSubmit={handleSubmit}>
      <input 
        type="text" placeholder="Event Title" required
        value={formData.title} 
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="w-full p-2 mb-2 border rounded"
      />
      <input 
        type="date" required
        value={formData.date} 
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        className="w-full p-2 mb-2 border rounded"
      />
      <select 
        required value={formData.category} 
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        className="w-full p-2 mb-2 border rounded"
      >
        <option value="">Select Category</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Add Event
      </button>
    </form>
  );
};

export default EventForm;
