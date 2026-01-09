import TeamCard from "./TeamCard";
import "./CommitteeSection.css";

const CommitteeSection = ({ title, members = [] }) => {
  return (
    <section className="committee-section">
      <h2>{title}</h2>

      <div className="committee-grid">
        {members.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
};

export default CommitteeSection;
