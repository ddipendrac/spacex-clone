import React, { useState } from 'react'
import '../../styles/overview.css'
import Fairing from '../payload/Fairing'
import Dragon from '../payload/Dragon'

function Payload() {
  const [btn, setBtn] = useState('btnFairing')

  const [activeFairing, setActiveFairing] = useState(true)
  const [activeDragon, setActiveDragon] = useState(false)
  
  let payloadClass = 'first-overview'
  if(activeFairing) {
    payloadClass = 'first-overview payload-fairing'
  } else if (activeDragon) {
    payloadClass = 'first-overview payload-dragon'
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

  let div = <Fairing />
  if(btn == 'btnFaring') {
    
    div = <Fairing />
  } else if (btn == 'btnDragon') {
    
    div = <Dragon /> 
  } 

  return (
    <div className={payloadClass}>
      <div className='overview-text-1'>
        FALCON 9
      </div>
      <div className='overview-text-2'>
        PAYLOAD
      </div>
      
      <div className='buttons'>
        <div className={activeFairing ? 'btn-slide active' : 'btn-slide'} onClick={setBtnFairing} >
          FAIRING
        </div>
         <span className='vertical-line'>|</span>
        <div className={activeDragon ? 'btn-slide active' : 'btn-slide'} onClick={setBtnDragon}>
          DRAGON
        </div>
      </div>
      {div}
    </div>
  )
}

export default Payload