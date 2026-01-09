import "./GalleryHero.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const GalleryHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="gallery-hero" ref={heroRef}>
      <h1>ISTE Moments</h1>
      <p>Capturing innovation, collaboration & memories at ISTE MITS</p>
    </section>
  );
};

export default GalleryHero;
