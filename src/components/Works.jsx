import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { vercel } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import classes from "./Works.module.scss";

const isIPhone = /iPhone|iPad|iPod/i.test(navigator.userAgent);
const isAndroid = /Android/i.test(navigator.userAgent);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  vercel_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={classes.projectCard}
      >
        <div className={classes.projectImageContainer}>
          <img
            src={image}
            alt={name}
            className={classes.projectImage}
            loading="lazy"
          />

          <div className={classes.cardImageHover}>
            {vercel_link && (
              <div
                onClick={() => window.open(vercel_link, "_blank")}
                className={classes.vercelIconContainer}
              >
                <img src={vercel} alt="vercel" className={classes.vercelIcon} />
              </div>
            )}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className={classes.githubIconContainer}
            >
              <img src={github} alt="github" className={classes.githubIcon} />
            </div>
          </div>
        </div>

        <div className={classes.projectInfo}>
          <h3 className={classes.projectTitle}>{name}</h3>
          <p className={classes.projectDescription}>{description}</p>
        </div>

        <div className={classes.projectTags}>
          {tags.map((tag) => (
            <p key={tag.name} className={`${classes.projectTag} ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const visibleProjects = isIPhone
    ? projects.slice(0, 3)
    : isAndroid
    ? projects.slice(0, 3)
    : projects;

  return (
    <>
      <motion.div id="projects" variants={textVariant()}>
        <p className={styles.sectionSubText}>Wykonane Prace</p>
        <h2 className={styles.sectionHeadText}>Projekty.</h2>
      </motion.div>
      <div>
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className={classes.projectText}
          >
            Projekty, które przedstawiam, ukazują moje umiejętności i
            doświadczenie poprzez rzeczywiste przykłady mojej pracy. Każdy
            projekt jest krótko opisany, a także zawiera linki do repozytoriów
            kodu oraz działających wersji demonstracyjnych. Projekty te
            odzwierciedlają moją zdolność do rozwiązywania złożonych problemów,
            pracy z różnymi technologiami oraz efektywnego zarządzania
            projektami.
          </motion.p>
        </div>

        <div className={classes.projectsContainer}>
          {visibleProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
