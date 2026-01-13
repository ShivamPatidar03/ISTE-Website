import "./EventsGrid.css";
import EventCard from "./EventCard";

import Esummit from "../../assets/Events/E-Summit-ISTE.jpg";
import Enigma from "../../assets/Events/Enigma-2025.jpg";
import Xcalibre from "../../assets/Events/Xcalibire-23.jpg";

const events = [
  {
    title: "ENIGMA 2025",
    date: "7th – 9th February 2025",
    category: "Technical Fest (Talks + Games + Workshops)",
    image: Enigma,
    desc: "A multi-day technical event featuring seminars, competitions, gaming & creative activities."
  },
  {
    title: "X-Calibre 2025",
    date: "26th-28th September 2025",
    category: "Mock Placement / Skill Preparation",
    image: Xcalibre,
    desc: "A preparation event with aptitude tests, group discussions & interviews to boost placement readiness."
  },
  {
    title: "E-Summit 2024",
    date: "3th–5th February 2024",
    category: "Entrepreneurship Fest (Workshop + Competitions)",
    image: Esummit,
    desc: "An entrepreneurial festival promoting finance & startup skills with workshops and business competitions."
  }
];

const EventsGrid = () => {
  return (
    <section className="events-grid-section">
      <div className="events-grid">
        {events.map((event, i) => (
          <EventCard key={i} event={event} />
        ))}
      </div>
    </section>
  );
};

export default EventsGrid;
