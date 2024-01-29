import React, { useEffect } from 'react'
import ParallaxText from '../ParallaxText'
import AboutMeBg from '../../assets/NoiceRectangle.png'
import Profile from '../../assets/Profile.jpg'
import { annotate } from 'rough-notation';

function AboutMe() {
  useEffect(() => {
    const spanElements = document.querySelectorAll('.about-span');
    const strongElements = document.querySelectorAll('.circle-strong');
  
    if (spanElements) {
      spanElements.forEach((spanElement, index) => {
        const color = getColorForIndex(index);
        const annotation = annotate(spanElement, { type: 'highlight', color, iterations: 1, multiline: true });
        annotation.show();
      });
    }
  
    if (strongElements && strongElements.length > 0) {
      strongElements.forEach((strongElement) => {
        console.log('Applying circle annotation to strong element:', strongElement);
        const annotation = annotate(strongElement, { type: 'circle', color: 'red', padding: 20 });
        annotation.show();
      });
    }
  }, []);
  
  const getColorForIndex = (index) => {
    const colors = ['#FF1694' , '#ffb011' ,'#ef2ce2' , 'green' ,'violet'];
    return colors[index % colors.length];
  };
  
  return (
    <div className='w-full mx-auto'>
      <ParallaxText />

      <div className='flex justify-between gap-4 max-w-[1080px] max-lg:mx-14 max-md:mx-10 max-sm:mx-4 max-lg:flex-wrap-reverse mx-auto rounded-2xl p-14 max-sm:p-3' style={{ backgroundImage: `url(${AboutMeBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        {/* Col Left */}
        <div className='text-start space-y-5 '>
          <div className='flex space-x-2 items-center w-full'>
            <p className='text-4xl  font-bold font-mono bg-gradient-to-r from-[#ef2ce2] to-[#ffb011] text-transparent bg-clip-text'> About Me</p>
            <div className='h-[2px] w-[120px] max-sm:w-[80px] bg-gradient-to-r from-[#FF1694] to-[#ff169210]'></div>
            <div className='h-[7px] w-[7px]  max-sm:h-[7px] bg-[#FF1694] rounded-full'></div>
          </div>
          <div className='flex items-center '>
            <p className='max-sm:text-sm'>
              I am a passionate and self-taught <span className='about-span text-[#14141F] font-bold'>Full-Stack</span> Developer residing in Maharashtra, India. I have hand-on self-experience in full-stack web development technologies such as <span className='about-span text-[#14141F] font-bold'>ReactJS</span>, <span className='about-span text-[#14141F] font-bold'>Javascript</span>, <span className='about-span text-[#14141F] font-bold'>Typescript</span>, <span className='about-span text-[#14141F] font-bold'>Tailwind</span>, <span className='about-span text-[#14141F] font-bold'>NodeJs</span>, <span className='about-span text-[#14141F] font-bold'>Express js</span> and <span className='about-span text-[#14141F] font-bold'>MongoDB</span>.
              <br /><br />
              I love building tools that are <span className='about-span text-[#14141F] font-bold'>user-friendly</span>, <span className='about-span text-[#14141F] font-bold'>simple</span> and <span className='about-span text-[#14141F] font-bold'>delightful</span> websites. I was a student at DBJ College where I spent 3 years learning the fundamentals of <span className='about-span text-[#14141F] font-bold'>front-end</span> and <span className='about-span text-[#14141F] font-bold'>back-end</span> web development and explored multiple computer science topics.  where I quickly discovered my knack for creating <span className='about-span text-[#14141F] font-bold'>dynamic</span> and <span className='about-span text-[#14141F] font-bold'>user-friendly</span> applications.
              <br /><br />
              As a Full-Stack Developer, I possess a diverse skill set that allows me to handle both the frontend and backend aspects of web development.
            </p>
          </div>
        </div>
        {/* Right Col */}
        <div className='w-full  flex justify-center'>
          <img src={Profile} alt="" className='rounded-full  max-w-[500px] max-sm:w-[330px]' />
        </div>
      </div>

    </div>
  )
}

export default AboutMe