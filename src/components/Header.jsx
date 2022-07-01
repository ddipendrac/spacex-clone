import '../styles/header.css';
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

function Header() {
  //hide/show button on scroll up/down
  let scrollPos = 0;

  window.addEventListener('scroll', function(){

    const header = document.querySelector('.header')
    const logo = document.querySelector('.logo')
    const navLinks = document.querySelector('.nav-links')
    const btnShop = document.querySelector('.shop')

    // detects new state and compares it with the new one
    if ((document.body.getBoundingClientRect()).top > scrollPos) {
      logo.style.opacity = '1'
      navLinks.style.opacity = '1'
      btnShop.style.opacity = '1'

      var top  = window.pageYOffset || document.documentElement.scrollTop
      console.log(top)

      if(top > 615) {
        header.style.height = '100px'
      } else {
        header.style.height = '0px'
      }

      // setScrollDown(true)

      // console.log('scrolling down')
    } else {
      var top  = window.pageYOffset || document.documentElement.scrollTop

      console.log(top)

      logo.style.opacity = '0'
      navLinks.style.opacity = '0'
      btnShop.style.opacity = '0'

      header.style.height = '0px'

      // setScrollDown(false)
      // console.log('scrolling up')	
    }
    // saves the new position for iteration.
    scrollPos = (document.body.getBoundingClientRect()).top;
  });

  // console.log(scrollDown)

  return (
    <div className='header scroll-down '>  
      <Link to='/' className='spacex-logo'>
        <img 
          className='logo' src='./images/spacex-logo.png' alt='logo' 
        />
      </Link>
      <div  className='nav-links'>
        <Link className='nav-link btn-underline' to='/falcon9'>
          FALCON 9
        </Link>
        <Link className='nav-link btn-underline ' to='/falcon-heavy' >
          FALCON HEAVY
        </Link>
        <Link className='nav-link btn-underline ' to='/dragon' >
          DRAGON
        </Link>
        <Link className='nav-link btn-underline ' to='/starship' >
          STARSHIP
        </Link>
        <Link className='nav-link btn-underline ' to='/human-spaceflight' >
          HUMAN SPACEFLIGHT
        </Link>
        <Link className='nav-link btn-underline ' to='/rideshare' >
          RIDESHARE
        </Link>
        <Link className='nav-link btn-underline ' to='/starlink' >
          STARLINK
        </Link>
      </div>

      <div>
        <a href='https://shop.spacex.com/' className='nav-link btn-underline shop ' to='/shop' >
          SHOP
        </a>
      </div>

    </div>
    
  )
}

export default Header
