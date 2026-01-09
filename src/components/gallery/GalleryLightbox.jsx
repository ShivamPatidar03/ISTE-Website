import { useEffect, useRef } from "react";
import "./GalleryLightbox.css";
import { gsap } from "gsap";

const GalleryLightbox = ({ image, onClose }) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  // ESC close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeWithAnimation();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Open animation
  useEffect(() => {
    if (image) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      gsap.fromTo(
        contentRef.current,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.45, ease: "power3.out" }
      );
    }
  }, [image]);

  const closeWithAnimation = () => {
    gsap.to(contentRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      onComplete: onClose,
    });
  };

  if (!image) return null;

  return (
    <div
      className="lightbox-overlay"
      ref={overlayRef}
      onClick={closeWithAnimation}
    >
      <div
        className="lightbox-content"
        ref={contentRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="lightbox-close" onClick={closeWithAnimation}>
          ✕
        </button>

        {/* Image */}
        <img src={image.image} alt={image.title} />

        {/* Info */}
        <div className="lightbox-info">
          <h3>{image.title}</h3>
          <span>{image.category}</span>
        </div>
      </div>
    </div>
  );
};

export default GalleryLightbox;
