import React, { useEffect } from "react";

type ResponsiveNavProps = {
  active: boolean;
  setIsActive: (isActive: boolean) => void;
  scrollToSection: (id: string) => void;
};

const ResponsiveNav: React.FC<ResponsiveNavProps> = ({
  active,
  setIsActive,
  scrollToSection,
}) => {
  useEffect(() => {
    const handleScroll = () => {
      setIsActive(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsActive]);

  return (
    <div
      className={`duration-300 fixed top-[0px] w-[100%] h-[100vh] bg-gray-200 dark:bg-[#1e1e1e]  
         ${active ? "left-[0px]" : "left-[-100%]"}`}
    >
      <button
        onClick={() => setIsActive(false)}
        className=" w-[100%] flex justify-end pt-[20px] pr-[20px]"
      >
        Close
      </button>
      <div className="h-[50%] flex flex-col  items-center gap-6 mt-12">
        <img
          src="./assets/MyImg.jpg"
          className="h-32 rounded-full"
          alt="profile photo"
        />
        <ul className="flex flex-col items-center gap-4">
          <li
            onClick={() => {
              setIsActive(false);
              scrollToSection("section1");
            }}
            className="dark:text-[#e0e0e0]"
          >
            About
          </li>
          <li
            onClick={() => {
              setIsActive(false);
              scrollToSection("section2");
            }}
            className="dark:text-[#e0e0e0]"
          >
            Skill
          </li>
          <li
            onClick={() => {
              setIsActive(false);
              scrollToSection("section3");
            }}
            className="dark:text-[#e0e0e0]"
          >
            Project
          </li>
          <li
            onClick={() => {
              setIsActive(false);
              scrollToSection("section4");
            }}
            className="dark:text-[#e0e0e0]"
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveNav;
