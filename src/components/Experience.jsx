import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import classes from "./Experience.module.scss";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className={classes.experienceIconContainer}>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className={classes.experienceIcon}
        />
      </div>
    }
  >
    <div>
      <h3 className={classes.experienceTitle}>{experience.title}</h3>
      <p className={classes.experienceCompany}>{experience.company_name}</p>
    </div>
    <ul className={classes.experienceList}>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className={classes.experienceListItem}
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Jakie projekty zostały wykonane</p>
        <h2 className={styles.sectionHeadText}>Doświadczenie Zawodowe</h2>
      </motion.div>

      <div className={classes.experienceContainer}>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
