import React, { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import EventModal from "./components/EventModal";
import "./styles/App.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetching events data from JSON
    fetch("./data/calendarfromtoenddate.json")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="App">
      <h1>Calendar App</h1>
      <Calendar events={events} onEventClick={handleEventClick} />
      {isModalOpen && (
        <EventModal
          event={selectedEvent}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
