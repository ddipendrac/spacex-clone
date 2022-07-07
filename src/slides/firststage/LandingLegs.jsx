import React from 'react'
import '../../styles/overview.css'

function LandingLegs() {
  return (
    < >
      <div className='first-stage-desc landing-desc'>
      The Falcon 9 first stage is equipped with four landing legs made of state-of-the-art carbon fiber with aluminum honeycomb.
      </div>

      <div className='first-stage-desc landing-desc'>
       Placed symmetrically around the base of the rocket, they are stowed at the base of the vehicle and deploy just prior to landing.
      </div>
      <div className='btn-reusability'>
        Learn more about SpaceX reusability<span className='arrow-right'>
         <img src='./images/arrowright.png' />
        </span>
      </div>
    </>
  )
}

export default LandingLegs