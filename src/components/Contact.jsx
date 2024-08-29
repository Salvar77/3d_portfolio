import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import classes from "./Contact.module.scss"; // Import modułu SCSS

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`${classes.contactContainer}`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className={classes.formContainer}
      >
        <p className={styles.sectionSubText}>Skontaktuj się</p>
        <h3 className={styles.sectionHeadText}>Kontakt.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className={classes.form}>
          <label className={classes.label}>
            <span className={classes.labelText}>Twoje Imię</span>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Jakie jest twoje imię?"
              className={classes.input}
            />
          </label>
          <label className={classes.label}>
            <span className={classes.labelText}>Twój Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Jaki jest twój email?"
              className={classes.input}
            />
          </label>
          <label className={classes.label}>
            <span className={classes.labelText}>Twoja wiadomość</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Co chcesz powiedzieć?"
              className={classes.textarea}
            />
          </label>
          <button type="submit" className={classes.button}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className={classes.canvasContainer}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
