import React from 'react'
import Carousel, { consts } from 'react-elastic-carousel'
import '../../styles/BottomSlide.css'
import '../../styles/falcon9.css'

function SRBottomSlide() {

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
    <div className='bg-img sr-bg-img-1'>
      <div className='img-text'>
        <span className='slide-description'>

      Starship ready for flight tests.
        </span>
      </div>
    </div>
    <div className='bg-img sr-bg-img-2'>
      <div className='img-text'>
        <span className='slide-description'>
          
      Starship in flight
        </span>
      </div>
    </div>
    <div className='bg-img sr-bg-img-3'>
      <div className='img-text'>
      <span className='slide-description'>
      Starship successfully lands
          </span>
      </div>
    </div>
    <div className='bg-img sr-bg-img-4'>
      <div className='img-text'>
      <span className='slide-description'>
       Three raptor engines at the base of Starship
          </span>
      </div>
    </div>
    <div className='bg-img  sr-bg-img-5'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Artist's rendering of Starship taking off on Mars
          </span>
      </div>
    </div>
    <div className='bg-img sr-bg-img-6'>
      <div className='img-text'>
      <span className='slide-description'>
        Artist's rendering of Starship and Super Heavy in flight
          </span>
      </div>
    </div>
    <div className='bg-img sr-bg-img-7'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Artist's rendering of a base on Mars with multiple Starships
          </span>
      </div>
    </div>
    <div className='bg-img sr-bg-img-8'>
      <div className='img-text'>
      <span className='slide-description'>
          
      Artist's rendering of Starship approaching Saturn and its moons
          </span>
      </div>
    </div>
    <div className='bg-img sr-bg-img-9'>
      <div className='img-text'>
        <span className='slide-description'>
          A musical concert on board Starship

        </span>
      </div>
    </div>
    <div className='bg-img sr-bg-img-10'>
      <div className='img-text'>
      <span className='slide-description'>
      Artist's rendering of Starship and Super Heavy in flight
          </span>
      </div>
    </div>
  </Carousel>
  )
}

export default SRBottomSlide