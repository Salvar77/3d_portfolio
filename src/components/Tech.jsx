import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import classes from "./Tech.module.scss";
import { isAndroid } from "react-device-detect"; // Importujemy isAndroid

const Tech = () => {
  return (
    <div className={classes.techContainer}>
      {technologies.map((technology) => (
        <div className={classes.techItem} key={technology.name}>
          {!isAndroid && <BallCanvas icon={technology.icon} />}{" "}
          {/* Renderujemy tylko, jeśli nie Android */}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
