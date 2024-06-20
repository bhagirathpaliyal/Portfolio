


const About = () => {
  return (
    <div className='flex flex-col items-center my-[50px]'>
      
      <p className='text-[16px]'>Get To Know More</p>
      <h2 className='md:text-[48px] text-[32px] font-bold'>About Me</h2>
      <div>
        <div>
          <div className='flex max-md:flex-col max-md:gap-[20px] justify-around my-[30px]'>
            <div className=' border flex flex-col justify-center items-center rounded-[30px] p-[20px]'>
              <img src="../../public/assets/education.png" alt="Logo" className='h-[32px]'/>
              <h3 className='text-[18px] font-bold'>Education</h3>
              <p className='text-[16px]'>12th</p>
              <p className='text-[16px] text-center'>Sahid Gangaram GSS School Dhandhaniya,Jodhpur</p>
              
            </div>
            <div className=' border flex flex-col justify-center items-center rounded-[30px] p-[20px]'>
              <img src="../../public/assets/education.png" alt="Logo" className='h-[32px]'/>
              <h3 className='text-[18px] font-bold'>Education</h3>
              <p className='text-[16px]'>BCA - Pursuing</p>
              <p className='text-[16px] text-center'>Vardhman Mahaveer Open University, Kota</p>
              
            </div>
          </div>
          <p className="text-center">I have a strong understanding of HTML, CSS, and JavaScript, and I am proficient in using react js
I am able to create user interfaces that are both visually appealing and user-friendly.
I am able to work independently and as part of a team, and I am always willing to go the extra mile to meet deadlines and exceed expectations.
I am confident that I can provide you with the high-quality front-end development services that you need to succeed.</p>
        </div>

      </div>

    </div>
  )
}

export default About