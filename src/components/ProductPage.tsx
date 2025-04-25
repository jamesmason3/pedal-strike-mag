import { useParams } from "react-router-dom";
import { useState } from "react";
import shirtImage from "../assets/photos/shop/shirt.png";
import NavButton from "./NavButton";

const productData: Record<string, { name: string; price: string; image: string; description: string }> = {
  tee1: {
    name: "source tee",
    price: "$900",
    image: shirtImage,
    description: "premium imaginary cotton tee.",
  },
};

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? productData[productId] : null;
  const [currentSize, setCurrentSize] = useState("small");
  
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div >
      
      {/* Buttons Row */}
      <div style={{ display: "flex", justifyContent: "flex-start", gap: "10px", padding: "5px"}}>
      <NavButton label="home" route="/" />
      <NavButton label="gallery" route="/gallery" />
      <NavButton label="contact" route="/contact" />
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "1rem" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ maxWidth: "800px", width: "100%", objectFit: "contain" }}
        />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "30rem"}}>
          <h1>{product.name} - {product.price}</h1>
          <p>{product.description}</p>

        <div>
          <select
            id="sizeSelector"
            value={currentSize}
            onChange={(e) => setCurrentSize(e.target.value)}
            style={{ color: "red"}}
          >
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="xlarge">xlarge</option>
          </select>
        </div>

          {/* Add to Cart */}
          <button style={{ fontSize: "0.875em",
            color: "red",
            background: "black",
            backgroundColor: "transparent",
            marginTop: "1rem",
            display: "inline-block",
            border: "1px solid black",
            cursor: "pointer", }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
