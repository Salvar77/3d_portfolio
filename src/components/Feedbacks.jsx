import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import classes from "./Feedbacks.module.scss";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "", index * 0.5, 0.75)}
    className={classes.feedbackCard}
  >
    <p className={classes.feedbackQuote}>"</p>
    <div className={classes.feedbackText}>
      <p>{testimonial}</p>

      <div className={classes.feedbackInfo}>
        <div className={classes.feedbackUserInfo}>
          <p className={classes.feedbackUserName}>
            <span className={classes.blueTextGradient}>@</span> {name}
          </p>
          <p className={classes.feedbackUserDesignation}>
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback-by-${name}`}
          className={classes.feedbackUserImage}
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={classes.feedbackContainer}>
      <div className={`${styles.padding} ${classes.feedbackHeader}`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Co mówią inni</p>
          <h2 className={styles.sectionHeadText}>Referencje</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} ${classes.feedbackContent}`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
