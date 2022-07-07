import React from 'react'
import '../../styles/falcon9.css'
import '../../styles/overview.css'

function SeaLevel() {
  return (
    <>
      <div className='first-stage-desc engines-desc'>
        Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.
      </div>
     
      <div className='overview-values height'>
        <div className='label'>
        PROPELLANT
        </div>
        <div className='value'>
          LOX<span className='overview-text-primary'>/ RP-1</span>
        </div>
      </div>
      <div className='overview-divider' />

      <div className='overview-values height'>
        <div className='label'>
          THRUST
        </div>
        <div className='value'>
          845 kN<span className='overview-text-primary'>/ 190,000 lbf</span>
        </div>
      </div>
      <div className='overview-divider' />
    </>
  )
}

export default SeaLevel