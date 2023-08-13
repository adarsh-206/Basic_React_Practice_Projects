import React, { useEffect, useState } from 'react'

function StopWatchApp() {
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        let timer = null;
        if (start) {
            timer = setInterval(() => {
                setTime(pretime => pretime + 1);
            }, 1000);
        } else {
            clearInterval(timer)
        }
        return () => clearInterval(timer);
    }, [start])

    const handleStart = () => {
        setStart(true);
    };

    const handleStop = () => {
        setStart(false);
    };

    const handleReset = () => {
        setTime(0);
        setStart(false);
    };

    return (
        <div className='center-container'>
            <div className='home'>
                <h1>Stopwatch</h1>
                <p>{time}</p>
                <div className='todo'>
                    <button onClick={handleStart}>Start</button>
                    <button onClick={handleStop}>Stop</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>

        </div>
    )
}

export default StopWatchApp