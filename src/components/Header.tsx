import React, { useState } from "react";
import Navbar from "./Navbar";
import ResponsiveNav from "./ResponsiveNav";
import { MoonIcon,SunIcon } from "@heroicons/react/16/solid";

interface HeaderProps {
  scrollToSection: (id: string) => void;
  toggleDarkMode: () => void;
  darkMode:boolean
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, toggleDarkMode,darkMode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="sticky top-0 z-[1000] bg-[#fff] dark:bg-[#121212] flex h-[80px] justify-between items-center md:px-[50px]">
      <div className="md:text-[20px] max-md:hidden">BP</div>
      <div className="max-md:hidden">
        <Navbar scrollToSection={scrollToSection} />
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>{!isOpen && "Menu"}</button>

        {isOpen && (
          <ResponsiveNav
            active={isOpen}
            setIsActive={setIsOpen}
            scrollToSection={scrollToSection}
          />
        )}
      </div>
      <button onClick={toggleDarkMode} className="">
      {darkMode ? (
        <SunIcon className="h-6 w-6 text-[#fff]" />
      ) : (
        <MoonIcon className="h-6 w-6 text-[#000]" />
      )}
      </button>
    </div>
  );
};

export default Header;
