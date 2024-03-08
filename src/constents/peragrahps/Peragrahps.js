import React from 'react'

import manpic from '../../assets/image 3.png'
import facebook from '../../assets/Group.png'
import twetter from '../../assets/Vector.png'
import wingpic from '../../assets/Rectangle 8.png'
import eyes from '../../assets/Group 10.png'

import './peragrahps.css'


export default function Peragrahps() {
    return (
        <div>

            <hr className='hrTage2px' />
            <div className='mienFlex'>
                <img src={manpic} alt="" className='manpicRadius' />
                <div>
                    <h3 className='manName'>Mika MAtikainen</h3>
                    <p className='picimformation'>Apr 15, 2020 · 4 min read</p>
                </div>
                <div className='imageBoder'>
                    <img src={facebook} alt="" className='ImageMargin' />
                </div>
                <div className='imageBoder2'>
                    <img src={twetter} alt="" className='ImageMargin' />
                </div>
            </div>

            <p className='peraMargin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas
                efficitur platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus
                at viverra. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure excepturi, at architecto
                voluptatum facilis magni soluta accusantium voluptatem quae harum? Eveniet ad reiciendis amet consectetur adipisicing elit. </p>

            <p className='peraMargin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas
                efficitur platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus
                at viverra. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure excepturi, at architecto
                voluptatum facilis magni soluta</p>

            <h1 className='hTageMargin'>Next on the pipeline</h1>

            <p className='peraMargin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas
                efficitur platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus
                at viverra. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure excepturi, at architecto
                voluptatum facilis magni soluta accusantium voluptatem quae harum? Eveniet ad reiciendis.</p>
            <p className='peraMargin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas
                efficitur platea dictumst. Fusce a nunc eget ligula suscipit finibus.</p>

            <img src={wingpic} alt="" className='wingsImg' />
            <p className='imgbottompera'>Image centered this way and I’ll make this a bit longer to adipiscing elit indicate</p>
            <p className='imgbottompera'>Fusce a nunc eget ligula suscipit finibusadipiscing elit.</p>

            <p className='peraTag'>  Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos are himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu,
                semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. </p>


            <p className='peraTag'> In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit of amet nisi arcu.
                Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.
                Nulla non volutpat leo. consequat ante. Donec sit of amet nisi arcu. Morbi efficitur auctor metus,Morbi
                efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.
                Nulla non volutpat leo. </p>

            <h4 className='h4tageList'>A list looks like this:</h4>
            <div className='AllUL'>
                <ul>
                    <li className='AllLI'>First item in the list</li>
                    <li className='AllLI'>Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet</li>
                    <li className='AllLI'>Third item in the list</li>
                </ul>
            </div>
            <p className='loremTage'>Class aptent taciti sociosqu ad litora torquent per conubia nostra,per
                inceptos himenaeos. Aliquam quis posuere ligula.</p>
            <p className='thankREADING'>Thanks for reading,Mika</p>
            <div className='buttonFLEx'>
                <div className='buttonBoder'>
                    <div className='imagOppositePtage'>
                        <img src={facebook} alt="" className='buttonImage' /><p className='shareON'>share on facebook</p>
                    </div>
                </div>
                <div className='buttonBoder2'>
                    <div className='imagOppositePtage'>
                        <img src={twetter} alt="" className='buttonImage' /><p className='shareON'>share on tweeter</p>
                    </div>
                </div>
            </div>
            <div className='LinkMarginLeft'>
                <p>Tags: <a href="" class="black">product design,</a> <a href="" class="black"> culture</a></p>
            </div>
            <hr class="dotedLine" />
            <div className='imagOppositePtage'>
                <img src={manpic} alt="" className='manpicRadius' />
                <div>
                    <h3 className='manName'>MIKA MATIKAINEN</h3>
                    <p className='picimformation'>is a Design Founder & Advisor, Berlin School of Creative Leadership Executive are</p>
                </div>
            </div>
            <hr className='fullLine' />
            <img src={eyes} alt="" className='eyesCenterLINR' />












        </div>
    )
}
