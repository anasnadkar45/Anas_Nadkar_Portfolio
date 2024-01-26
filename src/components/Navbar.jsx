import React from 'react'
import { FaGithub } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='bg-gradient-to-b from-[#14141fa9] to-[#14141F] 
    z-20 w-full  backdrop-blur-sm'>
      <nav className='max-w-[1080px] max-lg:px-4 max-xl:px-8 m-auto flex justify-between py-5 items-center'>

        <div>
          <a href="#home"
            onClick={() => scrollToSection('home')}
            className='font-bold'>Anas Nadkar</a>
        </div>

        <div className='flex space-x-4'>
          <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
          <a href="#aboutme" onClick={() => scrollToSection('aboutme')}>About Me</a>
          <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
          <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
          <a href="#footer" onClick={() => scrollToSection('footer')}>Footer</a>
        </div>

        <div className='flex space-x-2 items-center'>
          <FaGithub className='size-6' />
          <div className='border rounded-full p-1'>
            <MdOutlineLightMode className='size-[15px]' />
          </div>
        </div>
      </nav>
    </header>
  );
}


export default Navbar