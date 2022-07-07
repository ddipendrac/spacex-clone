import React from 'react'
import '../../styles/falcon9.css'
import '../../styles/overview.css'

function Fairing() {
  return (
    <>
      <div className='first-stage-desc engines-desc'>
        Made of a carbon composite material, the fairing protects satellites on their way to orbit. The fairing is jettisoned approximately 3 minutes into flight, and SpaceX continues to recover fairings for reuse on future missions.
      </div>

      <div className='overview-values height'>
        <div className='label'>
          HEIGHT
        </div>
        <div className='value'>
          13.1m<span className='overview-text-primary'>/ 43 ft</span>
        </div>
      </div>
      <div className='overview-divider' />

      <div className='overview-values height'>
        <div className='label'>
          DIAMETER
        </div>
        <div className='value'>
          5.2m<span className='overview-text-primary'>/ 17.1 ft</span>
        </div>
      </div>
      <div className='overview-divider' />

    </>
  )
}

export default Fairing