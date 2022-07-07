import React from 'react'
import '../../styles/overview.css'

function SecondStage() {
  return (
    <div className='first-overview second-stage'>
      <div className='overview-text-1'>
        FALCON 9
      </div>
      <div className='overview-text-2'>
        SECOND STAGE
      </div>
      <div className='first-stage-desc'>
      The second stage, powered by a single Merlin Vacuum Engine, delivers Falcon 9’s payload to the desired orbit. The second stage engine ignites a few seconds after stage separation, and can be restarted multiple times to place multiple payloads into different orbits.
      </div>
      <div className='overview-values height'>
        <div className='label'>
          NUMBER OF ENGINES
        </div>
        <div className='value'>
          1vacuum
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

export default SecondStage