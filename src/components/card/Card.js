import React from 'react'

import img1 from '../../../src/assets/1.png'
import img2 from '../../../src/assets/2.png'
import img3 from '../../../src/assets/3.png'
import img4 from '../../../src/assets/4.png'
import img5 from '../../../src/assets/5.png'
import img6 from '../../../src/assets/6.png'

import './card.css'

export default function Card(obj) {
  return (
    <div>

      <div className='div'>
           <div className='frameimg'>
           <img src={obj.img} alt="" className='imageWert' />
           <p className='pictitel'>{obj.title}</p>
        </div>
        </div>

    </div>
  )
}
