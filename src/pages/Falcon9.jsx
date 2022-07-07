import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/falcon9.css'
import '../styles/overview.css'
import CountUp from 'react-countup'
import Carousel, { consts } from 'react-elastic-carousel'

import Overview from '../slides/falcon9/Overview'
import FirstStage from '../slides/falcon9/FirstStage'
import SecondStage from '../slides/falcon9/SecondStage'
import Interstage from '../slides/falcon9/Interstage'
import Payload from '../slides/falcon9/Payload'

// For Merlin
import SeaLevel from '../slides/merlin/SeaLevel'
import Vacuum from '../slides/merlin/Vacuum'

// Slide 
import BottomSlide from '../slides/falcon9/BottomSlide'


function Falcon9() {
  const [nextIconClass, setNextIconClass] = useState('next next-img')
  const [prevIconClass, setPrevIconClass] = useState('next prev-img')

  const [btn, setBtn] = useState('btnSeaLevel')

  const [activeSeaLevel, setActiveSeaLevel] = useState(true)
  const [activeVacuum, setActiveVacuum] = useState(false)

  // NEXT PREV BTN
  const next = <img className={nextIconClass} src='./images/next.png' />
  const prev = <img className={prevIconClass} src='./images/prev.png' />

  const myArrow = ({ type, onClick, isEdge })=> {
    const pointer = type === consts.PREV ? prev : next;

    return (
      <button onClick={onClick} disabled={isEdge} className='btn-carousel'>
        {pointer}
      </button>
    )
  }

  // Engines / Merlin
  let merlinClass = 'first-overview'

  if(activeSeaLevel) {
    merlinClass = 'first-overview merlin-sea-level'
  } else if (activeVacuum) {
    merlinClass = 'first-overview merlin-vacuum'
  } 

  const setBtnFairing = () => {  
    setBtn('')
    setBtn('btnSeaLevel')

    setActiveSeaLevel(true)
    setActiveVacuum(false)
    
  }
  const setBtnDragon = () => {
    setBtn('')
    setBtn('btnVacuum')

    setActiveSeaLevel(false)
    setActiveVacuum(true)
  }

  let div = <SeaLevel />
  if(btn == 'btnSeaLevel') {
    
    div = <SeaLevel />
  } else if (btn == 'btnDragon') {
    
    div = <Vacuum /> 
  }


  return (
    <div className='section-falcon9'>

      <div className='falcon-image faclon-bg-image'>
        <div className='falcon-animates'>
          <div className='falcon-shadowed'>
            FALCON 9
          </div>
          <div className='falcon-animate'>FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT</div>
        </div>
      </div>

      <div className='container-stats'>
        <div className='stat stat1'>
          <h2 className='number'>
            <CountUp  
            end={160}
            duration={2}
            />
          </h2>
          <div className='label'>
            TOTAL LAUNCHES
          </div>
        </div>
        <div className='stat stat2'>
          <h2 className='number'>
          <CountUp  
            end={120}
            duration={2}
            />
          </h2>
          <div className='label'>
            TOTAL LANDINGS
          </div>
        </div>
        <div className='stat stat3'>
          <h2 className='number'>
          <CountUp  
            end={99}
            duration={2}
            />
          </h2>
          <div className='label'>
            TOTAL REFLIGHTS
          </div>
        </div>
      </div>

      <div className='reveal-inner'>
        <p className='reveal-inner-text'>
        Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access.
        </p>
      </div>

      {/* Carousel with text */}
      <Carousel 
        renderArrow={myArrow} 
        onNextEnd={(currentItem, pageIndex) => {
          setPrevIconClass('next prev-img')
          if (pageIndex == 4) {
            setNextIconClass('next next-img next-disabled')
          } else if (pageIndex < 4 ) {
            setNextIconClass('next next-img')
          }
          
        }}
        onPrevEnd = {(currentItem, pageIndex) => {
          setNextIconClass('next next-img')
          if (pageIndex == 0) {
            setPrevIconClass('next prev-img next-disabled')
          } else if (pageIndex > 0 ) {
            setPrevIconClass('next prev-img')
          }
        }}
        className='carousel'
        
        >
        <Overview />
        <FirstStage />
        <SecondStage />
        <Interstage />
        <Payload />
      </Carousel>

      <Link to='/falcon9/video' className='falcon-image falcon9-video'>
        <img src='./images/playbutton.png' className='btn-play' />
        <div className='falcon9-video-text'>VIDEO</div>
        <div className='falcon9-video-label'>FALCON 9 IN FLIGHT</div>
      </Link>

      <div className={merlinClass}>
        <div className='overview-text-1 merlin-engines'>ENGINES</div>
        <div className='overview-text-2 merlin-text'>
          MERLIN
        </div>

        <div className='buttons'>
          <div 
            className={activeSeaLevel ? 'btn-slide active' : 'btn-slide'} onClick={setBtnFairing} >
            SEA LEVEL
          </div>
          <span className='vertical-line'>|</span>
          <div 
            className={activeVacuum ? 'btn-slide active' : 'btn-slide'} onClick={setBtnDragon}>
            VACUUM
          </div>
        </div>
        {div}
      </div>

      {/* SLIDER */}
        <BottomSlide />
        <div className='section-content'>
          <div className='content-center' />
        </div>
        <div className='section-footer-a'>
        For information about our launch services, contact <a href='mailto:sales@spacex.com' className='email-sales'>sales@spacex.com
          </a> 
        </div>
        <div className='section-btn'>
          <a href='https://www.spacex.com/media/falcon-users-guide-2021-09.pdf' className='btn-download'>
            <span className='btn-download-text'>
            DOWNLOAD USER'S GUIDE
            </span>
          </a>
          <a href='https://www.spacex.com/media/Capabilities&Services.pdf' className='btn-download'>
          <span className='btn-download-text'>
            CAPABILITIES AND SERVICES
              </span>
          </a>
        </div>
    </div>
  )
}

export default Falcon9