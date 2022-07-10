import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/falcon9.css'
import '../styles/overview.css'
import '../styles/home.css'
import CountUp from 'react-countup'
import Carousel, { consts } from 'react-elastic-carousel'

import DragonOverview from '../slides/dragon/DragonOverview'
import DragonTrunk from '../slides/dragon/DragonTrunk'
import DragonCapsule from '../slides/dragon/DragonCapsule'


// For Merlin
import DragonDraco from '../slides/dragonDraco/DragonDraco'
import DragonSuperdraco from '../slides/dragonDraco/DragonSuperdraco'

// Slide 
import DragonBottomSlide from '../slides/dragon/DragonBottomSlide'


function Dragon() {
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

  // DRACO - DRAGON
  let merlinClass = 'first-overview'

  if(activeSeaLevel) {
    merlinClass = 'first-overview dragon-draco'
  } else if (activeVacuum) {
    merlinClass = 'first-overview dragon-superdraco'
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

  let div = <DragonDraco />
  if(btn == 'btnSeaLevel') {
    
    div = <DragonDraco />
  } else if (btn == 'btnVacuum') {
    
    div = <DragonSuperdraco /> 
  }


  return (
    <div className='section-falcon9'>

      <div className='feature-image dragon-feature-image'>
        <div className='falcon-animates'>
          <div className='falcon-shadowed'>
            DRAGON
          </div>
          <div className='falcon-animate'>SENDING HUMANS AND CARGO INTO SPACE</div>
        </div>
        <img src='./images/ArrowDown.png' alt='logo' className='scrollme' />
      </div>

      <div className='container-stats'>
        <div className='stat stat1'>
          <h2 className='number'>
            <CountUp  
            end={34}
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
            end={31}
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
            end={14}
            duration={2}
            />
          </h2>
          <div className='label'>
            TOTAL REFLIGHTS
          </div>
        </div>
      </div>

      <div className='reveal-inner dragon-reveal-inner'>
        <p className='reveal-inner-text'>
        The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the space station.
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
        <DragonOverview />
        <DragonTrunk />
        <DragonCapsule />
      </Carousel>

      <Link to='/dragon/video' className='feature-image dragon-video'>
        <img src='./images/playbutton.png' className='btn-play' />
        <div className='video-text'>
          <div className='falcon9-video-text'>VIDEO</div>
          <div className='falcon9-video-label'>CREW DRAGON INTERIOR</div>
        </div>
      </Link>

      {/* Dragon Crew */}
      <div className='dragon-crew reveal-inner'>
        <div className='dragon-crew-text'>
          <div className='dragon-crew-text-big'>
          TAKING HUMANS TO SPACE
          </div>
          <div className='dragon-crew-text-small'>
          In 2020, SpaceX returned America’s ability to fly NASA astronauts to and from the International Space Station on American vehicles for the first time since 2011. In addition to flying astronauts to space for NASA, SpaceX’s Dragon spacecraft can also carry commercial astronauts to Earth orbit, the ISS or beyond.
          </div>
          <Link to='/human-spaceflight' className='btn-swipe' >
            <span className='btn-swipe-text'>
            LEARN MORE
            </span>
          </Link>
        </div>
      </div>

      <div className={merlinClass}>
        <div className='overview-text-1 merlin-engines'>ENGINES</div>
        <div className='overview-text-2 merlin-text'>
          DRACO
        </div>

        <div className='buttons'>
          <div 
            className={activeSeaLevel ? 'btn-slide active' : 'btn-slide'} onClick={setBtnFairing} >
            DRACO
          </div>
          <span className='vertical-line'>|</span>
          <div 
            className={activeVacuum ? 'btn-slide active' : 'btn-slide'} onClick={setBtnDragon}>
            SUPERDRACO
          </div>
        </div>
        {div}
      </div>

      <div className='video-and-text video-and-text-dragon'>
        <div className='v-and-t-text'>
          <div className='text-big'>
          DRAGON PARACHUTE SYSTEM
          </div>
          <div className='text-small dragon-crew-text-small'>
          The Dragon spacecraft is equipped with two drogue parachutes to stabilize the spacecraft following reentry and four main parachutes to further decelerate the spacecraft prior to landing.
          </div>
          <Link to='/dragon-parachute/video' className='btn-swipe' >
            <span className='btn-swipe-text'>
            WATCH VIDEO
            </span>
          </Link>
        </div>
        <Link to='/dragon-parachute/video' className='side-img side-img-dragon'>
          <img src='./images/playbutton.png' className='btn-play btn-play-hover' />
        </Link>
      </div>

      {/* SLIDER */}
        <DragonBottomSlide />
        
    </div>
  )
}

export default Dragon