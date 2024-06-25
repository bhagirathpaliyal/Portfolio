
const Projects = () => {
  return (
    <div  id="section3" className='section3 flex flex-col items-center md:py-[100px] py-[50px] animate-[appear_linear] animationTimeline'>
      
    <p className='text-[16px]'>Browse My Recent</p>
    <h2 className='md:text-[48px] text-[32px] font-bold'>Projects</h2>


    <div className='flex max-md:flex-col  gap-[30px] w-[100%] my-[32px]'>

        <div className='flex flex-col justify-center items-center bg-[#fafafa] border  border-[#a3a3a3] rounded-[50px] p-[24px]'>
            <img src="https://picsum.photos/500" alt="img"  className='rounded-[50px]'/>
            <h4 className='md:text-[28px] text-[20px] m-[16px]'>Project One</h4>
            <div className='flex gap-[20px] w-[100%]'>
              <a href="https://github.com/bhagirathpaliyal/E-commerce-page" target="_blank" rel="noopener noreferrer" className='w-[100%]'>  <button className='text-[13px] p-[16px] border border-[#a3a3a3] rounded-[30px] w-[100%] hover:bg-[#a3a3a3]'>Github</button></a>
              <a href="https://bhagirathpaliyal.github.io/E-commerce-page/" target="_blank" rel="noopener noreferrer" className='w-[100%]'>  <button className='text-[13px] p-[16px] border border-[#a3a3a3] rounded-[30px] w-[100%] hover:bg-[#a3a3a3]'>Live Demo</button></a>
            </div>

        </div>




            


        
        <div className='flex flex-col justify-center items-center bg-[#fafafa] border  border-[#a3a3a3] rounded-[50px] p-[24px]'>
            <img src="https://picsum.photos/500" alt="img"  className='rounded-[50px]'/>
            <h4 className='md:text-[28px] text-[20px] m-[16px]'>Project Two</h4>
            <div className='flex gap-[20px] w-[100%]'>
                <button className='text-[13px] p-[16px] border border-[#a3a3a3] rounded-[30px] hover:bg-[#a3a3a3] w-[100%] '>Github</button>
                <button className='text-[13px] p-[16px] border border-[#a3a3a3] rounded-[30px] hover:bg-[#a3a3a3] w-[100%]'>Live Demo</button>
            </div>

        </div>








        
        <div className='flex flex-col justify-center items-center bg-[#fafafa] border  border-[#a3a3a3] rounded-[50px] p-[24px]'>
            <img src="https://picsum.photos/500" alt="img"  className='rounded-[50px]'/>
            <h4 className='md:text-[28px] text-[20px] m-[16px]'>Project Three</h4>
            <div className='flex gap-[20px] w-[100%]'>
                <button className='text-[13px] p-[16px] border border-[#a3a3a3] rounded-[30px] hover:bg-[#a3a3a3] w-[100%] '>Github</button>
                <button className='text-[13px] p-[16px] border border-[#a3a3a3] rounded-[30px] hover:bg-[#a3a3a3] w-[100%]'>Live Demo</button>
            </div>

        </div>






    </div>
    </div>
  )
}

export default Projects