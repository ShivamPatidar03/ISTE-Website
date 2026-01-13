import "./MentorSection.css";
import MentorProfile from "./MentorProfile";
import { mentors } from "./mentorData";
import LightRays from "../Backgrounds/LightRays";

const MentorSection = () => {
  return (
    <section className="mentors-page-section">
      {/* Light Rays Background */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#e5e7eb"       
        raysSpeed={1}
        lightSpread={0.7}
        rayLength={3}
        pulsating={false}
        fadeDistance={1.2}
        saturation={1}
        followMouse={true}   
        mouseInfluence={0.1}
        noiseAmount={0.04}
        distortion={0.03}
      />

      {/* Content */}
      <div className="mentor-content">
        <div className="mentor-title">
          <h1>Our Mentors</h1>
          <p>The pillars of guidance and inspiration behind ISTE MITS</p>
        </div>

        {mentors.map((mentor, index) => (
          <MentorProfile
            key={mentor.id}
            mentor={mentor}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default MentorSection;
  