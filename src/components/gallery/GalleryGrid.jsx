import "./GalleryGrid.css";
import { galleryData } from "./galleryData";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GalleryGrid = ({ activeCategory, setLightboxImage }) => {
  const gridRef = useRef(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((img) => img.category === activeCategory);

  useEffect(() => {
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      }
    );
  }, [activeCategory]);

  return (
    <section className="gallery-grid" ref={gridRef}>
      {filteredImages.map((item) => (
        <div
        key={item.id}
        className="gallery-card"
        onClick={() => setLightboxImage(item)}
         >
      
          <img src={item.image} alt={item.title} />
          <div className="overlay">
            <h3>{item.title}</h3>
            <span>{item.category}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default GalleryGrid;
