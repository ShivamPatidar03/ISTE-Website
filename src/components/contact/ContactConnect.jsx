import "./Contact.css";
import { Instagram, Linkedin, Globe } from "lucide-react";

const ContactConnect = () => {
  return (
    <section className="contact-connect">
      <h2>Connect With ISTE MITS</h2>
      <p>Stay updated with events, workshops, and announcements.</p>

      <div className="connect-links">
        <a className="connect-item" href="https://www.instagram.com/iste_mits_gwl/" target="_blank">
         <Instagram /> <span>Instagram</span>
        </a>

        <a className="connect-item" href="https://www.linkedin.com/company/iste-student-chapter-mits" target="_blank">
         <Linkedin /> <span>LinkedIn</span>
        </a>

        <a className="connect-item" href="https://www.youtube.com/@istestudentschaptermitsgwa3607" target="_blank">
          <Globe /> <span>YouTube</span>
        </a>
</div>

    </section>
  );
};

export default ContactConnect;
