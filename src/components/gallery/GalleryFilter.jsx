import "./GalleryFilter.css";

const categories = ["All", "Events", "Workshops", "Talks", "Fun"];

const GalleryFilter = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="gallery-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={activeCategory === cat ? "active" : ""}
          onClick={() => setActiveCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilter;
