import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul className='flex max-md:flex-col max-md:text-center gap-[2rem] md:text-[24px] text-[16px] '>
        <li>About</li>
        <li>Skill</li>
        <li>Project</li>
        <li>Contact</li>
        </ul>  
    </div>
  )
}

export default Navbar