

const Contact = () => {
  return (
    <div className='flex flex-col items-center my-[50px]'>
      
    <p className='text-[16px]'>Get in Touch</p>
    <h2 className='text-[48px] font-bold'>Contact Me</h2>

    <div className='border border-[#a3a3a3] flex  p-[8px] rounded-[20px] my-[32px]'>
        <div className='flex m-[16px] gap-[5px] justify-center items-center'>
            <img src="../../public/assets/email.png" alt="Log" className='h-[40px] w-[100%]'/>
            <p className='text-[16px] font-medium'>Bhagirathpaliyal@gmail.com</p>
        </div>
        <div className='flex m-[16px]  gap-[5px] justify-center items-center'>
            <img src="../../public/assets/linkedin.png" alt="Logo" className='h-[40px] w-[100%]'/>
            <p className='text-[19px] font-medium'>LinkedIn</p>
        </div>


    </div>


    </div>
  )
}

export default Contact