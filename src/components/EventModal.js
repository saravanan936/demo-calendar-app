import React from "react";
import Modal from "react-modal";
import "../styles/EventModal.css";

const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Event Details"
      className="event-modal"
      overlayClassName="modal-overlay"
    >
      <h2>{event.summary}</h2>
      <p><strong>Description:</strong> {event.desc}</p>
      <p><strong>Start Time:</strong> {new Date(event.start).toLocaleString()}</p>
      <p><strong>End Time:</strong> {new Date(event.end).toLocaleString()}</p>
      <p><strong>Interviewer:</strong> {event.user_det.handled_by.firstName} {event.user_det.handled_by.lastName}</p>
      <a href={event.link} target="_blank" rel="noopener noreferrer">
        Join Meeting
      </a>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default EventModal;
