import "./EventsPreview.css";

import Esummit from "../../assets/Events/e-summit-iste.jpg";
import Enigma from "../../assets/Events/enigma-2025.jpg";
import Xcalibre from "../../assets/Events/xcalibire-23.jpg";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    title: "ENIGMA 2025",
    date: "7th – 9th February 2025",
    image: Enigma,
    desc: "A multi-day technical event featuring seminars, competitions, gaming & creative activities."
  },
  {
    title: "X-Calibre 2k25",
    date: "26th-28th September 2025",
    image: Xcalibre,
    desc: "A preparation event with aptitude tests, group discussions & interviews to boost placement readiness."
  },
  {
    title: "E-Summit 2024",
    date: "3th–5th February 2024",
    image: Esummit,
    desc: "An entrepreneurial festival promoting finance & startup skills with workshops and business competitions."
  }
];

const EventsPreview = () => {

  const eventsRef = useRef(null);

  useEffect(() => {
    if (!eventsRef.current) return;
  
    const ctx = gsap.context(() => {
      gsap.set(".event-card", { y: 0, autoAlpha: 1 });
  
      gsap.from(".events-header", {
        scrollTrigger: {
          trigger: eventsRef.current,
          start: "top 80%",
          once: true
        },
        autoAlpha: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out"
      });
  
      gsap.from(".event-card", {
        scrollTrigger: {
          trigger: ".events-grid",
          start: "top 85%",
          once: true
        },
        autoAlpha: 0,
        y: 45,
        stagger: 0.22,
        duration: 0.9,
        ease: "power3.out",
        clearProps: "transform"
      });
    }, eventsRef);
  
    return () => ctx.revert();
  }, []);
  
  
  return (
    <section className="events-section" ref={eventsRef}>
      <div className="events-header">
        <span className="events-tag">What’s Happening</span>
        <h2>
          Our <span>Events</span>
        </h2>
        <p>
          Explore workshops, seminars, and technical events organized by ISTE
          MITS.
        </p>
      </div>

      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <div
              className="event-image"
              style={{ backgroundImage: `url(${event.image})` }}
            />

            <div className="event-content">
              <span className="event-date">{event.date}</span>
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="events-footer">
        <NavLink to="/events" className="events-btn">
          View All Events →
        </NavLink>
      </div>
    </section>
  );
};

export default EventsPreview;
