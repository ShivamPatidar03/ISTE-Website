import "./TeamCard.css";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const TeamCard = ({ member }) => {
  return (
    <div className="team-card">
      <div className="team-img-wrapper">
        <img src={member.img} alt={member.name} />

        <div className="team-overlay">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          )}

          {member.email && (
            <a href={`mailto:${member.email}`}>
              <FaEnvelope />
            </a>
          )}
        </div>
      </div>

      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </div>
  );
};

export default TeamCard;
