import { useState } from "react";
import classes from "./ContactBubble.module.scss";

const ContactBubble = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded((prev) => !prev);

  return (
    <div
      className={`${classes.contactBubble} ${
        isExpanded ? classes.expanded : ""
      }`}
      onClick={handleToggle}
    >
      <div className={classes.bubbleContent}>
        <svg
          className={classes.phoneIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M6.62 10.79a15.09 15.09 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.47 11.47 0 003.6.61 1 1 0 011 1v3.44a1 1 0 01-1 1A16 16 0 013 4a1 1 0 011-1h3.44a1 1 0 011 1 11.47 11.47 0 00.61 3.6 1 1 0 01-.21 1.11z"
            fill="white"
          />
        </svg>
        <span className={classes.text}>
          Zadzwoń :{" "}
          <a href="tel:+48694004530" className={classes.phoneNumber}>
            694 004 530
          </a>
        </span>
      </div>
    </div>
  );
};

export default ContactBubble;
