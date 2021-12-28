import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesopesado'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'



export const MemoHook = () => {

    const { counter, increment } = useCounter(1000)
    const [show, setShow] = useState(true)

    //si counter cambia necesito una nueva funcion memorizada de procesoPesado(counter)
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3> Counter: <small>{counter}</small> </h3>
            <hr />

            <p>{memoProcesoPesado}</p>
            {/* <p>{procesoPesado(counter)}</p> */}

            <button
                className='btn btn-primary'
                onClick={increment}
            >
                +1
            </button>

            <button
                className='btn btn-outline-primary ml-3'
                onClick={() => {
                    setShow(!show)
                }}
            >
                Show/hide {JSON.stringify(show)}
            </button>

        </div>
    )
}
