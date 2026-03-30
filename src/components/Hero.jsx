import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import classes from "./Hero.module.scss";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import { isAndroid } from "react-device-detect";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={classes.heroSection}>
      <div className={classes.heroContainer}>
        <div className={classes.centerContainer}>
          <div className={classes.circle} />
          <div className={classes.line} />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Witam, jestem {isMobile ? <br /> : null}
            <span style={{ color: "#915eff" }}>Łukasz</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Tworzę nowoczesne strony, <br />
            aplikacje internetowe i interfejsy użytkownika.
          </p>
        </div>
      </div>
      <div className={classes.imageContainer}>
        <img src="/logo3.svg" alt="Twoja firma" className={classes.image} />
      </div>
      <div className={classes.scrollContainer}>
        <a href="#about" aria-label="Przejdź do sekcji 'O mnie'">
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
