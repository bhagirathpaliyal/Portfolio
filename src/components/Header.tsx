import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='flex h-[80px]  justify-between items-center px-[50px] '>
        <div className='text-[32px]'>BP</div>
        <div>
            <Navbar/>
        </div>
    </div>

  )
}

export default Header