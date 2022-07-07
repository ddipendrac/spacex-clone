import React from 'react'
import '../../styles/falcon9.css'
import '../../styles/overview.css'

function Dragon() {
  return (
    <>
      <div className='first-stage-desc engines-desc'>
        Dragon is capable of carrying up to 7 people and/or cargo in the spacecraft’s pressurized section. In addition, Dragon can carry cargo in the spacecraft’s unpressurized trunk, which can also accommodate secondary payloads.
      </div>
      <div className='btn-reusability'>
        Learn more about Dragon<span className='arrow-right'>
         <img src='./images/arrowright.png' />
        </span>
      </div>
      <div className='overview-values height'>
        <div className='label'>
          HEIGHT
        </div>
        <div className='value'>
          8.1m<span className='overview-text-primary'>/ 26.6 ft</span>
        </div>
      </div>
      <div className='overview-divider' />

      <div className='overview-values height'>
        <div className='label'>
          DIAMETER
        </div>
        <div className='value'>
          3.7m<span className='overview-text-primary'>/ 12 ft</span>
        </div>
      </div>
      <div className='overview-divider' />
    </>
  )
}

export default Dragon