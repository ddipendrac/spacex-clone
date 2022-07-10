import React from 'react'
import '../../styles/falcon9.css'
import '../../styles/overview.css'

function DragonCapsuleOverview() {
  return (
    <>
      <div className='first-stage-desc dragon-capsule-overview'>
      The Dragon capsule, also known as the pressurized section, allows for the transport of people as well as environmentally sensitive cargo. Dragon is equipped with Draco thrusters that allow Dragon to maneuver while on orbit and 8 SuperDracos that power the spacecraft’s launch escape system.
      </div>

      <div className='overview-values height'>
        <div className='label'>
          VOLUME
        </div>
        <div className='value'>
          9.3m<spna className='power'>3</spna><span className='overview-text-primary'>
            / 328 ft<span className='power secondary'>3</span>
          </span>
        </div>
      </div>
      <div className='overview-divider' />
    </>
  )
}

export default DragonCapsuleOverview