import React, { useState } from "react";
import NavButton from "./NavButton";
import "./GalleryPage.css";

const albums: { [key: string]: { src: string; caption: string }[] } = {
  wasatchFront: [
    { src: "src/assets/photos/wasatch_front/Photo Feb 02 2025, 9 29 58 PM.jpg", caption: "Chris' Gary Fisher 1" },
    { src: "src/assets/photos/wasatch_front/Photo Feb 02 2025, 9 29 58 PM (1).jpg", caption: "Chris' Gary Fisher 2" },
    { src: "src/assets/photos/wasatch_front/Photo Feb 02 2025, 9 29 58 PM (2).jpg", caption: "Colby and his rig" },
    { src: "src/assets/photos/wasatch_front/Photo Feb 02 2025, 9 29 58 PM (3).jpg", caption: "James and his Giant Iguana" },
    { src: "src/assets/photos/wasatch_front/Photo Feb 02 2025, 9 29 58 PM (4).jpg", caption: "Hiking" },
    { src: "src/assets/photos/wasatch_front/Photo Feb 02 2025, 9 29 58 PM (5).jpg", caption: "Beautiful" },
    { src: "src/assets/photos/wasatch_front/Photo Feb 02 2025, 9 29 58 PM (6).jpg", caption: "Peter with the Salsa" },
    { src: "src/assets/photos/wasatch_front/Photo Feb 02 2025, 9 29 58 PM (7).jpg", caption: "Colby and Matt just looking" },
    { src: "src/assets/photos/wasatch_front/Photo Feb 02 2025, 9 29 58 PM (8) (1).jpg", caption: "Peter ripping" },
    { src: "src/assets/photos/wasatch_front/Photo Feb 02 2025, 9 29 58 PM (8).jpg", caption: "Elliot ripping" },
  ],
  westDesert: [
    { src: "src/assets/photos/west_desert/Photo Feb 02 2025, 9 29 58 PM (9).jpg", caption: "Sign 1" },
    { src: "src/assets/photos/west_desert/Photo Feb 02 2025, 9 29 58 PM (10).jpg", caption: "Sign 2" },
    { src: "src/assets/photos/west_desert/Photo Feb 02 2025, 9 29 58 PM (11) (1).jpg", caption: "Tree 1" },
    { src: "src/assets/photos/west_desert/Photo Feb 02 2025, 9 29 58 PM (11).jpg", caption: "Tree 2" },
    { src: "src/assets/photos/west_desert/Photo Feb 02 2025, 9 29 58 PM (12).jpg", caption: "Rocks 1" },
    { src: "src/assets/photos/west_desert/Photo Feb 02 2025, 9 29 58 PM (13).jpg", caption: "Rocks 2" },
    { src: "src/assets/photos/west_desert/Photo Feb 02 2025, 9 29 58 PM (14).jpg", caption: "Road" },
    { src: "src/assets/photos/west_desert/Photo Feb 02 2025, 9 29 58 PM (15).jpg", caption: "Road with rigs" },
    { src: "src/assets/photos/west_desert/Photo Nov 18 2021, 2 42 51 PM.jpg", caption: "Cows" },
  ]
};

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentAlbum, setCurrentAlbum] = useState("wasatchFront");
  return (
    <div>
      {/* Fullscreen view */}
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setSelectedImage(null)} // Close on click
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          />
        </div>
      )}

      {/* Buttons Row */}
      <div style={{ display: "flex", justifyContent: "flex-start", gap: "10px", padding: "5px"}}>
        <NavButton label="home" route="/" />
        <NavButton label="shop" route="/shop" />
        <NavButton label="contact" route="/contact" />
      </div>

      {/* Dropdown Menu */}
      <div className="dropdown-menu">
        <select
          id="imageSetSelector"
          value={currentAlbum}
          onChange={(e) => setCurrentAlbum(e.target.value)}
        >
          <option value="wasatchFront">Wasatch Front</option>
          <option value="westDesert">West Desert</option>
        </select>
      </div>

      {/* Gallery grid */}
      <div className="gallery-grid">
        {albums[currentAlbum].map((image, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => setSelectedImage(image.src)}
          >
            <img src={image.src} alt={image.caption} className="gallery-image" />
            <div className="caption">{image.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default GalleryPage