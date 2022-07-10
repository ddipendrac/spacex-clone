import React from 'react'
import '../../styles/falcon9.css'
import '../../styles/overview.css'

function DragonDraco() {
  return (
    <>
      <div className='first-stage-desc engines-desc'>
      The Dragon spacecraft is equipped with 16 Draco thrusters used to orient the spacecraft during the mission, including apogee/perigee maneuvers, orbit adjustment and attitude control. Each Draco thruster is capable of generating 90 pounds of force in the vacuum of space.
      </div>
     
      <div className='overview-values height'>
        <div className='label'>
        NUMBER OF ENGINES
        </div>
        <div className='value'>
          16
        </div>
      </div>
      <div className='overview-divider' />

      <div className='overview-values height'>
        <div className='label'>
          THRUST IN VACUUM
        </div>
        <div className='value'>
          400 N<span className='overview-text-primary'>/ 90 lbf</span>
        </div>
      </div>
      <div className='overview-divider' />
    </>
  )
}

export default DragonDraco