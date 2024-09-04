import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../../constants";
import classes from "./Nav.module.scss";

const Nav = ({ isOpen, toggleNav }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleNav = () => {
    if (windowWidth < 992) {
      toggleNav();
    }
  };

  const handleNavLinkClick = (link) => {
    setActive(link.title);
    handleToggleNav();

    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(link.id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const navClasses = `${classes.nav} ${isOpen ? classes.nav__show : ""}`;

  return (
    <nav className={navClasses}>
      <div className={classes.nav__container}>
        <ul className={classes.nav__item}>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? classes.active : ""}`}
              onClick={() => handleNavLinkClick(link)}
            >
              <Link to="/" className={classes.navLinkItem}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
