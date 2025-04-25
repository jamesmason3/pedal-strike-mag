import React, { useState } from "react";
import NavButton from "./NavButton";
import { useNavigate } from "react-router-dom";
import "./GalleryPage.css";

const images = [
    { src: "src/assets/photos/shop/shirt.png", id: "tee1", price: "$900" },
    { src: "src/assets/photos/shop/shirt.png", id: "tee1", price: "$900" },
    { src: "src/assets/photos/shop/shirt.png", id: "tee1", price: "$900" },
];

const ShopPage = () => {
  const navigate = useNavigate();
  // const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <div>
      {/* Fullscreen view */}
      {/* {selectedImage && (
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
      )} */}

      {/* Buttons Row */}
      <div style={{ display: "flex", justifyContent: "flex-start", gap: "10px", padding: "5px"}}>
        <NavButton label="home" route="/" />
        <NavButton label="gallery" route="/gallery" />
        <NavButton label="contact" route="/contact" />
      </div>

      {/* Gallery grid */}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => navigate(`/products/${image.id}`)}

          >
            <img src={image.src} alt={image.id} className="gallery-image" />
            {/* <div className="caption">{image.caption}</div> */}
            <div className="price">{image.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default ShopPage