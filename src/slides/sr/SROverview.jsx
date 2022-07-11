import React from 'react'
import PlayerBG from '../../components/PlayerBG'
import '../../styles/overview.css'
import sr1 from '../../assets/sr1.mp4'

function SROverview() {
  return (
    <div className='overview'>
      <PlayerBG src={sr1} className="video-bg" />
      <div className='overview-text'>
        <div className='overview-text-2'>
          OVERVIEW
        </div>
        <div className='overview-values height'>
          <div className='label'>
            HEIGHT
          </div>
          <div className='value'>
            120m<span className='overview-text-primary'>/ 394 ft</span>
          </div>
        </div>
        <div className='overview-divider' />
        <div className='overview-values height'>
          <div className='label'>
            DIAMETER
          </div>
          <div className='value'>
            9m<span className='overview-text-primary'>/ 30 ft</span>
          </div>
        </div>
        <div className='overview-divider' />
        <div className='overview-values height'>
          <div className='label'>
          PAYLOAD TO LED
          </div>
          <div className='value'>
            100+ t<span className='overview-text-primary'>/ 220+ klb</span>
          </div>
        </div>
        <div className='overview-divider' />
      </div>
    </div>
  )
}

export default SROverview