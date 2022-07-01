import React, { Link } from 'react-router-dom'
import '../styles/footer.css'

function Footer() {
  return (
    <div>
      <div className='container-footer'>

        <div className='copyright'>
          <span className='spacex'>SPACEX</span>
           
          <span className='copyright-symbol'>&copy;</span>
          <span className=''>2022</span>
        </div>

        <div className='footer-links'>
          
            <a href='https://twitter.com/spacex' className='social twitter'>
              TWITTER
            </a>
            <a href='https://youtube.com/spacex' className='social youtube'>
              YOUTUBE
            </a>
            <a href='https://instagram.com/spacex' className='social instagram'>
              INSTAGRAM
            </a>
            <a href='https://www.flickr.com/photos/spacex' className='social flickr'>
              FLICKR
            </a>
            <a href='https://www.linkedin.com/company/spacex' className='social linkedin'>
              LINKEDIN
            </a>
            <a href='https://www.spacex.com/media/privacy_policy_spacex.pdf' className='social privacy-policy'>
              PRIVACY POLICY
            </a>
            <a href='https://www.spacex.com/supplier/' className='social suppliers' >
            SUPPLIERS
            </a>
        </div>
      </div>
    </div>
  )
}

export default Footer