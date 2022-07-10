import React from 'react'
import '../../styles/overview.css'

function FHSecondStage() {
  return (
    <div className='first-overview fh-second-stage'>
      <div className='overview-text-1'>
        FALCON HEAVY
      </div>
      <div className='overview-text-2'>
        SECOND STAGE
      </div>
      <div className='first-stage-desc'>
      Falcon Heavy draws upon Falcon 9’s proven design, which minimizes stage separation events and maximizes reliability. The second-stage Merlin Vacuum Engine delivers the rocket’s payload to orbit after the main engines cut off and the first-stage cores separate.
      </div>
      <div className='overview-values height'>
        <div className='label'>
          NUMBER OF ENGINES
        </div>
        <div className='value'>
          1
        </div>
      </div>
      <div className='overview-divider' />
      <div className='overview-values height'>
        <div className='label'>
          BURN TIME
        </div>
        <div className='value'>
          397sec
        </div>
      </div>
      <div className='overview-divider' />
      <div className='overview-values height'>
        <div className='label'>
         THRUST
        </div>
        <div className='value'>
          981 kN<span className='overview-text-primary'>/ 220,500 lbf</span>
        </div>
      </div>
      <div className='overview-divider' />
    </div>
  )
}

export default FHSecondStage