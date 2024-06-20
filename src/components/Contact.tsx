import Navbar from "./Navbar";


const Contact = () => {
  return (
    <div className='flex flex-col items-center my-[50px]'>
      
    <p className='text-[16px]'>Get in Touch</p>
    <h2 className='md:text-[48px] text-[32px] font-bold'>Contact Me</h2>

    <div className='border border-[#a3a3a3] flex max-md:flex-col  p-[8px] rounded-[20px] my-[32px]'>
        <div className='flex md:m-[16px] gap-[5px] justify-center items-center'>
            <img src="../../public/assets/email.png" alt="Log" className='h-[40px] w-[100%]'/>
            <p className='text-[16px] max-sm:text-[15px]'>Bhagirathpaliyal@gmail.com</p>
        </div>

        <a href="https://www.linkedin.com/in/bhagirath-paliyal-3451b1286" target="_blank">
        <div className='flex md:m-[16px]  gap-[5px] justify-center items-center'>
            <img src="../../public/assets/linkedin.png" alt="Logo" className='h-[32px] md:h-[40px] '/>
            <p className='text-[18px] max-sm:text-[16px]'>LinkedIn</p>
        </div></a>


    </div>

    <div><Navbar/></div>


    </div>
  )
}

export default Contact;