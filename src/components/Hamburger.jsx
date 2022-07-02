import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/hamburger.css'
import '../styles/header.css'

function Hamburger() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }  

  let scrollPos = 0;

  window.addEventListener('scroll', function(){
    const hamburger = document.querySelector('.hamburger')
    // detects new state and compares it with the new one
    if ((document.body.getBoundingClientRect()).top > scrollPos) {
      hamburger.style.opacity = '1'
      console.log('scrolling down')
    } else {
      hamburger.style.opacity = '0'
      console.log('scrolling up')	
    }
    // saves the new position for iteration.
    scrollPos = (document.body.getBoundingClientRect()).top;
  });
  
  return (
    <>
        <div 
          className='overlay'
          style={{
            visibility: hamburgerOpen ? 'visible': 'hidden'
          }}
        ></div>
        <div className='hamburger show-nav' onClick={toggleHamburger}>
          <div 
            className='burger' 
            style={{
              transform: hamburgerOpen ? 'rotate(45deg)' : 'rotate(0)'
          }} />
          <div className='burger burger2' 
            style={{
              opacity: hamburgerOpen ? '0' : '1'
            }}
            />
          <div 
            className='burger' 
            style={{
              transform: hamburgerOpen ? 'rotate(-45deg)' : 'rotate(0)'
          }} />
        </div>
        <div 
          className='hamburger-container'
          style= {{
            width: hamburgerOpen ? '350px' : '0'
          }}
          onClick={toggleHamburger}
         >
          <Link 
            to='/falcon9' 
            className='nav-item secondary'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.3s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '0.7s'
            }}
          >
            FALCON 9
          </Link>
          <Link
            to='/falcon-heavy'
            className='nav-item secondary'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.4s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '0.75s'
            }}
            
            >
            FALCON HEAVY
          </Link>
          <Link 
            to='/dragon' className='nav-item secondary'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.5s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '0.8s'
            }}
            >
            DRAGON
          </Link>
          <Link
            to='/starship'
            className='nav-item secondary'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.6s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '0.85s'
            }}
            >
            STARSHIP
          </Link>
          <Link 
            to='/human-spaceflight' className='nav-item secondary'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.7s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '0.90s'
            }}
            
            >
            HUMAN SPACEFLIGHT
          </Link>
          <Link 
            to='/rideshare' className='nav-item secondary'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.7s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '0.95s'
            }}
           
            >
            RIDESHARE
          </Link>
          <a 
            href='https://www.starlink.com/' className='nav-item secondary'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.7s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '1s'
            }}
            
            >
            STARLINK
          </a>
          <Link 
            to='/mission' className='nav-item primary'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.7s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '1.10s'
            }}
            
            >
            MISSION
          </Link>
          <Link 
            to='/launches' className='nav-item primary'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.7s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '1.15s'
            }}
            
            >
            LAUNCHES
          </Link>
          <a 
            href='https://www.spacex.com/careers/' className='nav-item primary'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.7s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '1.20s'
            }}
            >
            CAREERS
          </a>
          <Link  
            to='/updates' className='nav-item primary'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.7s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '1.25s'
            }}
            >
            UPDATES
          </Link>
          <a  
            href='https://shop.spacex.com/' className='nav-item primary'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.7s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '1.25s'
            }}
            >
            SHOP
          </a>
        </div>
        {/* Hide secondary nav-links for wide screen */}
        <style jsx>{`
          body {
            overflow-y: ${hamburgerOpen ? 'hidden' : '' };
          }
        `}
        </style>
    </>


  )
}

export default Hamburger