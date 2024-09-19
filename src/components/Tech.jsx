import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import classes from "./Tech.module.scss";
import { isAndroid } from "react-device-detect"; // Importujemy isAndroid

const Tech = () => {
  // Jeśli jest Android, zwróć null, by pominąć całą sekcję
  if (isAndroid) {
    return null;
  }

  return (
    <div className={classes.techContainer}>
      {technologies.map((technology) => (
        <div className={classes.techItem} key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
