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
      className={`${
        active ? "fixed left-0 top-0 " : "fixed left-[-100%] top-0"
      } w-[100%] h-[100vh] bg-gray-200 `}
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
          >
            About
          </li>
          <li
            onClick={() => {
              setIsActive(false);
              scrollToSection("section2");
            }}
          >
            Skill
          </li>
          <li
            onClick={() => {
              setIsActive(false);
              scrollToSection("section3");
            }}
          >
            Project
          </li>
          <li
            onClick={() => {
              setIsActive(false);
              scrollToSection("section4");
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveNav;
