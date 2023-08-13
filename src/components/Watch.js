import React, { useState } from 'react'

function Watch() {
    var time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const CalcTime = () => {
        var time = new Date().toLocaleTimeString();
        setCurrentTime(time)
    }

    setInterval(CalcTime, 1000);

    return (
        <div className='center-container'>
            <div className='home'>
                <h1>StopWatch App</h1>
                <p>{currentTime}</p>
            </div>
        </div>
    )
}

export default Watch