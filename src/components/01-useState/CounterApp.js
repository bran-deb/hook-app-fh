import React from 'react'
import { useState } from 'react'
import './counter.css'


export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    })
    //desestructuramos los 2 valores que usamos
    const { counter1, counter2 } = state

    const handleClick = () => {
        //para mantener el state anterior usamos spread caso contrario se perderian los otros datos
        setState({ ...state, counter1: counter1 + 1 })
    }

    return (
        <div>
            <h1>Counter1 {counter1}</h1>
            <h1>Counter2 {counter2}</h1>
            <hr />
            <button
                className='btn btn-primary'
                onClick={handleClick}
            >
                +1
            </button>
        </div>
    )
}
