import React, { useState } from 'react'

const State = () => {
    const [count, setCount] = useState(1)
    const [dec, setDec] = useState(100)
    const [event, setEvent] = useState("")


    const clickHandle = () => {

        setCount(count + 1)
    }
    const Decreament = () => {

        setDec(dec - 1)
    }

    const changeHandle = (event) => {
        setEvent(event.target.value)

    }
    return (
        <div>
            {/* <h1>Increament : {count}</h1>
            <h1>Decreamnet : {dec}</h1> */}
            <h1>{event}</h1>
            <input type='text' onChange={changeHandle} />
            <button onClick={clickHandle}>Increase Count</button>
            <button onClick={Decreament}>Decrease Count</button>

        </div>
    )
}

export default State
