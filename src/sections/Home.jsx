import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

function Home() {

  return (
    <div className='section'>
      <div className='section-inner section-1'>
        <div className='animates'>
          <h4 className='animate'>RECENT LAUNCH</h4>
          <h2 className=' shadowed'>
            GLOBALSTAR FM15 MISSION
          </h2>
          <Link to='/globalstar' className='btn-swipe' >
            <span className='btn-swipe-text'>
            REWATCH
            </span>
          </Link>
        </div>
        <img src='./images/ArrowDown.png' alt='logo' className='scrollme' />
      </div>

      <div className='section-inner section-2'>
        <div className='animates'>
          <h4 className='animate'>RECENT LAUNCH</h4>
          <h2 className=' shadowed'>
            SARAH-1 MISSION
          </h2>
          <Link to='/sarah1' className='btn-swipe' >
            <span className='btn-swipe-text'>
              REWATCH
            </span>
          </Link>
        </div>
        
        <img src='./images/ArrowDown.png' alt='logo' className='scrollme' />
      </div>

      <div className='section-inner section-3'>
        <div className='animates'>
          
          <h2 className=' shadowed'>
            STARSHIP UPDATE
          </h2> 
          <Link to='/updates' className='btn-swipe' >
            <span className='btn-swipe-text'>
              LEARN MORE
            </span>
          </Link>
        </div>
          <img src='./images/ArrowDown.png' alt='logo' className='scrollme' />
      </div>

      <div className='section-inner section-4'>
        <div className='animates'>
          
          <h2 className=' shadowed long-text'>
            STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON
          </h2>
          <Link to='/updates' className='btn-swipe' >
            <span className='btn-swipe-text'>
              LEARN MORE
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home