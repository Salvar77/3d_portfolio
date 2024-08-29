import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} ${classes.navbar}`}>
      <div className={classes.navbarContainer}>
        <Link
          to="/"
          className={classes.logoContainer}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className={classes.logoImage} />
          <p className={classes.logoText}>
            Łukasz Kuś &nbsp;
            <span className={classes.logoTextSpan}>| Search IT</span>
          </p>
        </Link>
        <ul className={classes.navLinks}>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${classes.navLinkItem} ${
                active === link.title ? classes.active : ""
              }`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className={classes.menuToggleContainer}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={classes.menuIcon}
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? classes.hidden : classes.flex} ${
              classes.menuDropdown
            }`}
          >
            <ul className={classes.menuDropdownList}>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${classes.menuDropdownItem} ${
                    active === link.title ? classes.active : ""
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
