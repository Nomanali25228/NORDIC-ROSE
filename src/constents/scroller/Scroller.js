import React from 'react'

import sevenpic from '../../assets/image 2.png'

import './scroller.css'

export default function Scroller() {
  return (
    <div>
        <div>
        <h1 className='h1Tage'>A few words about this blog</h1>
        <h1 className='h1Tage2'>platform, Ghost, and how this</h1>
        <h1 className='h1Tage2'>site was made</h1>
        </div>
        <div>
            <p className='pTage'>Why Ghost (& Figma) instead of Medium, WordPress</p>
            <p  className='pTage2'>or other options?</p>
        </div>
        <img src={sevenpic} alt="" className='sevenPic' />
       </div>
  )
}
