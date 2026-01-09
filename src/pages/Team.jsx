import CommitteeSection from "../components/OurTeam/CommitteeSection";
import { committees } from "../components/OurTeam/teamData";
import "./TeamPage.css";

const Team = () => {
  return (
    <div className="team-page">
      {/* Decorative Waves */}
      <div className="team-bg-wave wave-1"></div>
      <div className="team-bg-wave wave-2"></div>

      <header className="team-header">
        <span className="team-pill">Our Team</span>
        <h1>ISTE MITS Committees</h1>
        <p>
          A passionate team of students working together to build,
          manage and grow the ISTE MITS chapter.
        </p>
      </header>

      {committees.map((committee, index) => (
        <CommitteeSection
          key={index}
          title={committee.title}
          members={committee.members}
        />
      ))}
    </div>
  );
};

export default Team;
