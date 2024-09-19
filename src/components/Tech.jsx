import React, { lazy, Suspense } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import classes from "./Tech.module.scss";

// Lazy load the BallCanvas component
const BallCanvas = lazy(() => import("./canvas/Ball"));

const Tech = () => {
  return (
    <div className={classes.techContainer}>
      {technologies.map((technology) => (
        <div className={classes.techItem} key={technology.name}>
          <Suspense fallback={<div>Loading Icon...</div>}>
            <BallCanvas icon={technology.icon} />
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
