import "./ISTEMITS.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ISTEMITS = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // TITLE SCROLL
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 40%",
          scrub: true,
        },
        y: 80,
        opacity: 0,
      });

      // CARDS
      gsap.from(gridRef.current.children, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 70,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="iste-mits-section" ref={sectionRef}>
      <div className="iste-mits-container">
        <span className="iste-mits-tag">Our Chapter</span>

        <h2 ref={titleRef}>
          ISTE <span>MITS Gwalior</span>
        </h2>

        <p className="iste-mits-desc">
          The ISTE MITS Chapter actively promotes technical excellence,
          innovation, and leadership among students through workshops,
          competitions, and industry interactions.
        </p>

        <div className="iste-mits-grid" ref={gridRef}>
          <div className="iste-mits-block">
            <h3>Established</h3>
            <p>
              The ISTE MITS Chapter empowers students with strong technical
              foundations, practical exposure, and professional growth.
            </p>
          </div>

          <div className="iste-mits-block">
            <h3>Activities</h3>
            <p>
              Workshops, hackathons, coding contests, expert talks, industrial
              visits, and innovation programs bridge academia and industry.
            </p>
          </div>

          <div className="iste-mits-block">
            <h3>Student Focus</h3>
            <p>
              Leadership, teamwork, research mindset, and industry readiness are
              the chapter’s core focus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ISTEMITS;
