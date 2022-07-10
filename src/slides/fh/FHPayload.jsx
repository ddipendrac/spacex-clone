import React from 'react'
import '../../styles/overview.css'

function FHPayload() {
  return (
    <div className='first-overview fh-payload'>
      <div className='overview-text-1'>
        FALCON HEAVY
      </div>
      <div className='overview-text-2'>
        PAYLOAD
      </div>
      <div className='first-stage-desc'>
      Made of a carbon composite material, the fairing protects satellites on their way to orbit. SpaceX is recovering fairing for reuse on future missions.
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
    </div>
  )
}

export default FHPayload