import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/falcon9.css'
import '../styles/overview.css'
import '../styles/home.css'
import Carousel, { consts } from 'react-elastic-carousel'

// 1st slide contents
import SROverview from '../slides/sr/SROverview'
import SRStarship from '../slides/sr/SRStarship'
import SRSuperheavy from '../slides/sr/SRSuperheavy'
import SRPayload from '../slides/sr/SRPayload'

// 2nd Slide contents
import Satellites from '../slides/sr_gif/Satellites'
import SpaceStation from '../slides/sr_gif/SpaceStation'
import MoonMission from '../slides/sr_gif/MoonMission'
import InterplanetaryTransport from '../slides/sr_gif/InterplanetaryTransport'


// For Merlin
import DragonDraco from '../slides/dragonDraco/DragonDraco'
import DragonSuperdraco from '../slides/dragonDraco/DragonSuperdraco'

// Slide 
import SRBottomSlide from '../slides/sr/SRBottomSlide'


function Starship() {
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

      <div className='section-inner starship-feature-image'>
        <div className='animates'>
          <h4 className='animate animate-secondary'>FLIGHT TEST</h4>
          <h2 className=' shadowed shadowed-secondary'>
            STARSHIP SN15
          </h2>
          <Link to='/starship/video' className='btn-swipe' >
            <span className='btn-swipe-text'>
            REWATCH
            </span>
          </Link>
        </div>
        <img src='./images/ArrowDown.png' alt='logo' className='scrollme' />
      </div>

      <div className='starship-desc'>
        <div className='starship-desc-left'>
          <div className='starship-desc-text'>
          On Wednesday, May 5, Starship serial number 15 (SN15) successfully completed SpaceX’s fifth high-altitude flight test of a Starship prototype from Starbase in Texas.
          </div>
          <div className='starship-desc-text'>
          Similar to previous high-altitude flight tests of Starship, SN15 was powered through ascent by three Raptor engines, each shutting down in sequence prior to the vehicle reaching apogee – approximately 10 km in altitude. SN15 performed a propellant transition to the internal header tanks, which hold landing propellant, before reorienting itself for reentry and a controlled aerodynamic descent.
          </div>
          <div className='starship-desc-text'>
          The Starship prototype descended under active aerodynamic control, accomplished by independent movement of two forward and two aft flaps on the vehicle. All four flaps were actuated by an onboard flight computer to control Starship’s attitude during flight and enabled precise landing at the intended location. SN15’s Raptor engines reignited as the vehicle performed the landing flip maneuver immediately before touching down for a nominal landing on the pad.
          </div>
        </div>
        <div className='starship-desc-right'>
            <div className='starship-desc-text'>
            These test flights of Starship are all about improving our understanding and development of a fully reusable transportation system designed to carry both crew and cargo on long-duration interplanetary flights, and help humanity return to the Moon, and travel to Mars and beyond.
            </div>
            <div className='starship-desc-text'>
            Congratulations to the entire SpaceX team on SN15’s successful flight and landing!
            </div>
        </div>
      </div>

      <div className='reveal-inner starship-reveal-inner'>
        <p className='reveal-inner-text'>
        SpaceX’s Starship spacecraft and Super Heavy rocket (collectively referred to as Starship) represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond. Starship will be the world’s most powerful launch vehicle ever developed, with the ability to carry in excess of 100 metric tonnes to Earth orbit.
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
        <SROverview />
        <SRStarship />
        <SRSuperheavy />
        <SRPayload />
      </Carousel>

      <Link to='/starship-update/video' className='feature-image starship-video'>
        <img src='./images/playbutton.png' className='btn-play btn-play-hover' />
        <div className='video-text'>
          <div className='falcon9-video-text'>EVENT</div>
          <div className='falcon9-video-label'>STARSHIP UPDATE</div>
        </div>
      </Link>

      {/* Carousel - gif */}
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
        <Satellites />
        <SpaceStation />
        <MoonMission />
        <InterplanetaryTransport />
      </Carousel>

      <div className='landing-on-mars reveal-inner'>
        <div className='dragon-crew-text'>
          <div className='dragon-crew-text-big'>
          LANDING ON MARS
          </div>
          <div className='dragon-crew-text-small'>
          Starship will enter Mars’ atmosphere at 7.5 kilometers per second and decelerate aerodynamically. The vehicle’s heat shield is designed to withstand multiple entries, but given that the vehicle is coming into Mars' atmosphere so hot, we still expect to see some ablation of the heat shield (similar to wear and tear on a brake pad). The engineering video below simulates the physics of Mars entry for Starship.
          </div>
          <a href='https://www.youtube.com/watch?v=5seefpjMQJI' className='btn-swipe' >
            <span className='btn-swipe-text'>
            WATCH SIMULATION
            </span>
          </a>
        </div>
      </div>

      <div className='raptor'>
        <div className='raptor-img-container raptor-img' />
        <div className='raptor-text'>

        
          <div className='dragon-crew-text-medium'>
            ENGINES
          </div>
          <div className='dragon-crew-text-big'>
            RAPTOR
          </div>
          <div className='dragon-crew-text-small'>
            The Raptor engine is a reusable methalox staged-combustion engine that powers the Starship launch system. Raptor engines began flight testing on the Starship prototype rockets in July 2019, becoming the first full-flow staged combustion rocket engine ever flown.
          </div>
          <div className='raptor-values height'>
            <div className='label'>
              DIAMETER
            </div>
            <div className='value'>
              1.3m<span className='overview-text-primary'>/ 4 ft</span>
            </div>
          </div>
          <div className='raptor-divider' />
          <div className='raptor-values height'>
            <div className='label'>
              HEIGHT
            </div>
            <div className='value'>
              3.1m<span className='overview-text-primary'>/ 10.2 ft</span>
            </div>
          </div>
          <div className='raptor-divider' />
          <div className='raptor-values height'>
            <div className='label'>
            THRUST
            </div>
            <div className='value'>
              230 tf<span className='overview-text-primary'>/ 500 klbf</span>
            </div>
          </div>
          <div className='raptor-divider' />
        </div>
      </div>

      <div className='video-and-text'>
        <div className='private-lunar private-lunar-img' />
        <div className='v-and-t-text'>
          <div className='text-big'>
            
          FIRST PRIVATE LUNAR MISSION
          </div>
          <div className='text-small'>
          In 2023, Japanese entrepreneur Yusaku Maezawa and the crew of dearMoon will become the first civilian passengers on a lunar Starship mission, featuring a fly-by of the Moon during their week-long journey. This flight is an important step toward enabling access for people who dream of traveling to space.
          </div>

        </div>
      </div>

      {/* SLIDER */}
        <SRBottomSlide />
        
    </div>
  )
}

export default Starship