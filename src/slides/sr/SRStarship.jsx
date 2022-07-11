import React from 'react'
import '../../styles/overview.css'

function SRStarship() {
  return (
    <div className='first-overview sr-starship'>
      <div className='overview-text-2'>
        STARSHIP
      </div>
      <div className='first-stage-desc'>
      Starship is the fully reusable spacecraft and second stage of the Starship system. It offers an integrated payload section and is capable of carrying passengers and cargo to Earth orbit, planetary destinations, and between destinations on Earth.
      </div>
      <div className='overview-values height'>
        <div className='label'>
          HEIGHT
        </div>
        <div className='value'>
          50m<span className='overview-text-primary'>/ 164 ft</span>
        </div>
      </div>
      <div className='overview-divider' />
      <div className='overview-values height'>
        <div className='label'>
          DIAMETER
        </div>
        <div className='value'>
          9m<span className='overview-text-primary'>/ 30 ft</span>
        </div>
      </div>
      <div className='overview-divider' />
      <div className='overview-values height'>
        <div className='label'>
         PROPELLANT CAPACITY
        </div>
        <div className='value'>
          1200 t<span className='overview-text-primary'>/ 2.6 Mlb</span>
        </div>
      </div>
      <div className='overview-divider' />
      <div className='overview-values height'>
        <div className='label'>
         THRUST
        </div>
        <div className='value'>
          1500 tf<span className='overview-text-primary'>/ 3.2 Mlbf</span>
        </div>
      </div>
      <div className='overview-divider' />
      <div className='overview-values height'>
        <div className='label'>
         PAYLOAD CAPACITY
        </div>
        <div className='value'>
          100-150 t orbit dependent
        </div>
      </div>
      <div className='overview-divider' />
    </div>
  )
}

export default SRStarship