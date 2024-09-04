import React from "react";
import { motion } from "framer-motion";
import classes from "./Hero.module.scss";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={classes.heroSection}>
      <div className={classes.heroContainer}>
        <div className={classes.centerContainer}>
          <div className={classes.circle} />
          <div className={classes.line} />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Cześć, jestem <span style={{ color: "#915eff" }}>Łukasz</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Tworzę 3D, interfejsy <br className="sm:block hidden" />
            użytkownika <br></br> i aplikacje internetowe.
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
