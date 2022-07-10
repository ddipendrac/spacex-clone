import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/globalstar.css'

function Ses22() {
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
      
      <Link to='/ses-22/video' >
        <div className='ses-bg-image bg-image'>
          <img src='./images/playbutton.png' className='btn-play' />
        </div>
      </Link>

      <div className='date'>
        JUNE 19, 2022
      </div>

      <div className='shadowed-launch'>
        SES-22 MISSION
      </div>

      <div className='description'>
        <div className='description-1 description-text'>
        On Wednesday, June 29 at 5:04 p.m. ET, Falcon 9 launched <a href='https://www.spacex.com/static/images/backgrounds-2022/ses-22/patch.png' className='text-primary' >SES-22
          </a>  to a geosynchronous transfer orbit from Space Launch Complex 40 (SLC-40) at Cape Canaveral Space Force Station in Florida.
        </div>
        <div className='description-2 description-text'>
        This was the second launch and landing of this booster, which previously supported the launch of one Starlink mission.
        </div>
      </div>
        
    </div>
  )
}

export default Ses22