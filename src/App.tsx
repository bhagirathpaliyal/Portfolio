import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`container w-[80%] mx-auto font-poppins animate-[appear_linear] animationTimeline ${
        darkMode ? "dark" : ""
      }`}
    >
      <Header
        scrollToSection={scrollToSection}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      
      <Home scrollToSection={scrollToSection} />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;
