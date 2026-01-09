import "./MentorProfile.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MentorProfile = ({ mentor, reverse }) => {
  const profileRef = useRef(null);

  useEffect(() => {
    const direction = reverse ? 100 : -100;

    gsap.fromTo(
      profileRef.current.children,
      {
        opacity: 0,
        x: direction,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: profileRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    
  }, [reverse]);

  return (
    <div
      ref={profileRef}
      className={`mentor-profile ${reverse ? "reverse" : ""}`}
    >
      <div className="mentor-photo">
        <img src={mentor.image} alt={mentor.name} />
      </div>

      <div className="mentor-info">
        <h2>{mentor.name}</h2>
        <h4>{mentor.designation}</h4>
        <div className="mentor-divider"></div>
        <p>{mentor.description}</p>
      </div>
    </div>
  );
};

export default MentorProfile;
