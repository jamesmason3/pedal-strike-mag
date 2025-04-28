import NavButton from "../components/NavButton";
import '../fonts.css'

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "15%" }}>
      <h1 style={{ fontFamily: "'Hold Money', sans-serif", fontSize: "3em", marginBottom: "10px" }}>Pedal Strike Mag</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
        <NavButton label="shop" route="/shop" />
        <NavButton label="gallery" route="/gallery" />
        <NavButton label="contact" route="/contact" />
        <NavButton label="landing" route="/landing" />
      </div>
    </div>
  );
};

export default HomePage;