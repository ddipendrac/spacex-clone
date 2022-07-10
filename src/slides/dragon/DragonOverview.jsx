import React from 'react'
import '../../styles/overview.css'

function DragonOverview() {
  return (
    <div className='overview overview-dragon'>
    <div className='overview-text'>
      <div className='overview-text-1 '>
        DRAGON
      </div>
      <div className='overview-text-2'>
        OVERVIEW
      </div>
      <div className='overview-values height'>
        <div className='label'>
          HEIGHT
        </div>
        <div className='value'>
          8.1m<span className='overview-text-primary'>/ 26.7 ft</span>
        </div>
      </div>
      <div className='overview-divider' />
      <div className='overview-values height'>
        <div className='label'>
          DIAMETER
        </div>
        <div className='value'>
          4m<span className='overview-text-primary'>/ 13 ft</span>
        </div>
      </div>
      <div className='overview-divider' />
      <div className='overview-values height'>
        <div className='label'>
        CAPSULE VOLUME
        </div>
        <div className='value'>
          9.3m<span className='power'>3</span> <span className='overview-text-primary'>/ 328 ft<span className='power power-secondary'>3</span> </span>
        </div>
      </div>
      <div className='overview-divider' />
      <div className='overview-values height'>
        <div className='label'>
          TRUNK VOLUME
        </div>
        <div className='value'>
        37m<span className='power'>3</span> <span className='overview-text-primary'>/ 1300 ft<span className='power power-secondary'>3</span> </span>
        </div>
      </div>
      <div className='overview-divider' />

      <div className='overview-values height'>
        <div className='label'>
          LAUNCH PAYLOAD MASS
        </div>
        <div className='value'>
          6,000 kg<span className='overview-text-primary'>/ 13,228 lb</span>
        </div>
      </div>

      <div className='overview-divider' />
      <div className='overview-values height'>
        <div className='label'>
          RETURN PAYLOAD MASS
        </div>
        <div className='value'>
          3,000 kg<span className='overview-text-primary'>/ 6,614 lbs</span>
        </div>
        
      </div>
      <div className='overview-divider' />
    </div>
  </div>
  )
}

export default DragonOverview