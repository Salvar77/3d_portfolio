import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Nav from "./components/Nav/Nav";
import BurgerMenu from "./components/Nav/BurgerMenu";
import Logo from "./components/Nav/Logo";
import PrivacyPolicy from "./components/Legal/PrivacyPolicy"; // Import komponentu Polityki Prywatności

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = document.documentElement.scrollTop;
      const windowWidth = window.innerWidth;

      setShowLogo(!(windowWidth < 992 && currentScrollPos > 200));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Umieszczenie elementów wspólnych jak Nav i Logo */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Logo showLogo={showLogo} />
          <Nav isOpen={isOpen} toggleNav={toggleNav} />
          <BurgerMenu isOpen={isOpen} handleOpen={toggleNav} />
        </div>

        <Routes>
          {/* Strona główna */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Experience />
                <Tech />
                <Works />
                <Feedbacks />
                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>
              </>
            }
          />

          {/* Strona Polityki Prywatności */}
          <Route path="/legal" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
