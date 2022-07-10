import React from 'react'
import Carousel, { consts } from 'react-elastic-carousel'
import '../../styles/BottomSlide.css'
import '../../styles/falcon9.css'

function DragonBottomSlide() {

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
    <div className='bg-img dr-bg-img-1'>
      <div className='img-text'>
        <span className='slide-description'>

        Dragon on pad at Launch Complex 39A
        </span>
      </div>
    </div>
    <div className='bg-img dr-bg-img-2'>
      <div className='img-text'>
        <span className='slide-description'>
          
      Dragon and Falcon 9 ready for launch at Launch Complex 39A
        </span>
      </div>
    </div>
    <div className='bg-img dr-bg-img-3'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Dragon approaching the International Space Station
          </span>
      </div>
    </div>
    <div className='bg-img dr-bg-img-4'>
      <div className='img-text'>
      <span className='slide-description'>
          
      CRS-22 approaching the International Space Station
          </span>
      </div>
    </div>
    <div className='bg-img  dr-bg-img-5'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Dragon is seen against the Earth's atmosphere
          </span>
      </div>
    </div>
  </Carousel> 
  )
}

export default DragonBottomSlide