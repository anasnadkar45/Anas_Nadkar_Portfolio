import React from 'react'
import herobg from '../assets/herobg.png'
import author from '../assets/author.png'
function Home() {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${herobg})` }}>
      <div className="max-w-[1200px] m-auto flex justify-between items-center">
        <h1>Anas Nadkar</h1>
        <img src={author} alt="" className='w-[500px]'/>
      </div>
    </div>
  )
}

export default Home