import React from 'react'
import '../../styles/falcon9.css'
import '../../styles/overview.css'

function SRPayloadCrew() {
  return (
    <>
      <div className='first-stage-desc engines-desc'>
      The Starship payload fairing is 9 m in diameter and 18 m high, resulting in the largest usable payload volume of any current or in development launcher. This payload volume can be configured for both crew and cargo.
      </div>

      <div className='overview-values height'>
        <div className='label'>
          PAYLOAD VOLUME HEIGHT
        </div>
        <div className='value'>
          18m<span className='overview-text-primary'>/ 59 ft</span>
        </div>
      </div>
      <div className='overview-divider' />

      <div className='overview-values height'>
        <div className='label'>
          PAYLOAD FAIRING DIAMETER
        </div>
        <div className='value'>
          9m<span className='overview-text-primary'>/ 30 ft</span>
        </div>
      </div>
      <div className='overview-divider' />
      <div className='overview-values height'>
        <div className='label'>
          PAYLOAD VOLUME
        </div>
        <div className='value'>
          1,100m<span className='power'>3</span><span className='overview-text-primary'>/ 38,800 ft</span><span className='power power-secondary'>3</span>
        </div>
      </div>
      <div className='overview-divider' />
      <div className='overview-values height'>
        <div className='label'>
          USEFUL MASS
        </div>
        <div className='value'>
          100+ t<span className='overview-text-primary'>/ 220+ klb</span>
        </div>
      </div>
      <div className='overview-divider' />

    </>
  )
}

export default SRPayloadCrew