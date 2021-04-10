import React from 'react'
import '../App.css'
import './Gif.css'
import { Button } from './Button'


function Gif() {
    return (
        <div className='gif-container'>
            <img src='https://images.pexels.com/photos/1044329/pexels-photo-1044329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='backGround' />
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
