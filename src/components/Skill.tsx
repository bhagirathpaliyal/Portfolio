

const Skill = () => {
  return (
    <div  id="section2" className="section2 flex flex-col items-center md:py-[100px] py-[50px] animate-[appear1_linear] animationTimeline">
      <p className="text-[16px]">Explore My</p>
      <h2 className="md:text-[48px] text-[32px] font-bold">Skills</h2>

      <div className="flex max-md:flex-col max-md:gap-[20px] justify-between w-[100%]  mt-[32px]">
        <div className="border p-[20px] rounded-[20px] flex flex-col items-center">
          <h3 className="font-bold md:text-[28px] text-center text-[20px] text-[#555555] mb-[32px]">
            Programming Language
          </h3>

          <div className="flex max-md:flex-col gap-[10px]">
            <div className="flex gap-[10px]">
              <img
                src="./assets/checkmark.png"
                alt="checkmark"
                className="h-[32px]"
              />

              <div className="mt-[3px]">
                <p className="font-bold  text-[18px]">JavaScript</p>
                <p className="text-[16px] text-[#555555]">beginner</p>
              </div>
            </div>

            <div className="flex gap-[10px]">
              <img
                src="./assets/checkmark.png"
                alt="checkmark"
                className="h-[32px]"
              />

              <div className="mt-[3px]">
                <p className="font-bold  text-[18px]">TypeScript</p>
                <p className="text-[16px] text-[#555555]">beginner</p>
              </div>
            </div>
          </div>
        </div>







        <div className="border p-[20px] rounded-[20px] flex flex-col items-center">
          <h3 className="font-bold md:text-[28px] text-[20px] text-[#555555] mb-[32px]">
            Markup and Style
          </h3>

          <div className="flex max-md:flex-col gap-[10px]">
            <div className="flex gap-[10px]">
              <img
                src="./assets/checkmark.png"
                alt="checkmark"
                className="h-[32px]"
              />

              <div className="mt-[3px]">
                <p className="font-bold  text-[18px]">HTML</p>
                <p className="text-[16px] text-[#555555]">beginner</p>
              </div>
            </div>

            <div className="flex gap-[10px]">
              <img
                src="./assets/checkmark.png"
                alt="checkmark"
                className="h-[32px]"
              />

              <div className="mt-[3px]">
                <p className="font-bold  text-[18px]">CSS</p>
                <p className="text-[16px] text-[#555555]">beginner</p>
              </div>
            </div>
          </div>
        </div>










        <div className="border p-[20px] rounded-[20px] flex flex-col items-center">
          <h3 className="font-bold md:text-[28px] text-[20px] text-[#555555] mb-[32px]">
           Library
          </h3>

          <div className="flex max-md:flex-col gap-[10px]">
            <div className="flex gap-[10px]">
              <img
                src="./assets/checkmark.png"
                alt="checkmark"
                className="h-[32px]"
              />

              <div className="mt-[3px]">
                <p className="font-bold  text-[18px]">React Js</p>
                <p className="text-[16px] text-[#555555]">beginner</p>
              </div>
            </div>

            <div className="flex gap-[10px]">
              <img
                src="./assets/checkmark.png"
                alt="checkmark"
                className="h-[32px]"
              />

              <div className="mt-[3px]">
                <p className="font-bold  text-[18px]">Tailwind CSS</p>
                <p className="text-[16px] text-[#555555]">beginner</p>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Skill;
