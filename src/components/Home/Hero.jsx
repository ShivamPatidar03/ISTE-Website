import "./Hero.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";   
import HeroCircularBg from "../Backgrounds/HeroCircularBg";

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      const letters = titleRef.current.querySelectorAll(".char");
      gsap.from(letters, {
        opacity: 0,
        y: 60,
        stagger: 0.035,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".hero-text p", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.6,
      });

      gsap.fromTo(
        ".hero-buttons .btn",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.9,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="char">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section className="hero" id="home" ref={heroRef}>
      <HeroCircularBg />

      <div className="hero-content centered">
        <div className="hero-text">
          <span className="hero-badge">Empowering Future Engineers</span>

          <h1 ref={titleRef}>
            {splitText("Indian Society for")}
            <br />
            <span>{splitText("Technical Education")}</span>
          </h1>

          <p>
            ISTE is a national professional organization fostering technical
            education, innovation, and leadership among students and educators.
          </p>

          <div className="hero-buttons">
            <Link to="/about" className="btn primary">
              Explore More
            </Link>

            <Link to="/events" className="btn secondary">
              Our Events
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,64L60,74.7C120,85,240,107,360,96C480,85,600,43,720,32C840,21,960,43,1080,58.7C1200,75,1320,85,1380,90.7L1440,96L1440,0L0,0Z"
            fill="#eef4ff"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
