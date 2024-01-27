import React from 'react'
import ParallaxText from '../ParallaxText'

function AboutMe() {
  return (
    <div style={{ width: "550px", height: "550px", filter: "contrast(100%) brightness(100%)", background: "linear-gradient(0deg, rgba(33,34,51,1), rgba(47,47,82,1)),url(\"data:image/svg+xml,%3Csvg viewBox='0 0 270 270' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.96' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}>
      {/* <ParallaxText /> */}
      <svg viewBox='0 0 270 270' xmlns='http://www.w3.org/2000/svg' className='opacity-15'>
        <filter id='noiseFilter'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='3.96'
            numOctaves='6'
            stitchTiles='stitch' />
        </filter>

        <rect width='100%' height='100%' filter='url(#noiseFilter)' />
      </svg>
      <h1>about</h1>
    </div>
  )
}

export default AboutMe