import React from 'react'
import '../../styles/falcon9.css'
import '../../styles/overview.css'

function Vacuum() {
  return (
    <>
      <div className='first-stage-desc engines-desc'>
        Merlin Vacuum features a larger exhaust section and a significantly larger expansion nozzle to maximize the engine’s efficiency in the vacuum of space. Its combustion chamber is regeneratively cooled, while the expansion nozzle is radiatively cooled. At full power, the Merlin Vacuum engine operates with the greatest efficiency ever for an American-made hydrocarbon rocket engine.
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
          981 kN<span className='overview-text-primary'>/ 220,500 lbf</span>
        </div>
      </div>
      <div className='overview-divider' />
    </>
  )
}

export default Vacuum