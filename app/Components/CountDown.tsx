'use client'
import React from 'react'
import Countdown from 'react-countdown'

//ending date 1day from now 
const endingDate = Date.now() + 1 * 24 * 60 * 60 * 1000

const CountDown = () => {
    return (
        <Countdown className='text-4xl lg:text-5xl  font-bold text-yellow-300' date={endingDate} />
    )
}

export default CountDown