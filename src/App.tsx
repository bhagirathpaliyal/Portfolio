import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

const App: React.FC = () => {
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container w-[80%] mx-auto font-poppins animate-[appear_linear] animationTimeline">
      <Header scrollToSection={scrollToSection}/>
      <Home scrollToSection={scrollToSection}/>
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer scrollToSection={scrollToSection}/>
    </div>
  );
};

export default App;
