import React, { useState } from 'react'
import '../../styles/overview.css'
import FHFirstStageOverview from '../fh_first_stage/FHFirstStageOverview'
import FHEngines from '../fh_first_stage/FHEngines'
import FHLandingLegs from '../fh_first_stage/FHLandingLegs'

function FHFirstStage() {
  const [btn, setBtn] = useState('btnOverview')
  const [activeOverview, setActiveOverview] = useState(true)
  const [activeEngines, setActiveEngines] = useState(false)
  const [activeLanding, setActiveLanding] = useState(false)
  
  let firstStageClass = 'first-overview'
  if(activeOverview) {
    firstStageClass = 'first-overview fh-first-overview-img'
  } else if (activeEngines) {
    firstStageClass = 'first-overview fh-first-engines-img'
  } else if (activeLanding) {
    firstStageClass = 'first-overview fh-first-landing-img'
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

  let div = <FHFirstStageOverview />

  if(btn == 'btnOverview') {
    
    div = <FHFirstStageOverview />
  } else if (btn == 'btnEngines') {
    
    div = <FHEngines /> 
  } else if (btn == 'btnLanding') {
    
    div = <FHLandingLegs />
  }


  return (
    <div className={firstStageClass}>
      <div className='overview-text-1'>
        FALCON 9
      </div>
      <div className='overview-text-2'>
        FIRST STAGE
      </div>
      
      <div className='buttons'>
        <div className={activeOverview ? 'btn-slide active' : 'btn-slide'} onClick={setBtnOverview} >
          OVERVIEW
        </div>
         <span className='vertical-line'>|</span>
        <div className={activeEngines ? 'btn-slide active' : 'btn-slide'} onClick={setBtnEngines}>
          ENGINES
        </div>
        <span className='vertical-line'>|</span>
        <div className={activeLanding ? 'btn-slide active' : 'btn-slide'} onClick={setBtnLanding}>
          LANDING LEGS
        </div>
      </div>
      <div />
      {div}
    </div>
  )
}

export default FHFirstStage