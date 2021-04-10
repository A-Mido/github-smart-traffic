import React from 'react'
import '../App.css'
import './Gif.css'
import { Button } from './Button'


function Gif() {
    return (
        <div className='gif-container'>
            <video src='https://github.com/A-Mido/github-smart-traffic/blob/master/public/videos/video-2.mp4' autoPlay loop muted />
            <h1> WELCOME TO SMART TRRAFIC</h1>
            <h3>Drive Safely</h3>
            <div className='gif-btns'>
                <Button className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large' >
                    GET STARTED
                </Button>

                <Button className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large' >
                    WATCH DEMO <i className='far fa-play-circle' />
                </Button>

            </div>
        </div>
    )
}

export default Gif;
