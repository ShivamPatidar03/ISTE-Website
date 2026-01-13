import CircularGallery from "./CircularGallery/CircularGallery";
import "./HeroCircularBg.css";
import isteGallery from "../../assets/gallery/isteGallery";

const HeroCircularBg = () => {
  return (
    <div className="hero-circular-bg">
      <CircularGallery
        items={isteGallery}
        bend={1.6}
        scrollSpeed={0.55}
        scrollEase={0.08}
        borderRadius={0.08}
        textColor="#ffffff"
      />
    </div>
  );
};

export default HeroCircularBg;
