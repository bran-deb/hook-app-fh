import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'


export const CounterWithCustomHook = () => {

    const { state, increment, decrement, product, division, reset } = useCounter()

    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr />

            <button className='btn' onClick={increment}> + 1</button>
            <button className='btn' onClick={decrement}> - 1</button>
            <button className='btn' onClick={() => { product() }}>product</button>
            <button className='btn' onClick={() => { division(5) }}>division</button>
            <button className='btn' onClick={reset}>reset</button>
        </>
    )
}
