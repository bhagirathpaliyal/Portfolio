import React, { useState } from "react";
import Navbar from "./Navbar";
import ResponsiveNav from "./ResponsiveNav";

interface HeaderProps {
  scrollToSection: (id: string) => void;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex h-[80px] justify-between items-center md:px-[50px]">
      <div className="md:text-[32px] text-[24px]">BP</div>
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
      <button onClick={toggleDarkMode} className="p-[16px] rounded-[25px] text-[13px] font-bold border-[2px] border-[#353535] text-[#ffffff] bg-[#353535] hover:bg-[#000000] hover:border-[#000000]">
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default Header;
