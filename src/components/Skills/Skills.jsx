import React, { useEffect } from 'react'
import '../../App.css'
import SkillsBg from '../../assets/SkillsBg.png'
import AboutMeBg from '../../assets/NoiceRectangle.png'
import { Button } from '@nextui-org/react'


function Skills() {
  return (
    <div className="w-full mt-[120px] space-y-4 py-12" style={{ backgroundImage: `url(${SkillsBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className='flex space-x-2 items-center max-w-[1080px] max-lg:mx-14 max-md:mx-10 max-sm:mx-4 max-lg:flex-wrap-reverse mx-auto rounded-2xl'>
        <p className='text-4xl  font-extrabold font-mono bg-gradient-to-r from-[#4EFFFF] to-[#4effca] text-transparent bg-clip-text'>Technical  Proficiency </p>
        <div className='h-[2px] w-[120px] max-sm:w-[80px] bg-gradient-to-r from-[#4EFFFF] to-[#4effff2f]'></div>
        <div className='h-[7px] w-[7px]  max-sm:h-[7px] bg-[#4EFFFF] rounded-full'></div>
      </div>
      <div className='flex justify-between gap-4 max-w-[1080px] max-lg:mx-14 max-md:mx-10 max-sm:mx-4 max-lg:flex-wrap-reverse mx-auto rounded-2xl p-14 max-sm:p-3' style={{ backgroundImage: `url(${AboutMeBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        {/* Left Col */}
        <div className=' gap-4 grid grid-cols-2 h-full mx-auto my-auto'>
          <Button color="primary" variant="bordered" className='border border-[#4EFFFF] hover:border-[#4effca] w-[150px] h-[50px] rounded-2xl border-t-4 text-xl'>
            Frontend
          </Button>
          <Button color="primary" variant="bordered" className='border border-[#4EFFFF] hover:border-[#4effca] w-[150px] h-[50px] rounded-2xl border-t-4 text-xl'>
            Backend
          </Button>
          <Button color="primary" variant="bordered" className='border border-[#4EFFFF] hover:border-[#4effca] w-[150px] h-[50px] rounded-2xl border-t-4 text-xl'>
            Tools
          </Button>
          <Button color="primary" variant="bordered" className='border border-[#4EFFFF] hover:border-[#4effca] w-[150px] h-[50px] rounded-2xl border-t-4 text-xl'>
            Soft Skills
          </Button>
        </div>
        {/* Right Col */}
        <div className='h-full  max-sm:w-full max-w-[50%] mx-auto my-auto  flex-col justify-center bg-[#14141F] p-4 rounded-lg'>
          <div className='border-[1px] border-slate-400 h-fit w-full rounded-md text-start px-4 py-3 text-lg text-[#4EFFFF]'>
            Frontend
          </div>
          <div className='w-fit gap-6 flex justify-center flex-wrap m-5'>
            <img src="https://my-portfolio-darkr4ger.vercel.app/file-type-html.svg" alt="" className='w-[120px] max-lg:w-[100px]' />
            <img src="https://my-portfolio-darkr4ger.vercel.app/file-type-css.svg" alt=""  className='w-[120px] max-lg:w-[100px]'/>
            <img src="https://my-portfolio-darkr4ger.vercel.app/file-type-tailwind.svg" alt="" className='w-[120px] max-lg:w-[100px]' />
            <img src="https://my-portfolio-darkr4ger.vercel.app/react.svg" alt="" className='w-[120px] max-lg:w-[100px]' />
            <img src="https://my-portfolio-darkr4ger.vercel.app/js.svg" alt="" className='w-[120px] max-lg:w-[100px]' />
          </div>
        </div>
        {/* Right Col */}
      </div>
    </div>

  )
}

export default Skills