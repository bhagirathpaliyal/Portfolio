const Projects = () => {
  return (
    <div
      id="section3"
      className="section3 flex flex-col items-center md:py-[100px] py-[50px] animate-[appear_linear] animationTimeline"
    >
      <p className="text-[16px]">Browse My Recent</p>
      <h2 className="md:text-[28px] text-[20px] font-bold">Projects</h2>

      <div className="flex max-md:flex-col  gap-[30px] w-[100%] my-[32px]">
        <div className="flex flex-col items-center dark:bg-[#555555] border  border-[#a3a3a3] rounded-[26px] overflow-hidden">
          <img
            src="./assets/ecommerce-page.png"
            alt="img"
            
          />
          <h4 className="md:text-[28px] text-[20px] m-[16px]">E-commerce-page</h4>
          <div className="flex gap-[20px] w-[100%] px-[20px] pb-[20px]">
            <a
              href="https://github.com/bhagirathpaliyal/E-commerce-page"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[100%]"
            >
              {" "}
              <button className="text-[13px] p-[16px] border border-[#a3a3a3] rounded-[30px] w-[100%] hover:bg-[#a3a3a3]">
                Github
              </button>
            </a>
            <a
              href="https://bhagirathpaliyal.github.io/E-commerce-page/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[100%]"
            >
              {" "}
              <button className="text-[13px] p-[16px] border border-[#a3a3a3] rounded-[30px] w-[100%] hover:bg-[#a3a3a3]">
                Live 
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center  dark:bg-[#555555] border  border-[#a3a3a3] rounded-[26px] overflow-hidden">
          <img
            src="./assets/advocatePortfolio.png"
            alt="img"
            
          />
          <h4 className="md:text-[28px] text-[20px] m-[16px] ">Advocate Portfolio</h4>
          <div className="flex gap-[20px] w-[100%] px-[20px] pb-[20px]">
            <a
              href="https://github.com/bhagirathpaliyal/AdvocatePortfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[100%]"
            >
              {" "}
              <button className="text-[13px] p-[16px] border border-[#a3a3a3] rounded-[30px] w-[100%] hover:bg-[#a3a3a3]">
                Github
              </button>
            </a>
            <a
              href="https://bhagirathpaliyal.github.io/AdvocatePortfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[100%]"
            >
              {" "}
              <button className="text-[13px] p-[16px] border border-[#a3a3a3] rounded-[30px] w-[100%] hover:bg-[#a3a3a3]">
                Live 
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center dark:bg-[#555555] border  border-[#a3a3a3] rounded-[26px] overflow-hidden">
          <img
            src="./assets/typingTest.png"
            alt="img"
            
          />
          <h4 className="md:text-[28px] text-[20px] m-[16px]">Typing Speed Test</h4>
          <div className="flex gap-[20px] w-[100%] px-[20px] pb-[20px]">
            <a
              href="https://github.com/bhagirathpaliyal/typingSpeedTest"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[100%]"
            >
              {" "}
              <button className="text-[13px] p-[16px] border border-[#a3a3a3] rounded-[30px] w-[100%] hover:bg-[#a3a3a3]">
                Github
              </button>
            </a>
            <a
              href="https://bhagirathpaliyal.github.io/typingSpeedTest/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[100%]"
            >
              {" "}
              <button className="text-[13px] p-[16px] border border-[#a3a3a3] rounded-[30px] w-[100%] hover:bg-[#a3a3a3]">
                Live 
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
