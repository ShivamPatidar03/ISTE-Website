import "./Contact.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ContactHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="contact-hero" ref={heroRef}>
      <h1>Get in Touch</h1>
      <p>
        Have questions, ideas, or want to collaborate with ISTE MITS Gwalior?
        We’d love to hear from you.
      </p>
    </section>
  );
};

export default ContactHero;
