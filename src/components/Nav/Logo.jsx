import React from "react";
import classes from "./Logo.module.scss";
import { logo } from "../../assets";
import { Link, useNavigate } from "react-router-dom";

const Logo = ({ showLogo }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={classes.logo} onClick={handleLogoClick}>
      <img src={logo} alt="Logo firmy Search IT" />
    </div>
  );
};

export default Logo;
