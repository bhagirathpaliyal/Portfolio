import React from 'react'

const Projects = () => {
  return (
    <div className='flex flex-col items-center my-[50px]'>
      
    <p className='text-[16px]'>Browse My Recent</p>
    <h2 className='text-[48px] font-bold'>Projects</h2>


    <div className='flex justify-between w-[100%] my-[32px]'>

        <div className='flex flex-col justify-center items-center bg-[#fafafa] border  border-[#a3a3a3] rounded-[50px] p-[24px]'>
            <img src="https://picsum.photos/300" alt="img"  className='rounded-[50px]'/>
            <h4 className='text-[28px] m-[16px]'>Project One</h4>
            <div className='flex gap-[20px] w-[100%]'>
                <button className='text-[13px] p-[16px] border border-[#a3a3a3] rounded-[20px] w-[100%] '>Github</button>
                <button className='text-[13px] p-[16px] border border-[#a3a3a3] rounded-[20px] w-[100%]'>Live Demo</button>
            </div>

        </div>




            


        
        <div className='flex flex-col justify-center items-center bg-[#fafafa] border  border-[#a3a3a3] rounded-[50px] p-[24px]'>
            <img src="https://picsum.photos/300" alt="img"  className='rounded-[50px]'/>
            <h4 className='text-[28px] m-[16px]'>Project Two</h4>
            <div className='flex gap-[20px] w-[100%]'>
                <button className='text-[13px] p-[16px] border border-[#a3a3a3] rounded-[20px] w-[100%] '>Github</button>
                <button className='text-[13px] p-[16px] border border-[#a3a3a3] rounded-[20px] w-[100%]'>Live Demo</button>
            </div>

        </div>








        
        <div className='flex flex-col justify-center items-center bg-[#fafafa] border  border-[#a3a3a3] rounded-[50px] p-[24px]'>
            <img src="https://picsum.photos/300" alt="img"  className='rounded-[50px]'/>
            <h4 className='text-[28px] m-[16px]'>Project Three</h4>
            <div className='flex gap-[20px] w-[100%]'>
                <button className='text-[13px] p-[16px] border border-[#a3a3a3] rounded-[20px] w-[100%] '>Github</button>
                <button className='text-[13px] p-[16px] border border-[#a3a3a3] rounded-[20px] w-[100%]'>Live Demo</button>
            </div>

        </div>






    </div>
    </div>
  )
}

export default Projects