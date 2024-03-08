import React from 'react'

import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
import img5 from '../../assets/5.png'
import img6 from '../../assets/6.png'

import Card from '../../components/card/Card'

import './readnext.css'

export default function READNEXT() {
  return (
    <div>
        <h1 className='textCenter'>What to read next</h1>
        <div className='cardFlex'>
        <Card title="Connecting artificial intelligence with digita lproduct design"  img={img1}/>
        <Card title="Hello world, or, in other words, why this blog exists"  img={img2}/>
        <Card title="Here are some things you should know regarding how we work"  img={img3}/>
        </div>
        <div className='cardFlexs'>
        <Card title="A few words about this blog platform, Ghost, and how this site was made"  img={img4}/>
        <Card title="Updating list of 50+ sources on distributed teams, remote work, and how to make it all work better"  img={img5}/>
        <Card title="How modern remote working tools get along with Old School Cowboy's methods"  img={img6}/>
        </div>

        <div className='inputBox'>
            <h2 className='underBOX'>Sign up for the newsletter</h2>
            <p className='UnderBoxPTage'>If you want relevant updates occasionally, sign up for the</p>
            <p className='UnderBoxPTage2'>private newsletter. Your email is never shared.</p>
            <div className='inputflex'>
            <input type="text" placeholder=' Enter your email...'  className='inputset'/>
            <button className='button'>
                <p>sign up</p>
            </button>
            </div>
        </div>






















    </div>
    
  )
}
