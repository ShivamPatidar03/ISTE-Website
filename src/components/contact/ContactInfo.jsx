import "./Contact.css";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <div className="info-card">
        <Mail />
        <h4>Email</h4>
        <p>iste.mits.gwl@gmail.com</p>
      </div>

      <div className="info-card">
        <Phone />
        <h4>Phone</h4>
        <p>Faizan Mansuri – 7697827864<br />
           Prerna Pandey – 6260842973
        </p>
      </div>

      <div className="info-card">
        <MapPin />
        <h4>Address</h4>
        <p>MITS Gwalior, Madhya Pradesh</p>
      </div>
    </section>
  );
};

export default ContactInfo;
