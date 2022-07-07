import React from 'react'
import Carousel, { consts } from 'react-elastic-carousel'
import '../../styles/BottomSlide.css'
import '../../styles/falcon9.css'

function BottomSlide() {

    // NEXT PREV BTN
    const next = <img className='slide-next slide-next-icon' src='./images/next.png' />
    const prev = <img className='slide-next slide-prev-icon' src='./images/prev.png' />
  
    const myArrow = ({ type, onClick, isEdge })=> {
      const pointer = type === consts.PREV ? prev : next;
  
      return (
        <button onClick={onClick} disabled={isEdge} className='btn-carousel'>
          {pointer}
        </button>
      )
    }

  return (
    <Carousel 
      renderArrow={myArrow} 
      pagination={false}
      className='carousel'
    >
    <div className='bg-img bg-img-1'>
      <div className='img-text'>
        <span className='slide-description'>

      Falcon 9 lifts off with Dragon for an in-flight test of the Crew Dragon abort system
        </span>
      </div>
    </div>
    <div className='bg-img bg-img-2'>
      <div className='img-text'>
        <span className='slide-description'>
          
      Falcon 9 lifts off with its Iridium-8 payload
        </span>
      </div>
    </div>
    <div className='bg-img bg-img-3'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Falcon 9 with its Radarsat payload at sunset before launch
          </span>
      </div>
    </div>
    <div className='bg-img bg-img-4'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Falcon 9 lands at Cape Canaveral
          </span>
      </div>
    </div>
    <div className='bg-img  bg-img-5'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Falcon 9 vertical with its Iridium payload at moonrise
          </span>
      </div>
    </div>
    <div className='bg-img bg-img-6'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Falcon 9 launches Dragon to the International Space Station from Launch Complex 39A
          </span>
      </div>
    </div>
    <div className='bg-img bg-img-7'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Falcon 9 first and second stages after separating in flight
          </span>
      </div>
    </div>
    <div className='bg-img bg-img-8'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Falcon 9 lifts off with its Iridium-5 payload
          </span>
      </div>
    </div>
    <div className='bg-img bg-img-9'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Falcon 9 lands on the droneship Just Read the Instructions
          </span>
      </div>
    </div>
    <div className='bg-img bg-img-10'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Close-up of Falcon 9's Merlin engines during liftoff
          </span>
      </div>
    </div>
    <div className='bg-img bg-img-11'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Falcon 9 leaves a trail of light as it lifts off from Vandenberg Air Force Base
          </span>
      </div>
    </div>
    <div className='bg-img bg-img-12'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Falcon 9 lifts off with Dragon for an in-flight test of the Crew Dragon abort system
          </span>
      </div>
    </div>
  </Carousel>
  )
}

export default BottomSlide