import React from 'react'
import '../../styles/overview.css'

function DragonTrunk() {
  return (
    <div className='first-overview dragon-trunk'>
      <div className='overview-text-1'>
        DRAGON
      </div>
      <div className='overview-text-2'>
        TRUNK
      </div>
      <div className='first-stage-desc'>
      Dragon’s trunk not only carries unpressurized cargo but also supports the spacecraft during ascent. One half of the trunk is covered in solar panels that provide power to Dragon during flight and while on-station. The trunk remains attached to Dragon until shortly before reentry into Earth’s atmosphere.
      </div>
      <div className='overview-values height'>
        <div className='label'>
          VOLUME
        </div>
        <div className='value'>
        37 kN<span className='power'>3</span><span className='overview-text-primary'>/ 13000 ft<span className='power secondary'>3</span></span>
        </div>
      </div>
      <div className='overview-divider' />
    </div>
  )
}

export default DragonTrunk