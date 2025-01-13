import React from "react";
import "../styles/Calendar.css";
import { format, parseISO } from "date-fns";

const Calendar = ({ events, onEventClick }) => {
  const groupEventsByDate = (events) => {
    const grouped = {};
    events.forEach((event) => {
      const date = format(parseISO(event.start), "yyyy-MM-dd");
      if (!grouped[date]) grouped[date] = [];
      grouped[date].push(event);
    });
    return grouped;
  };

  const groupedEvents = groupEventsByDate(events);

  return (
    <div className="calendar">
      {Object.keys(groupedEvents).map((date) => (
        <div key={date} className="calendar-date">
          <h3>{date}</h3>
          {groupedEvents[date].map((event) => (
            <div
              key={event.id}
              className="event"
              onClick={() => onEventClick(event)}
            >
              {event.summary}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
