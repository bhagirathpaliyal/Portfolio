import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='flex h-[80px]  justify-between items-center md:px-[50px] '>
        <div className='md:text-[32px] text-[24px]'>BP</div>
        <div className='max-md:hidden'>
            <Navbar/>
        </div>
    </div>

  )
}

export default Header