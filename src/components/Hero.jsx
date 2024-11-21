import React from "react";
import { motion } from "framer-motion";
import classes from "./Hero.module.scss";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { isAndroid } from "react-device-detect"; // Importujemy isAndroid

const Hero = () => {
  // Jeśli jest Android, zwróć tylko elementy tekstowe, aby pominąć renderowanie ComputersCanvas
  if (isAndroid) {
    return (
      <section className={classes.heroSection}>
        <div className={classes.heroContainer}>
          <div className={classes.centerContainer}>
            <div className={classes.circle} />
            <div className={classes.line} />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Witaj, jestem <span style={{ color: "#915eff" }}>Łukasz</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Tworzę nowoczesne strony, <br />
              aplikacje internetowe i interfejsy użytkownika.
            </p>
          </div>
        </div>
        <div className={classes.scrollContainer}>
          <a href="#about">
            <div className={classes.scrollLink}>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className={classes.scrollDot}
              />
            </div>
          </a>
        </div>
      </section>
    );
  }

  // Jeśli nie jest Android, renderujemy pełną sekcję z ComputersCanvas
  return (
    <section className={classes.heroSection}>
      <div className={classes.heroContainer}>
        <div className={classes.centerContainer}>
          <div className={classes.circle} />
          <div className={classes.line} />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Witaj, jestem <span style={{ color: "#915eff" }}>Łukasz</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Tworzę nowoczesne strony, <br />
            aplikacje internetowe i interfejsy użytkownika.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className={classes.scrollContainer}>
        <a href="#about">
          <div className={classes.scrollLink}>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className={classes.scrollDot}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
