import React from "react";
import classes from "./Logo.module.scss";
import { logo } from "../../assets";

const Logo = ({ showLogo }) => {
  const logoStyle = {
    opacity: showLogo ? 1 : 0,
    transform: showLogo ? "translateY(0)" : "translateY(-20px)",
    transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
  };

  return (
    <div style={logoStyle} className={classes.logo}>
      <img src={logo} alt="Logo firmy Search IT" />
    </div>
  );
};

export default Logo;
