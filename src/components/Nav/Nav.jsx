import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.scss";

const Nav = ({ isOpen, toggleNav }) => {
  let navClasses = classes.nav;

  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isOpen) {
    navClasses = `${classes.nav} ${classes.nav__show}`;
  }

  const handleToggleNav = () => {
    if (windowWidth < 992) {
      toggleNav();
    }
  };

  return (
    <nav className={navClasses}>
      <div className={classes.nav__container}>
        <div className={classes.nav__items}>
          <ul aria-hidden="true" className={classes.nav__item}>
            <li onClick={handleToggleNav}>
              <Link to="/#O-mnie">O mnie</Link>
            </li>
            <li onClick={handleToggleNav}>
              <Link to="/#realizacje">Realizacje</Link>
            </li>
            <li onClick={handleToggleNav}>
              <Link to="/#projekty">Projekty</Link>
            </li>
            <li onClick={handleToggleNav}>
              <Link to="/#kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
