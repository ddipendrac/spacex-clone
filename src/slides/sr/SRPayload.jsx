import React, { useState } from 'react'
import '../../styles/overview.css'
import SRPayloadCrew from '../sr_payload/SRPayloadCrew'

function SRPayload() {
  const [btn, setBtn] = useState('btnFairing')

  const [activeFairing, setActiveFairing] = useState(true)
  const [activeDragon, setActiveDragon] = useState(false)
  
  let payloadClass = 'first-overview'
  if(activeFairing) {
    payloadClass = 'first-overview sr-payload-crew'
  } else if (activeDragon) {
    payloadClass = 'first-overview sr-payload-cargo'
  } 

  const setBtnFairing = () => {  
    setBtn('')
    setBtn('btnFairing')

    setActiveFairing(true)
    setActiveDragon(false)
    
  }
  const setBtnDragon = () => {
    setBtn('')
    setBtn('btnDragon')

    setActiveFairing(false)
    setActiveDragon(true)
  }

  let div = <SRPayloadCrew />
  if(btn == 'btnFaring') {
    
    div = <SRPayloadCrew />
  } else if (btn == 'btnDragon') {
    
    div = <SRPayloadCrew /> 
  } 

  return (
    <div className={payloadClass}>
      <div className='overview-text-2'>
        PAYLOAD
      </div>
      
      <div className='buttons'>
        <div className={activeFairing ? 'btn-slide active' : 'btn-slide'} onClick={setBtnFairing} >
          CREW
        </div>
         <span className='vertical-line'>|</span>
        <div className={activeDragon ? 'btn-slide active' : 'btn-slide'} onClick={setBtnDragon}>
          CARGO
        </div>
      </div>
      {div}
    </div>
  )
}

export default SRPayload