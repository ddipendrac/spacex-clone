import React from 'react'
import '../../styles/falcon9.css'
import '../../styles/overview.css'

function Engines() {
  return (
    <>
      <div className='first-stage-desc engines-desc'>
        The nine Merlin engines on the first stage are gradually throttled near the end of first-stage flight to limit launch vehicle acceleration as the rocket’s mass decreases with the burning of fuel. These engines are also used to reorient the first stage prior to reentry and to decelerate the vehicle for landing.
      </div>

      <div className='overview-values height'>
        <div className='label'>
          NUMBER OF ENGINES
        </div>
        <div className='value'>
          9
        </div>
      </div>
      <div className='overview-divider' />

      <div className='overview-values height'>
        <div className='label'>
          THRUST AT SEA LEVEL
        </div>
        <div className='value'>
          7,607 kN<span className='overview-text-primary'>/ 1,710,000 lbf</span>
        </div>
      </div>
      <div className='overview-divider' />
      <div className='overview-values height'>
        <div className='label'>
          THRUST IN VACUUM
        </div>
        <div className='value'>
          8,227 kN<span className='overview-text-primary'>/ 1,849,500 lbf</span>
        </div>
      </div>
      <div className='overview-divider' />
    </>
  )
}

export default Engines