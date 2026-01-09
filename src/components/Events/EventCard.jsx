import "./EventCard.css";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div
        className="event-image"
        style={{ backgroundImage: `url(${event.image})` }}
      />

      <div className="event-content">
        <span className="event-category">{event.category}</span>
        <h3>{event.title}</h3>
        <span className="event-date">{event.date}</span>
        <p>{event.desc}</p>
      </div>
    </div>
  );
};

export default EventCard;
