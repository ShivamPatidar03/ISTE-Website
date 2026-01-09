import "./Contact.css";

const ContactMap = () => {
  return (
    <section className="contact-map">
      <iframe
  title="MITS Gwalior Location"
  src="https://maps.google.com/maps?q=MITS%20Gwalior&t=&z=15&ie=UTF8&iwloc=&output=embed"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen=""
  referrerPolicy="no-referrer-when-downgrade"
/>
    </section>
  );
};

export default ContactMap;
