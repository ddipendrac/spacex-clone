import React from 'react'
import Carousel, { consts } from 'react-elastic-carousel'
import '../../styles/BottomSlide.css'
import '../../styles/falcon9.css'

function FHBottomSlide() {

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
    <div className='bg-img fh-bg-img-1'>
      <div className='img-text'>
        <span className='slide-description'>

        Falcon Heavy vertical at Kennedy Space Center
        </span>
      </div>
    </div>
    <div className='bg-img fh-bg-img-2'>
      <div className='img-text'>
        <span className='slide-description'>
          
      Falcon Heavy takes off from Pad 39A at Kennedy Space Center
        </span>
      </div>
    </div>
    <div className='bg-img fh-bg-img-3'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Falcon Heavy carries Arabsat-6A to orbit
          </span>
      </div>
    </div>
    <div className='bg-img fh-bg-img-4'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Falcon Heavy's side boosters land at LZ-1 and LZ-2 at Cape Canaverat
          </span>
      </div>
    </div>
    <div className='bg-img  fh-bg-img-5'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Falcon Heavy lifts off from Pad 39A at Kennedy Space Center
          </span>
      </div>
    </div>
    <div className='bg-img fh-bg-img-6'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Falcon Heavy lifts off from Pad 39A at Kennedy Space Center
          </span>
      </div>
    </div>
    <div className='bg-img fh-bg-img-7'>
      <div className='img-text'>
      <span className='slide-description'>
          
      All 27 Merlin engines lit on Falcon Heavy
          </span>
      </div>
    </div>
    <div className='bg-img fh-bg-img-8'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Falcon Heavy lifts off from Pad 39A at Kennedy Space Center
          </span>
      </div>
    </div>
    <div className='bg-img fh-bg-img-9'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Falcon Heavy lifts off from Pad 39A at Kennedy Space Center
          </span>
      </div>
    </div>
    <div className='bg-img fh-bg-img-10'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Falcon Heavy's side boosters land at LZ-1 and LZ-2 at Cape Canaverat
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

export default FHBottomSlide