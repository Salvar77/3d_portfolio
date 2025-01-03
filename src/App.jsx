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
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./components/Legal/PrivacyPolicy";
import ContactBubble from "./components/ContactBubble";

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
        <div className="bg-hero-pattern h-screen w-full ">
          <Logo showLogo={showLogo} />
          <Nav isOpen={isOpen} toggleNav={toggleNav} />
          <BurgerMenu isOpen={isOpen} handleOpen={toggleNav} />
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Experience />
                <Tech />
                <Works />

                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>
              </>
            }
          />
          <Route path="/legal" element={<PrivacyPolicy />} />
        </Routes>

        <Footer />
        <ContactBubble />
      </div>
    </BrowserRouter>
  );
};

export default App;
