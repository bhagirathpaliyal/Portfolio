import { useState } from "react";

const defaultText = {
  heading: "My Tech Stack",
  description:
    "These are the core technologies I use to build fast, responsive, and modern web applications.",
};

const hexData = [
  {
    label: "HTML<br />&<br />CSS",
    heading: "HTML & CSS",
    description:
      "The foundation of every website — semantic HTML and responsive, modern CSS.",
    position: { top: "0%", left: "50%", transform: "translate(-50%, 0)" },
  },
  {
    label: "JavaScript<br />&<br />TypeScript",
    heading: "JavaScript & TypeScript",
    description: "Core scripting languages for building dynamic, type-safe web apps.",
    position: { top: "32.5%", left: "72.5%", transform: "translate(-50%, -50%)" },
  },
  {
    label: "React<br />&<br />Redux",
    heading: "React & Redux",
    description: "Building interactive UIs with React and managing state using Redux.",
    position: { top: "67.5%", left: "72.5%", transform: "translate(-50%, -50%)" },
  },
  {
    label: "Tailwind<br />CSS",
    heading: "Tailwind CSS",
    description:
      "Utility-first CSS framework for creating modern, responsive designs fast.",
    position: { top: "100%", left: "50%", transform: "translate(-50%, -100%)" },
  },
 {
  label: "Firebase",
  heading: "Firebase",
  description: "Used for hosting, Firestore, real-time updates, and basic backend services.",
  position: { top: "67.5%", left: "27.5%", transform: "translate(-50%, -50%)" },
},
{
  label: "Git<br />&<br />GitHub",
  heading: "Git & GitHub",
  description: "Version control using Git and remote repositories via GitHub.",
  position: { top: "32.5%", left: "27.5%", transform: "translate(-50%, -50%)" },
}

];

const Skill = () => {
  const [text, setText] = useState(defaultText);

  const handleMouseEnter = (heading: string, description: string) => {
    setText({ heading, description });
  };

  const handleMouseLeave = () => {
    setText(defaultText);
  };

  return (
    <div
      id="section2"
      className="section2 flex flex-col items-center md:py-[100px] py-[50px] animate-[appear1_linear] animationTimeline"
    >
      <p className="text-[16px]">Explore My</p>
      <h2 className="md:text-[28px] text-[20px] font-bold">Skills</h2>

      <div className="flex max-md:flex-col max-md:gap-[20px] justify-between w-full mt-[32px] relative items-center">

        <div className="max-w-xl text-center md:text-left transition-all text-gray-800 dark:text-gray-200 px-4 md:w-1/2">
          <h1 className="text-2xl font-bold">{text.heading}</h1>
          <p className="mt-2 tex">{text.description}</p>
        </div>


        <div className="relative w-[450px] md:w-[600px] h-[400px] md:h-[500px] mt-10 sm:mt-0">

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <svg viewBox="0 0 278 250" className="w-32 h-32 max-lg:w-28 max-lg:h-28">
              <defs>
                <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F0FF" />
                  <stop offset="100%" stopColor="#00FF84" />
                </linearGradient>
                <path
                  id="hexPath"
                  d="M272.329 108.25C277.956 117.996 277.956 130.004 272.329 139.75L219.305 231.592C213.678 241.338 203.279 247.342 192.025 247.342L85.9752 247.342C74.7213 247.342 64.3223 241.338 58.6954 231.592L5.67062 139.75C0.0436947 130.004 0.0436952 117.996 5.67062 108.25L58.6954 16.4084C64.3223 6.66223 74.7213 0.658362 85.9752 0.658362L192.025 0.658367C203.279 0.658368 213.678 6.66223 219.305 16.4084L272.329 108.25Z"
                />
              </defs>
              <use
                href="#hexPath"
                fill="currentColor"
                stroke="url(#hexGradient)"
                strokeWidth="2"
                className="text-neutral-900 dark:text-neutral-800"
              />
            </svg>
            {/* <img
              src="./logo.png"
              alt="Logo"
              className="absolute top-1/2 left-1/2 w-28 -translate-x-1/2 -translate-y-1/2"
            /> */}
            <div className="absolute top-1/2 left-1/2 w-28 -translate-x-1/2 -translate-y-1/2 text-white">   Tech Stack</div>
         
          </div>


          {hexData.map((item, i) => (
            <div
              key={i}
              className="absolute w-32 h-32 max-lg:w-28 max-lg:h-28 text-center text-sm text-white dark:text-gray-100 cursor-pointer"
              style={item.position}
              onMouseEnter={() => handleMouseEnter(item.heading, item.description)}
              onMouseLeave={handleMouseLeave}
            >
              <svg viewBox="0 0 278 250" className="w-full h-full">
                <use
                  href="#hexPath"
                  fill="#161616"
                  stroke="url(#hexGradient)"
                  strokeWidth="2"
                />
              </svg>
              <span
                className="absolute inset-0 flex items-center justify-center leading-tight px-1 text-xs sm:text-sm"
                dangerouslySetInnerHTML={{ __html: item.label }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
