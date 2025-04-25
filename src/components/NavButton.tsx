import { CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";


interface NavButtonProps {
  label: string;
  route: string;
}

const NavButton = ({ label, route }: NavButtonProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);


  return (
    <button
      style={isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
      onClick={() => navigate(route)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </button>
  );
};

const buttonStyle: CSSProperties = {
  fontSize: "0.875em",
  color: "red",
  background: "none",
  backgroundColor: "transparent",
  // padding: "5px 5px",
  display: "inline-block",
  border: "none",
  cursor: "pointer",
};

const hoverStyle: CSSProperties = {
  backgroundColor: "black", 
};

export default NavButton;