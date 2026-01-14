import { Link } from "react-router-dom";
import {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import "./Footer.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import isteLogo from "../assets/logo.png";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
    
      gsap.set([".footer-brand", ".footer-column"], {
        y: 0,
        opacity: 1,
      });

      // Brand animation
      gsap.from(".footer-brand", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });

      // Columns animation
      gsap.from(".footer-column", {
        scrollTrigger: {
          trigger: ".footer-links",
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 30,
        stagger: 0.18,
        duration: 0.7,
        ease: "power3.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="iste-footer" ref={footerRef}>
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo-row">
            <img src={isteLogo} alt="ISTE Logo" />
            <span>ISTE</span>
          </div>

          <p className="footer-tagline">Empowering Technical Education</p>

          <p className="footer-desc">
            Stay connected with us. Get updates on events, workshops,
            hackathons, and opportunities at ISTE MITS Gwalior.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>About</h4>
            <Link to="/about">About ISTE</Link>
            <Link to="/mentors">Mentors</Link>
            <Link to="/events">Events</Link>
            <Link to="/contact">Community</Link>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <Link to="/gallery">Gallery</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/contact">Contact</Link>
            {/* <Link to="https://linktr.ee/iste_mits_gwl">Join Us</Link> */}
            <a
              href="https://linktr.ee/iste_mits_gwl"
              target="_blank"
              rel="noopener noreferrer"
            >
            Join Us
            </a>

          </div>

          <div className="footer-column">
            <h4>Social</h4>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/iste-student-chapter-mits">
                <Linkedin size={18} /><span>LinkedIn</span>
              </a>
              <a href="https://x.com/ISTE_MITS_Gwl">
                <Twitter size={18} /><span>Twitter</span>
              </a>
              <a href="https://www.instagram.com/iste_mits_gwl/">
                <Instagram size={18} /><span>Instagram</span>
              </a>
              <a href="https://www.facebook.com/istemits">
                <Facebook size={18} /><span>Facebook</span>
              </a>
              <a href="https://www.youtube.com/@istestudentschaptermitsgwa3607">
                <Youtube size={18} /><span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ISTE | MITS Gwalior. All rights reserved.</p>
        <div className="footer-bottom-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
