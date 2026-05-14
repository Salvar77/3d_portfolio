import React, { useState, useEffect } from "react";
import classes from "./BurgerMenu.module.scss";

const BurgerMenu = ({ isOpen, handleOpen }) => {
  const [isOverWhite, setIsOverWhite] = useState(false);

  useEffect(() => {
    const checkOverlap = () => {
      // Hamburger menu is roughly at the top of the screen (top 1rem). 
      // Let's define its vertical range.
      const burgerTop = 16;
      const burgerBottom = 80; // approximate height
      
      // Target the whole sections to avoid blinking
      const workAnchor = document.getElementById("work");
      const projectsDiv = document.getElementById("projects");
      
      const sectionsToTrack = [];
      if (workAnchor) sectionsToTrack.push(workAnchor.closest("section"));
      if (projectsDiv) sectionsToTrack.push(projectsDiv.closest("section"));
      
      let overlapping = false;
      sectionsToTrack.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= burgerBottom && rect.bottom >= burgerTop) {
            overlapping = true;
          }
        }
      });
      
      setIsOverWhite(overlapping);
    };

    window.addEventListener("scroll", checkOverlap);
    window.addEventListener("resize", checkOverlap);
    // Initial check
    checkOverlap();

    return () => {
      window.removeEventListener("scroll", checkOverlap);
      window.removeEventListener("resize", checkOverlap);
    };
  }, []);

  const toggleActive = () => {
    handleOpen();
  };

  return (
    <div className={classes.hamburgerContainer}>
      <button
        className={`${classes.hamburger} ${classes.hamburger__arrow} ${
          isOpen ? classes.isActive : ""
        } ${isOverWhite ? classes.violetIcon : ""}`}
        type="button"
        onClick={toggleActive}
        aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
      >
        <span className={classes.hamburgerBox}>
          <span className={classes.hamburgerInner}></span>
        </span>
      </button>
    </div>
  );
};

export default BurgerMenu;
