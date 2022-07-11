import React from 'react'
import '../../styles/overview.css'

function SRSuperheavy
() {
  return (
    <div className='first-overview sr-super-heavy'>
      <div className='overview-text-2'>
        SUPER HEAVY
      </div>
      <div className='first-stage-desc'>
      The first stage, or booster, of our next-generation launch system has a gross liftoff mass of over 3 million kg and uses sub-cooled liquid methane and liquid oxygen (CH4/LOX) propellants. The booster will return to land at the launch site on its 6 legs.
      </div>
      <div className='overview-values height'>
        <div className='label'>
          HEIGHT
        </div>
        <div className='value'>
          69m<span className='overview-text-primary'>/ 230 ft</span>
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
          3400 t<span className='overview-text-primary'>/ 6.8 Mlb</span>
        </div>
      </div>
      <div className='overview-divider' />
      <div className='overview-values height'>
        <div className='label'>
         THRUST
        </div>
        <div className='value'>
          7590 tf<span className='overview-text-primary'>/ 17 Mlbf</span>
        </div>
      </div>
      <div className='overview-divider' />
    </div>
  )
}

export default SRSuperheavy