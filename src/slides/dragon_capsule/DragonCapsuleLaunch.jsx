import React from 'react'
import '../../styles/falcon9.css'
import '../../styles/overview.css'

function DragonCapsuleLaunch() {
  return (
    <>
      <div className='first-stage-desc dragon-capsule-launch'>
      The launch abort system is a crew safety system built into the Dragon spacecraft, used to quickly separate Dragon from Falcon 9 in the unlikely event of an emergency. In the unlikely event of an emergency, Dragon’s launch abort system can quickly separate the spacecraft from Falcon 9. Using its SuperDraco engines, Dragon will propel itself away from the launch vehicle.
      </div>

      <div className='overview-values height'>
        <div className='label'>
          NUMBER OF ENGINES
        </div>
        <div className='value'>
          8
        </div>
      </div>
      <div className='overview-divider' />

      <div className='overview-values height'>
        <div className='label'>
          ESCAPE THRUST
        </div>
        <div className='value'>
          71 kN<span className='overview-text-primary'>/ 116,000 lbf</span>
        </div>
      </div>
      <div className='overview-divider' />
    </>
  )
}

export default DragonCapsuleLaunch