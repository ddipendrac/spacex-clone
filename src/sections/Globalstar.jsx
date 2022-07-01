import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/globalstar.css'

function Globalstar() {
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
        <div className='globalstar-bg-image bg-image'>
          <img src='./images/playbutton.png' className='btn-play' />
        </div>
      </Link>

      <div className='date'>
        <div className='month date-text'>
          JUNE
        </div>
        <div className='day date-text'>
          19,
        </div>
        <div className='year date-text'>
          2022
        </div>
      </div>

      <div className='shadowed-launch'>
        GLOBALSTAR FM15 MISSION
      </div>

      <div className='description'>
        <div className='description-1 description-text'>
        On Sunday, June 19 at 12:27 a.m. ET, Falcon 9 launched <a href='https://www.spacex.com/static/images/backgrounds-2022/globalstar/patch.png' className='text-primary' >Globalstar FM15
          </a>  to low-Earth orbit from Space Launch Complex 40 (SLC-40) at Cape Canaveral Space Force Station in Florida.
        </div>
        <div className='description-2 description-text'>
          This was the ninth launch and landing of this booster, which previously supported the launch of Crew-1, Crew-2, SXM-8, CRS-23, IXPE, one Starlink mission, Transporter-4, and Transporter-5.
        </div>
      </div>
        
    </div>
  )
}

export default Globalstar