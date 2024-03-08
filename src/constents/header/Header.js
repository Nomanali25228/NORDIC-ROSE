import React from 'react'

import './header.css'

export default function Header() {
  return (
    <div>
        <div className='HeaderMienFlex'>
            <h1 className='NordicRoseMargin'>NORDIC ROSE</h1>
            <h4 className='parent'>BLOG</h4>
            <h4 className='cillde'>ABOUT</h4>
            <h4 className='cillde'>LINKS</h4>
            <h4 className='cillde'>PROJECTS</h4>
        </div>
        <hr className='headerHRTage'/>
    </div>
  )
}
