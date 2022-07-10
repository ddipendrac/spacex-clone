import React from 'react'
import '../../styles/overview.css'
import f91 from '../../assets/f91.mp4'
import PlayerBG from '../../components/PlayerBG'

function Overview() {
  return (
    <div className='overview'>
    <PlayerBG src={f91} className="video-bg" />
    <div className='overview-text'>
      <div className='overview-text-1 '>
        FALCON 9
      </div>
      <div className='overview-text-2'>
        OVERVIEW
      </div>
      <div className='overview-values height'>
        <div className='label'>
          HEIGHT
        </div>
        <div className='value'>
          70m<span className='overview-text-primary'>/ 229.6 ft</span>
        </div>
      </div>
      <div className='overview-divider' />
      <div className='overview-values height'>
        <div className='label'>
          DIAMETER
        </div>
        <div className='value'>
          3.7m<span className='overview-text-primary'>/ 12 ft</span>
        </div>
      </div>
      <div className='overview-divider' />
      <div className='overview-values height'>
        <div className='label'>
        MASS
        </div>
        <div className='value'>
          549,054 kg<span className='overview-text-primary'>/ 1,207,920 lb</span>
        </div>
      </div>
      <div className='overview-divider' />
      <div className='overview-values height'>
        <div className='label'>
          PAYLOAD TO LED
        </div>
        <div className='value'>
          22,800 kg<span className='overview-text-primary'>/ 50,265 lb</span>
        </div>
      </div>
      <div className='overview-divider' />

      <div className='overview-values height'>
        <div className='label'>
          PAYLOAD TO GTO
        </div>
        <div className='value'>
          8,300 kg<span className='overview-text-primary'>/ 18,300 lb</span>
        </div>
      </div>

      <div className='overview-divider' />
      <div className='overview-values height'>
        <div className='label'>
          PAYLOAD TO MARS
        </div>
        <div className='value'>
          4,020 kg<span className='overview-text-primary'>/ 8,860 lb</span>
        </div>
        
      </div>
      <div className='overview-divider' />
    </div>
  </div>
  )
}

export default Overview