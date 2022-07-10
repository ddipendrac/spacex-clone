import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/falcon9.css'
import '../styles/overview.css'
import '../styles/home.css'
import CountUp from 'react-countup'
import Carousel, { consts } from 'react-elastic-carousel'

import FHOverview from '../slides/fh/FHOverview'
import FHFirstStage from '../slides/fh/FHFirstStage'
import FHSecondStage from '../slides/fh/FHSecondStage'
import FHInterstage from '../slides/fh/FHInterstage'
import FHPayload from '../slides/fh/FHPayload'

// For Merlin
import SeaLevel from '../slides/merlin/SeaLevel'
import Vacuum from '../slides/merlin/Vacuum'


import fh2 from '../assets/fh2.mp4'
import PlayerSide from '../components/PlayerSide'

// Slide 
import FHBottomSlide from '../slides/fh/FHBottomSlide'


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

      <div className='feature-image fh-feature-image'>
        <div className='falcon-animates'>
          <div className='falcon-shadowed'>
            FALCON HEAVY
          </div>
          <div className='falcon-animate'>THE WORLD’S MOST POWERFUL ROCKET</div>
        </div>
        <img src='./images/ArrowDown.png' alt='logo' className='scrollme' />
      </div>

      <div className='container-stats'>
        <div className='stat stat1'>
          <h2 className='number'>
            <CountUp  
            end={3}
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
            end={7}
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
            end={4}
            duration={2}
            />
          </h2>
          <div className='label'>
            TOTAL REFLIGHTS
          </div>
        </div>
      </div>

      <div className='reveal-inner fh-reveal-inner'>
        <p className='reveal-inner-text'>
        Falcon Heavy is the most powerful operational rocket in the world by a factor of two. With the ability to lift into orbit nearly 64 metric tons (141,000 lb) Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy. Falcon Heavy is composed of three Falcon 9 nine-engine cores whose 27 Merlin engines together generate more than 5 million pounds of thrust at liftoff, equal to approximately eighteen 747 aircraft.
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
        <FHOverview />
        <FHFirstStage />
        <FHSecondStage />
        <FHInterstage />
        <FHPayload />
      </Carousel>

      <Link to='/falcon-heavy/video' className='feature-image fh-video'>
        <img src='./images/playbutton.png' className='btn-play' />
        <div className='video-text'>
          <div className='falcon9-video-text'>VIDEO</div>
          <div className='falcon9-video-label'>FALCON HEAVY FIRST FLIGHT</div>
        </div>
      </Link>

      <div className='video-and-text'>
        <PlayerSide src={fh2} />
        <div className='v-and-t-text'>
          <div className='text-big'>
            UNMATCHED PERFORMANCE
          </div>
          <div className='text-small'>
          With more than 5 million pounds of thrust at liftoff, Falcon Heavy is the most capable rocket flying. By comparison, the liftoff thrust of the Falcon Heavy equals approximately eighteen 747 aircraft at full power. Falcon Heavy can lift the equivalent of a fully loaded 737 jetliner—complete with passengers, luggage and fuel—to orbit.
          </div>

        </div>
      </div>

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
        <FHBottomSlide />
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