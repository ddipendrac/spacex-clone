import React from 'react'
import '../../styles/falcon9.css'
import '../../styles/overview.css'

function DragonSuperdraco() {
  return (
    <>
      <div className='first-stage-desc engines-desc'>
      An array of eight SuperDraco engines provide fault-tolerant propulsion for Dragon’s launch escape system. In the unlikely event of an emergency, the eight SuperDraco engines can power Dragon half a mile away from the launch vehicle in less than eight seconds.
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
          73 kN<span className='overview-text-primary'>/ 16,400 lbf</span>
        </div>
      </div>
      <div className='overview-divider' />
    </>
  )
}

export default DragonSuperdraco