import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import classes from "./Tech.module.scss";

const Tech = () => {
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
