import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

type Project = {
  description: string;
  name: string;
  type: string;
  src: string;
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    description:
      "A full-fledged e-commerce platform supporting both merchant and customer roles. Merchants can manage products, while customers can browse and purchase seamlessly — all from accounts using the same email.",
    name: "E-Commerce Page",
    type: "Web app",
    src: "./assets/ecommerce-page.png",
    github: "https://github.com/bhagirathpaliyal/E-commerce-page",
    live: "https://bhagirathpaliyal.github.io/E-commerce-page/",
  },
  {
    description:
      "A professional static portfolio site tailored for advocates. Designed to mirror modern legal service websites, it emphasizes responsive design, clarity, and smooth navigation for potential clients.",
    name: "Advocate Portfolio",
    type: "Static responsive website",
    src: "./assets/advocatePortfolio.png",
    github: "https://github.com/bhagirathpaliyal/AdvocatePortfolio",
    live: "https://bhagirathpaliyal.github.io/AdvocatePortfolio/",
  },
  {
    description:
      "A clean, interactive typing test tool that evaluates users' typing speed and accuracy. Great for practice or benchmarking typing efficiency.",
    name: "Typing Speed Test",
    type: "Speed Test Web App",
    src: "./assets/typingTest.png",
    github: "https://github.com/bhagirathpaliyal/typingSpeedTest",
    live: "https://bhagirathpaliyal.github.io/typingSpeedTest/",
  },
];


const Projects = ({ autoplay = false }: { autoplay?: boolean }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (autoplay && projects.length > 1) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, projects]);

  const isActive = (index: number) => index === active;

  const current = projects[active];

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    // <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
       <div
      id="section3"
      className="section3 flex flex-col items-center md:pt-[100px] pt-[50px] animate-[appear_linear] animationTimeline"
    >
      <p className="text-[16px]">Browse My Recent</p>
      <h2 className="md:text-[28px] text-[20px] font-bold">Projects</h2>
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2 mt-[50px]">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {projects.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 40 : projects.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {current.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {current.type}
            </p>
            <motion.p className="mt-4  text-lg text-gray-500 dark:text-neutral-300">
              {current.description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>

            {/* 👉 GitHub and Live Buttons */}
            <div className="flex gap-4 mt-6">
              <a
                href={current.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border text-sm px-4 py-2 rounded-[30px] hover:bg-gray-200 dark:hover:bg-neutral-700"
              >
                GitHub
              </a>
              <a
                href={current.live}
                target="_blank"
                rel="noopener noreferrer"
                className="border text-sm px-4 py-2 rounded-[30px] hover:bg-gray-200 dark:hover:bg-neutral-700"
              >
                Live
              </a>
            </div>
          </motion.div>

          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <ArrowLeftIcon className="h-5 w-5 text-black dark:text-neutral-400 transition-transform duration-300 hover:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <ArrowRightIcon className="h-5 w-5 text-black dark:text-neutral-400 transition-transform duration-300 hover:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
