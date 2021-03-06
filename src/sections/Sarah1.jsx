import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/globalstar.css'

function Sarah1() {
  const [screenHeight, setScreenHeight] = useState('')
  const [screenWidth, setScreenWidth] = useState(0)


  let videoHeight;
  if (screenHeight < 1) {
    videoHeight = 50 * screenWidth / 100
  } else {
    videoHeight = screenHeight
  }

  useEffect(() => {
    setScreenWidth(window.innerWidth)
    setScreenHeight((40 * screenWidth) / 100)
  },[])

  console.log(screenWidth)
  console.log(screenHeight)
  console.log(videoHeight)

  // Set width
  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth)
    setScreenHeight((40 * screenWidth) / 100)
  })

  return (
    <div className='section-launch'>
      <Link to='/launches' className='btn-back'>
        <img src='./images/arroback.png' className='arrow-back'></img>
        <div className='btn-back-text'>
          BACK TO LAUNCHES
        </div>
      </Link>
      
      <Link to='/sarah1/video' >
        <div className='sarah1-bg-image bg-image'>
          <img src='./images/playbutton.png' className='btn-play' />
        </div>
      </Link>

      <div className='date'>
       JUNE 18, 2022
      </div>

      <div className='shadowed-launch'>
        SARAH-1 MISSION
      </div>

      <div className='description'>
        <div className='description-1 description-text'>
         On Saturday, June 18 at 7:19 a.m. PT, Falcon 9 launched the SARah-1 mission from Space Launch Complex 4 East (SLC-4E) at Vandenberg Space Force Base in California.
        </div>
        <div className='description-2 description-text'>
          This was the third launch and landing of this booster, which previously launched the NROL-87 and NROL-85 missions.
        </div>
      </div>
        
    </div>
  )
}

export default Sarah1