import React from 'react'

import './footer.css'

export default function Footer() {
    var todaydate = new Date
    var fullyear = todaydate.getFullYear()
  return (
    <div>
        <div className='fullBlack'>
            <div className='footerTop'>
                <h4>Digital product design</h4>
                <h4>Remote work</h4>
                <h4>UX design</h4>
                <h4>Distributed teams</h4>
                <h4>Creativity</h4>
                <h4>Strategy</h4>
                <h4>Suspense</h4>
                <h4>Growth</h4>
            </div>
            <h1 className='footerh1tag'>NORDIC ROSE</h1>
            <p className='ptag1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit</p>
            <p className='ptag2'>tempus erat egestas efficitur. In hac habitasse platea dictumst.</p>
            <p className='ptag2'>Fusce a nunc egestas eget ligula suscipit finibus.</p>
            
            
            <p className='creatername'>All rights reserved. &copy;{fullyear} 
            <a href="https://github.com/Nomanali25228" target='blaank'>github/noman</a></p>







        </div>



    </div>
  )
}
