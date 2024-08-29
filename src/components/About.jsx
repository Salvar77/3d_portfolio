import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import classes from "./About.module.scss"; // Zaktualizowany import modułu SCSS
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className={classes.serviceCard}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className={classes.gradientBorder}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={classes.cardContent}
        >
          <img src={icon} alt={title} />
          <h3>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <motion.div variants={textVariant()}>
        <p className="section-sub-text">Wprowadzenie</p>
        <h2 className="section-head-text">Przegląd</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={classes.description}
      >
        Jestem Łukasz. Web Developmentem zajmuje się od Września 2022 roku, a
        firma Search IT zajmuje się tworzeniem stron WWW, oraz e-sklepów,
        dostosowanych do potrzeb Twojej firmy.
      </motion.p>

      <div className={classes.serviceContainer}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
