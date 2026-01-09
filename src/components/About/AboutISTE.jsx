import "./AboutISTE.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutISTE = () => {
  const aboutRef = useRef(null);
  const pointerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // HERO
      gsap.from(".about-hero", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      });

      // CARDS
      gsap.from(".about-block", {
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 85%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.35,
        ease: "power3.out",
      });

      // POINTER TIMELINE
      const blocks = gsap.utils.toArray(".about-block");

      blocks.forEach((block) => {
        ScrollTrigger.create({
          trigger: block,
          start: "top center",
          end: "bottom center",
          onEnter: () => movePointer(block),
          onEnterBack: () => movePointer(block),
        });
      });

      function movePointer(block) {
        if (!pointerRef.current) return;

        gsap.to(pointerRef.current, {
          y: block.offsetTop + 42,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-iste-page" ref={aboutRef}>
      {/* HERO */}
      <div className="about-hero">
        <span className="about-tag">About Us</span>
        <h1>
          Indian Society for Technical Education <span>(ISTE)</span>
        </h1>
        <p>
          ISTE is a national professional non-profit organization dedicated to
          the development of technical education in India.
        </p>
      </div>

      {/* CONTENT */}
      <div className="about-content">
        <div className="about-scroll-pointer" ref={pointerRef}></div>

        <div className="about-block">
          <h2>Who We Are</h2>
          <p>
            ISTE is a leading professional body committed to advancing technical
            education. It works closely with institutions, faculty, and students
            to improve standards and innovation.
          </p>
        </div>

        <div className="about-block">
          <h2>Our Mission</h2>
          <p>
            To provide high-quality training, encourage research and innovation,
            and foster collaboration between academia and industry.
          </p>
        </div>

        <div className="about-block">
          <h2>Our Vision</h2>
          <p>
            To become a progressive professional body empowering educators and
            students while contributing to national development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutISTE;
