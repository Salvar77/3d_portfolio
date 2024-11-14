import React from "react";
import classes from "./Logo.module.scss";
import { logo } from "../../assets";
import { Link, useNavigate } from "react-router-dom";

const Logo = ({ showLogo }) => {
  const navigate = useNavigate();
  const logoStyle = {
    opacity: showLogo ? 1 : 0,
    transform: showLogo ? "translateY(0)" : "translateY(-20px)",
    transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
  };

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={logoStyle} className={classes.logo} onClick={handleLogoClick}>
      <img src={logo} alt="Logo firmy Search IT" />
    </div>
  );
};

export default Logo;
