import React from 'react'
import PlayerBG from '../../components/PlayerBG'
import '../../styles/overview.css'
import fh1 from '../../assets/fh1.mp4'

function FHOverview() {
  return (
    <div className='overview'>
      <PlayerBG src={fh1} className="video-bg" />
      <div className='overview-text'>
        <div className='overview-text-1 '>
          FALCON HEAVY
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
            WIDTH
          </div>
          <div className='value'>
            12.2m<span className='overview-text-primary'>/ 39.9 ft</span>
          </div>
        </div>
        <div className='overview-divider' />
        <div className='overview-values height'>
          <div className='label'>
          MASS
          </div>
          <div className='value'>
            1,420,788 kg<span className='overview-text-primary'>/ 3,125,735 lb</span>
          </div>
        </div>
        <div className='overview-divider' />
        <div className='overview-values height'>
          <div className='label'>
            PAYLOAD TO LED
          </div>
          <div className='value'>
            63,800 kg<span className='overview-text-primary'>/ 140,660 lb</span>
          </div>
        </div>
        <div className='overview-divider' />

        <div className='overview-values height'>
          <div className='label'>
            PAYLOAD TO GTO
          </div>
          <div className='value'>
            26,700 kg<span className='overview-text-primary'>/ 58,860 lb</span>
          </div>
        </div>

        <div className='overview-divider' />
        <div className='overview-values height'>
          <div className='label'>
            PAYLOAD TO MARS
          </div>
          <div className='value'>
            16,800 kg<span className='overview-text-primary'>/ 37,040 lb</span>
          </div>
          
        </div>
        <div className='overview-divider' />
      </div>
    </div>
  )
}

export default FHOverview