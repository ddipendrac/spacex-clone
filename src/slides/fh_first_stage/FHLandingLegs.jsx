import React from 'react'
import '../../styles/overview.css'

function FHLandingLegs() {
  return (
    < >
      <div className='first-stage-desc landing-desc'>
      The Falcon Heavy first stage is equipped with 12 landing legs (4 on each booster) made of state-of-the-art carbon fiber with aluminum honeycomb.
      </div>

      <div className='first-stage-desc landing-desc'>
      All 12 landing legs are stowed along the side of each booster until just prior to landing.
      </div>
      <div className='btn-reusability'>
        Learn more about Falcon reusability<span className='arrow-right'>
         <img src='./images/arrowright.png' />
        </span>
      </div>
    </>
  )
}

export default FHLandingLegs