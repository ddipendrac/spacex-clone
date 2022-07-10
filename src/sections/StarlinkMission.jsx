import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/globalstar.css'

function StarlinkMission() {
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
      
      <Link to='/starlink-mission/video' >
        <div className='starlink-mission-bg-image bg-image'>
          <img src='./images/playbutton.png' className='btn-play' />
        </div>
      </Link>

      <div className='date'>
        JULY 7, 2022
      </div>

      <div className='shadowed-launch'>
      STARLINK MISSION
      </div>

      <div className='description'>
        <div className='description-1 description-text'>
        On Thursday, July 7 at 9:11 a.m. ET, SpaceX launched 53 Starlink satellites from Space Launch Complex 40 (SLC-40) at Cape Canaveral Space Force Station in Florida.
        </div>
        <div className='description-2 description-text'>
        This was the 13th flight for the Falcon 9 first stage booster supporting this mission, which previously launched Crew Demo-2, ANASIS-II, CRS-21, Transporter-1, Transporter-3, and now eight Starlink missions.
        </div>
      </div>
        
    </div>
  )
}

export default StarlinkMission