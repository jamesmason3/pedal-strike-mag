import NavButton from "./NavButton";
import backgroundImage from "../assets/photos/background-01.png";

const LandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "fixed",    
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        overflow: "hidden",   
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-begin", gap: "10px", padding: "5px" }}>
        <NavButton label="home" route="/" />
      </div>
      <div style={{ textAlign: "center", paddingTop: "15%" }}>
        <h1 style={{ fontFamily: "'Hold Money', sans-serif", fontSize: "3em", marginBottom: "10px", color: "red" }}>
          Pedal Strike Mag
        </h1>
        
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
          <input
            type="email"
            placeholder="email"
            style={{
              padding: "10px",
              fontSize: "1em",
              width: "250px",
            }}
          />
          <button
            style={{
              padding: "10px 20px",
              fontSize: "1em",
              backgroundColor: "black",
              color: "red",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => alert("subbed")}
          >
            Subscribe
          </button>
        </div> 
      </div>
    </div>
  );
};

export default LandingPage;
