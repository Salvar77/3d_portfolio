import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import classes from "./Experience.module.scss";
import "react-vertical-timeline-component/style.min.css";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { realizations, experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import vcardFazar from "../assets/company/vcardSvg.svg";

const ExperienceCard = ({ realization, openModal }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={realization.date}
    iconStyle={{ background: realization.iconBg }}
    icon={
      <div className={classes.experienceIconContainer}>
        <img
          src={experiences.icon}
          alt={experiences.title}
          className={classes.experienceIcon}
        />
      </div>
    }
  >
    <div>
      <h3 className={classes.experienceTitle}>{realization.title}</h3>
      <p className={classes.experienceCompany}>{realization.company_name}</p>
    </div>
    <div className={classes.realizations__boxImg}>
      <img
        className={classes.realizations__img}
        src={realization.image}
        alt={`Zdjęcie ${realization.title}`}
      />
      {realization.title === "Fazar" ? (
        <button
          className={`${classes.uiBtn} ${classes.imageOverlay}`}
          onClick={openModal}
        >
          <span>Przejdź</span>
        </button>
      ) : realization.link.startsWith("/") ? (
        <Link
          to={realization.link}
          className={`${classes.uiBtn} ${classes.imageOverlay}`}
        >
          <span>Przejdź</span>
        </Link>
      ) : (
        <a
          href={realization.link}
          className={`${classes.uiBtn} ${classes.imageOverlay}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Przejdź</span>
        </a>
      )}
    </div>
    <div className={classes.experienceDescription}>
      <p>{realization.description}</p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Zrealizowane Projekty</p>
        <h2 className={styles.sectionHeadText}>Realizacje</h2>
      </motion.div>

      <div className={classes.experienceContainer}>
        <VerticalTimeline>
          {realizations.map((realization, index) => (
            <ExperienceCard
              key={index}
              realization={realization}
              openModal={realization.title === "Fazar" ? openModal : null}
            />
          ))}
        </VerticalTimeline>
      </div>

      {isModalOpen && (
        <div className={classes.modal} onClick={closeModal}>
          <div
            className={classes.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={classes.close} onClick={closeModal}>
              <i className="fa fa-times"></i>
            </span>
            <img
              src={vcardFazar}
              alt="Wizytówka Fazar"
              className={classes.modalImage}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Experience, "work");
