import React from 'react'
import '../../styles/overview.css'

function Interstage() {
  return (
    <div className='first-overview interstage'>
      <div className='overview-text-1'>
        FALCON 9
      </div>
      <div className='overview-text-2'>
        INTERSTAGE
      </div>
      <div className='first-stage-desc'>
      The interstage is a composite structure that connects the first and second stages, and houses the pneumatic pushers that allow the first and second stage to separate during flight.
      </div>
      <div className='overview-text-1 text-grid'>
        GRID FINS
      </div>
      <div className='first-stage-desc'>
      Falcon 9 is equipped with four hypersonic grid fins positioned at the base of the interstage. They orient the rocket during reentry by moving the center of pressure.
      </div>
      
    </div>
  )
}

export default Interstage