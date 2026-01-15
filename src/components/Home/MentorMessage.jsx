import "./MentorMessage.css";
import mentor1 from "../../assets/mentors/vishal-chaudhary.jpg";
import mentor2 from "../../assets/mentors/manjree-pandit.jpg";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mentors = [
  {
    name: "Dr. Manjree Pandit",
    role: "Pro Vice-Chancellor & Chairperson, ISTE, MITS-DU",
    image: mentor2,
    message:
      "Through ISTE activities, students gain practical exposure, teamwork experience, and industry awareness that prepares them for real-world engineering challenges."
  },
  {
    name: "Dr. Vishal Chaudhary",
    role: "Proctor & Faculty Advisor, ISTE, MITS-DU",
    image: mentor1,
    message:
      "ISTE provides students with opportunities to explore technology, leadership, and innovation beyond academics. Our focus is to nurture problem-solvers and future leaders."
  }
];

const MentorMessage = () => {
  const mentorRef = useRef(null);

  useEffect(() => {
    if (!mentorRef.current) return;

    const ctx = gsap.context(() => {
      // ✅ PRE-SET (CRITICAL)
      gsap.set(".mentor-card", { y: 0, autoAlpha: 1 });

      gsap.from(".mentor-header", {
        scrollTrigger: {
          trigger: mentorRef.current,
          start: "top 80%",
          once: true
        },
        autoAlpha: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out"
      });

      gsap.from(".mentor-card", {
        scrollTrigger: {
          trigger: ".mentor-grid",
          start: "top 85%",
          once: true
        },
        autoAlpha: 0,
        y: 40,
        stagger: 0.25,
        duration: 0.9,
        ease: "power3.out",
        clearProps: "transform" // 🔥 MOST IMPORTANT
      });
    }, mentorRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mentor-section" ref={mentorRef}>
      <div className="mentor-header">
        <span className="mentor-tag">Guidance & Leadership</span>
        <h2>
          Message from Our <span>Mentors</span>
        </h2>
        <p>
          Our mentors guide students towards excellence through knowledge,
          discipline, and innovation.
        </p>
      </div>

      <div className="mentor-grid">
        {mentors.map((mentor, index) => (
          <div className="mentor-card" key={index}>
            <img src={mentor.image} alt={mentor.name} />
            <p className="mentor-quote">“{mentor.message}”</p>
            <h4>{mentor.name}</h4>
            <span>{mentor.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MentorMessage;
