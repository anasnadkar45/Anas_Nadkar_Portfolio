import React, { useEffect } from 'react';
import herobg from '../../assets/herobg.png';
import Bg from '../../assets/bg.svg';
import Rectangle from '../../assets/Rectangle.png';
import programmingAanimate from '../../assets/programming-animate.svg'
import HeroBgAnimation from '../HeroBgAnimation';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/data'
import { annotate } from 'rough-notation';

function Home() {

  useEffect(() => {
    const spanElements = document.querySelectorAll('.description-span');
    const strongElements = document.querySelector('.circle-strong');

    if (spanElements) {
      spanElements.forEach((spanElement, index) => {
        const color = getColorForIndex(index);
        const annotation = annotate(spanElement, { type: 'highlight', color, iterations: 1, multiline: true });
        annotation.show();
      });
    }

    if (strongElements) {
      const annotation = annotate(strongElements, { type: 'circle', color: 'red', padding: 10 });
      annotation.show();
    }

  }, []);

  const getColorForIndex = (index) => {
    const colors = ['#ffd60a', '#9b5de5', '#ffd6ff', '#56cfe1', '#ef233c']; // Add more colors as needed
    return colors[index % colors.length];
  };

  return (
    <div className='bg-gradient-to-r from-[#111112] via-[#100e12] to-[#131021] bg-cover bg-center w-full h-full' style={{ backgroundImage: `url(${Bg})`, }}>
      <div className="max-w-[1080px] m-auto flex justify-between gap-3 items-center 
    max-lg:flex-wrap-reverse max-lg:px-4 max-xl:px-8 pt-[110px]  pb-12">
        {/* <img src={Bg} alt="" className='rotate-[-90deg]'/> */}
        {/* left col */}
        <div className='flex flex-col z-10 top-[120px] mt-10 gap-2' >
          <h1 className='text-left max-lg:text-center text-[24px]  max-sm:leading-[50px] max-sm:text-[55px]'>
            Hi There!, I'am<span className='text-[#47EBEB] font-bold'> Mohammed Anas</span>
          </h1>

          <h1 className='flex gap-5 text-3xl font-bold max-sm:text-2xl max-sm:text-center  max-lg:text-center'>
            I am a
            <span className='text-purple-600 description-span'>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          {/* <div className='text-left mt-2 max-sm:mt-10'>
            <p className='leading-6 text-slate-200 max-sm:leading-5'>
              HELLO!
              I'M CURRENTLY LEARNING THE MERN STACKWITH A FOCUS ON BUILDING FULL-STACKWEB APPLICATIONS USING MONGODB,EXPRESS,REACT, ANDNODE.JS. MY GOAL IS TO CREATE PRODUCTS THAT ARE FAST, SCALABLE, AND USER-FRIENDLY.
              OVER THE COURSE OF MY LEARNING JOURNEY, I AIM TO MASTER EVERY ASPECT OF THE MERN STACK, FROM FRONT END TO BACK END TO DATABASE, TO CONFIDENTLY HANDLE THE ENTIRE WEB DEVELOPMENT PROCESS.
            </p>
          </div > */}

          <button className=' bg-[#4EFFFF] text-[#14141F] font-bold w-fit px-4 py-3 rounded-3xl'>
            Explore Projects
          </button>
        </div>

        {/* right col */}
        <div className="container-left right-0">
          <div className='w-[400px] max-lg:w-[350px] max-sm:w-[250px] rotate-45 relative bg-[#000000] rounded-full p-8'>
          <HeroBgAnimation />
          {/* <img src={homesvg} alt="" className='w-[450px] max-lg:w-[400px] max-sm:w-[300px] absolute top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%]' /> */}
          <img src={programmingAanimate} alt="" className='w-[450px] max-lg:w-[400px] max-sm:w-[280px] rotate-[-45deg] absolute top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%]' />
        </div>
      </div>
    </div>
    </div >

  );
}

export default Home;
