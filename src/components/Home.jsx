import React, { useEffect } from 'react';
import herobg from '../assets/herobg.png';
import homesvg from '../assets/home01.svg';
import Rectangle from '../assets/Rectangle.png';
import HeroBgAnimation from './HeroBgAnimation';
import Typewriter from 'typewriter-effect';
import { Bio } from '../data/data'
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
    const colors = ['#ffd60a', '#9b5de5', 'green', '#56cfe1', '#aec3b0']; // Add more colors as needed
    return colors[index % colors.length];
  };

  return (
    <div className='bg-gradient-to-r from-[#131021] via-[#320061] to-[#131021]'>
      <div className="max-w-[1080px] m-auto flex justify-between gap-3 items-center 
    max-lg:flex-wrap-reverse max-lg:px-4 max-xl:px-8 pt-14 top-12 pb-12">

        {/* left col */}
        <div className='flex flex-col z-10 top-[120px] mt-10 gap-2' >
          <h1 className='text-left max-lg:text-center text-[71px] max-sm:leading-[50px] max-sm:text-[55px]'>
            <span className='font-bold text-left bg-gradient-to-r 
          from-[#00E0FF] to-[#1f5fe8] bg-clip-text text-transparent'>{Bio.name[0]} </span>
            <span className='font-bold text-left bg-gradient-to-r 
          from-[#FF6B00] to-[#FF9900] bg-clip-text text-transparent'>{Bio.name[1]} </span>
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
          <div className='text-left mt-2 max-sm:mt-10'>
            <p className='leading-8 text-slate-200 max-sm:leading-6'>
              I love building tools that are <span className="description-span text-slate-950">user-friendly, simple</span> and <span className="description-span text-slate-950">delightful.</span>
              I am a <span className="description-span text-slate-950">motivated</span> and <span className="description-span text-slate-950">versatile</span> individual, always eager to take on <span className="description-span text-slate-950">new challenges.</span>
              With a passion for learning I am dedicated to delivering <span className="description-span text-slate-950">high-quality</span> results.
              With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
            </p>
          </div >

          <button className='border border-t-[4px] border-blue-500 w-fit px-4 py-2 rounded-2xl'>Explore Projects</button>
        </div>

        {/* right col */}
        <div className="container-left mx-auto">
          <div className='w-[500px] max-lg:w-[450px] max-sm:w-[350px]  relative bg-[#000000c4] rounded-xl p-8'>
            <HeroBgAnimation />
            <img src={homesvg} alt="" className='w-[450px] max-lg:w-[400px] max-sm:w-[300px] absolute top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%]' />
          </div>

        </div>
      </div>
    </div>

  );
}

export default Home;
