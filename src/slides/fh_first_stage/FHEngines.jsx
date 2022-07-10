import React from 'react'
import '../../styles/falcon9.css'
import '../../styles/overview.css'

function FHEngines() {
  return (
    <>
      <div className='first-stage-desc engines-desc'>
      Falcon Heavy’s first stage incorporates 27 Merlin engines across three aluminum-lithium alloy rocket cores containing liquid oxygen and rocket-grade kerosene (RP-1) propellant. Falcon Heavy generates more than 5 million pounds of thrust at liftoff.
      </div>

      <div className='overview-values height'>
        <div className='label'>
          NUMBER OF ENGINES
        </div>
        <div className='value'>
          27
        </div>
      </div>
      <div className='overview-divider' />

      <div className='overview-values height'>
        <div className='label'>
          THRUST AT SEA LEVEL
        </div>
        <div className='value'>
          22,819 kN<span className='overview-text-primary'>/ 5,130,000 lbf</span>
        </div>
      </div>
      <div className='overview-divider' />
      <div className='overview-values height'>
        <div className='label'>
          THRUST IN VACUUM
        </div>
        <div className='value'>
          24,681 kN<span className='overview-text-primary'>/ 5,548,500 lbf</span>
        </div>
      </div>
      <div className='overview-divider' />
    </>
  )
}

export default FHEngines