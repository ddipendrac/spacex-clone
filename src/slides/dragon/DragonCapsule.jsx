import React, { useState } from 'react'
import '../../styles/overview.css'
import DragonCapsuleOverview from '../dragon_capsule/DragonCapsuleOverview'
import DragonCapsuleLaunch from '../dragon_capsule/DragonCapsuleLaunch'
import DragonCapsuleAttitude from '../dragon_capsule/DragonCapsuleAttitude'

function DragonCapsule() {
  const [btn, setBtn] = useState('btnOverview')
  const [activeOverview, setActiveOverview] = useState(true)
  const [activeEngines, setActiveEngines] = useState(false)
  const [activeLanding, setActiveLanding] = useState(false)
  
  let firstStageClass = 'first-overview'
  if(activeOverview) {
    firstStageClass = 'first-overview dragon-capsule-overview-img'
  } else if (activeEngines) {
    firstStageClass = 'first-overview dragon-capsule-launch-img'
  } else if (activeLanding) {
    firstStageClass = 'first-overview dragon-capsule-attitude-img'
  }

  const setBtnOverview = () => {  
    setBtn('')
    setBtn('btnOverview')

    setActiveOverview(true)
    setActiveEngines(false)
    setActiveLanding(false)
  }
  const setBtnEngines = () => {
    setBtn('')
    setBtn('btnEngines')

    setActiveOverview(false)
    setActiveEngines(true)
    setActiveLanding(false)
  }
  const setBtnLanding = () => {
    setBtn('')
    setBtn('btnLanding')

    setActiveOverview(false)
    setActiveEngines(false)
    setActiveLanding(true)
  }

  let div = <DragonCapsuleOverview />

  if(btn == 'btnOverview') {
    
    div = <DragonCapsuleOverview />
  } else if (btn == 'btnEngines') {
    
    div = <DragonCapsuleLaunch /> 
  } else if (btn == 'btnLanding') {
    
    div = <DragonCapsuleAttitude />
  }


  return (
    <div className={firstStageClass}>
      <div className='overview-text-1'>
        DRAGON 
      </div>
      <div className='overview-text-2'>
        CAPSULE
      </div>
      
      <div className='buttons'>
        <div className={activeOverview ? 'btn-slide active' : 'btn-slide'} onClick={setBtnOverview} >
          OVERVIEW
        </div>
         <span className='vertical-line'>|</span>
        <div className={activeEngines ? 'btn-slide active' : 'btn-slide'} onClick={setBtnEngines}>
          LAUNCH ABORT
        </div>
        <span className='vertical-line'>|</span>
        <div className={activeLanding ? 'btn-slide active' : 'btn-slide'} onClick={setBtnLanding}>
          ATTITUDE CONTROL
        </div>
      </div>
      <div />
      {div}
    </div>
  )
}

export default DragonCapsule