import "../components/gallery/GalleryPage.css";
import GalleryHero from "../components/gallery/GalleryHero";
import GalleryFilter from "../components/gallery/GalleryFilter";
import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryLightbox from "../components/gallery/GalleryLightbox";

import { useState } from "react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);
  
  return (
    <div className="gallery-page">
      <GalleryHero />

      <GalleryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <GalleryGrid
        activeCategory={activeCategory}
        setLightboxImage={setLightboxImage}
      />

      {lightboxImage && (
        <GalleryLightbox
          image={lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}

      
    </div>
  );
};

export default Gallery;
