import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import classes from "./Contact.module.scss";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const closeModal = () => {
    setShowModal(false);
    setMessageStatus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_33qucyw",
        "template_zx5xnnu",
        {
          from_name: form.name,
          to_name: "Łukasz",
          from_email: form.email,
          to_email: "contact@searchit.pl",
          message: form.message,
        },
        "X92b9yN7VpBIFnm01"
      )
      .then(
        () => {
          setLoading(false);
          setMessageStatus("success:Wiadomość wysłana pomyślnie!");
          setShowModal(true);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          setMessageStatus("error:Wystąpił błąd przy wysyłaniu wiadomości.");
          setShowModal(true);
          console.log(error);
        }
      );
  };

  return (
    <>
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
            <div className={classes.consentWrapper}>
              <input
                type="checkbox"
                id="rodoConsent"
                checked={consent}
                onChange={() => setConsent(!consent)}
                required
              />
              <label htmlFor="rodoConsent">
                Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą
                o ochronie danych osobowych w związku z wysłaniem zapytania
                przez formularz kontaktowy. Podanie danych jest dobrowolne, ale
                niezbędne do przetworzenia zapytania. Zostałem poinformowany, że
                przysługuje mi prawo dostępu do swoich danych, możliwości ich
                poprawiania, żądania zaprzestania ich przetwarzania.
                Administratorem danych osobowych jest Łukasz Kuś Search IT, ul.
                Wojska Polskiego 1/40, 46-862 Opole.
              </label>
            </div>
            <button type="submit" className={classes.button}>
              {loading ? "Wysyłanie..." : "Wyślij"}
            </button>
          </form>
        </motion.div>

        {showModal && (
          <div className={classes.modal} onClick={closeModal}>
            <div className={classes.modalContent}>
              {messageStatus && (
                <p
                  className={
                    messageStatus.startsWith("success:")
                      ? classes.successMessage
                      : classes.errorMessage
                  }
                >
                  {messageStatus.split(":")[1]}
                </p>
              )}
            </div>
          </div>
        )}

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className={classes.canvasContainer}
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <p className={classes.policy}>
        Więcej informacji na temat przetwarzania danych osobowych znajdziesz w
        <Link
          to="/Legal"
          className={classes.policy__link}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span>Polityce Prywatności</span>
        </Link>
      </p>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
