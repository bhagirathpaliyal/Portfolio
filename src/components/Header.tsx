import React, { useState } from 'react';
import Navbar from './Navbar';
import ResponsiveNav from './ResponsiveNav';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='flex h-[80px] justify-between items-center md:px-[50px]'>
      <div className='md:text-[32px] text-[24px]'>BP</div>
      <div className='max-md:hidden'>
        <Navbar scrollToSection={scrollToSection}/>
      </div>
      <div className='md:hidden'>
        <button  onClick={() => setIsOpen(!isOpen)}>{!isOpen && 'Menu'}</button>
       
        {isOpen && <ResponsiveNav active={isOpen} setIsActive={setIsOpen} scrollToSection={scrollToSection}/>}
      </div>
    </div>
  );
};

export default Header;
