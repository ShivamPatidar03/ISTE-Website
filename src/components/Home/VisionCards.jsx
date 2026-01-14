import "./VisionCards.css";

const VisionCards = () => {
  return (
    <section className="vision-section">
      <div className="vision-container">

        {/* SECTION HEADER */}
        <div className="vision-header">
          <h2>Learn. Create. Lead.</h2>
          <p>
            Join ISTE and be part of a nationwide network dedicated to
            excellence in technical education.
          </p>
        </div>

        {/* CARDS */}
        <div className="vision-grid">
          <div className="vision-card">
            <div className="vision-icon">📘</div>
            <h3>Empowering Educators</h3>
            <p>
              Providing resources, training, and support to
              educators in technical education.
            </p>
          </div>

          <div className="vision-card highlighted">
            <div className="vision-icon">⚙️</div>
            <h3>Transforming Learning</h3>
            <p>
              Introducing cutting-edge teaching methods and
              technologies to enhance student success.
            </p>
          </div>

          <div className="vision-card">
            <div className="vision-icon">🚀</div>
            <h3>Inspiring Futures</h3>
            <p>
              Building a community of educators and engineers
              who shape the leaders of tomorrow.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="vision-cta">
          <a
            href="https://linktr.ee/iste_mits_gwl"
            className="btn primary"
            target="_blank"
            rel="noopener noreferrer"
          >Become a Member</a>

        </div>

      </div>
    </section>
  );
};

export default VisionCards;
