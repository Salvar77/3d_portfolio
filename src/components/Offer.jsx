import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import classes from "./Offer.module.scss";

const Offer = () => {
  return (
    <section id="oferta" className={classes.offerContainer}>
      <div className={classes.timeline}>
        <h2>Czas realizacji projektu</h2>
        <p>
          Standardowe projekty stron internetowych zazwyczaj wymagają od 1 do 2
          tygodni realizacji, w zależności od ich złożoności. W przypadku
          bardziej zaawansowanych projektów, takich jak sklepy internetowe, czas
          realizacji może wynosić od 2 do 4 tygodni, w zależności od wymagań
          klienta i liczby funkcjonalności.
        </p>
      </div>

      <div className={classes.support}>
        <h2>Kompleksowe Rozwiązania i Wsparcie</h2>
        <p>
          Oferuję pełne wsparcie po wdrożeniu stron, w tym hosting oraz bieżącą
          opiekę techniczną. Zajmuję się konfiguracją serwera, monitorowaniem
          oraz aktualizacjami, aby zapewnić sprawne działanie strony.
        </p>
      </div>

      <div className={classes.pricing}>
        <h2>Cennik</h2>
        <p>
          Ceny moich usług są ustalane indywidualnie, w zależności od złożoności
          projektu, liczby funkcjonalności oraz specyficznych wymagań klienta.
          Każda strona internetowa oraz sklep mają dostosowaną wycenę,
          uwzględniającą potrzeby i oczekiwania klienta.
        </p>
      </div>

      <div className={classes.whyMe}>
        <h2>Dlaczego Warto Mnie Wybrać</h2>
        <ul>
          <li>
            <strong>Zaangażowanie i ciągłe doskonalenie:</strong> stale rozwijam
            swoje umiejętności, pracując nad różnorodnymi projektami.
          </li>
          <li>
            <strong>Skupienie na użytkowniku:</strong> projektuję strony z myślą
            o łatwości obsługi i przyjemności z korzystania.
          </li>
          <li>
            <strong>Nowoczesne technologie:</strong> używam aktualnych narzędzi
            programistycznych.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionWrapper(Offer, "offer");
