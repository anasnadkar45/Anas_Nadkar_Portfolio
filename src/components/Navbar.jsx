import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [state, setState] = useState(false)

  return (
    <nav className="bg-gradient-to-b from-[#14141fa9] to-[#14141F] 
        z-20 w-full  backdrop-blur-sm md:static">
      <div className="items-center max-w-[1080px] mx-auto md:flex max-lg:px-4 max-xl:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="#home" onClick={() => scrollToSection('home')} className='font-bold'>
            Anas Nadkar
          </a>
          <div className="md:hidden">
            <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {
                state ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                )
              }
            </button>
          </div>
        </div>
        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li><a href="#home" className="text-gray-300 hover:text-indigo-600" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#aboutme" className="text-gray-300 hover:text-indigo-600" onClick={() => scrollToSection('aboutme')}>About Me</a></li>
            <li><a href="#skills" className="text-gray-300 hover:text-indigo-600" onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a href="#projects" className="text-gray-300 hover:text-indigo-600" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a href="#footer" className="text-gray-300 hover:text-indigo-600" onClick={() => scrollToSection('footer')}>Footer</a></li>
          </ul>
        </div>

        <div className='hidden md:inline-block'>
          <FaGithub className='size-6 hover:text-indigo-600 transition-all duration-500' />
        </div>
      </div>
    </nav>
  );
}


export default Navbar