interface HomeProps {
  scrollToSection: (id: string) => void;
}
const Home: React.FC<HomeProps> = ({ scrollToSection }) => {
  return (
    <div className="h-[100%] flex max-md:flex-col  md:justify-center items-center gap-[100px] max-md:gap-[50px] md:my-[100px] my-[50px] ">
      <img
        src="./assets/MyImg.jpg"
        className="md:h-[340px] h-[172px] rounded-[50%]"
        alt="profile photo"
      />
      <div>
        <p className="text-[16px] text-[#555555] text-center font-medium">
          Hello, I'm
        </p>
        <h1 className="md:text-[48px] text-[32px] text-[#000000] dark:text-[#555555] font-bold text-center">
          Bhagirath Paliyal
        </h1>
        <p className="md:text-[28px] text-[20px] text-[#555555] text-center font-medium">
          Frontend Developer
        </p>

        <div className="flex gap-[20px] justify-center my-[10px] mt-[16px]">
          <a
            href="./assets/Resume.pdf"
            download="Bhagirath's Resume"
            target="_blank"
          >
            {" "}
            <button className="p-[16px] rounded-[25px] text-[#000000] text-[13px] font-bold border-[2px] border-[#353535] hover:bg-[#353535] dark:bg-[#555555] hover:text-[#ffffff]">
              Download CV
            </button>
          </a>
          <button
            onClick={() => scrollToSection("section4")}
            className="p-[16px] rounded-[25px] text-[13px] font-bold border-[2px] border-[#353535] text-[#ffffff] dark:text-[#000] bg-[#353535] hover:bg-[#000000] dark:bg-[#555555] hover:border-[#000000]"
          >
            Contact Info
          </button>
        </div>
        <div className="flex gap-[20px] justify-center mt-[16px]">
          <a
            href=" https://www.linkedin.com/in/bhagirath-paliyal-3451b1286"
            target="_blank"
          >
            <img
              src="./assets/linkedin.png"
              alt="LinkedIn-logo"
              className="h-[32px]"
            />
          </a>
          <a href="https://github.com/bhagirathpaliyal" target="_blank">
            <img
              src="./assets/github.png"
              alt="Github-logo"
              className="h-[32px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
