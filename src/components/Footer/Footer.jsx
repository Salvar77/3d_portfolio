import GoogleMaps from "../GoogleMaps";
import classes from "./Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <GoogleMaps />
      <div className={classes.footer__container}>
        <div className={classes.footer__text}>
          <p>
            Ul. Wojska Polskiego 1/40, 45-862 Opole | Tel: +48 694 004 530 |{" "}
            <a href="mailto:lukaszkus77@gmail.com">contact@searchit.pl</a>
          </p>
        </div>

        <ul className={classes.footer__icons}>
          <li>
            <a
              href="https://www.facebook.com/nazwa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/twoja_nazwa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className={classes.footer__bottom}>
        <p className={classes.footer__textInfo}>
          &copy;{currentYear} Search IT
        </p>
      </div>
    </footer>
  );
};

export default Footer;
