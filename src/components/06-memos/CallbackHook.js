import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'
import '../02-useEffect/effects.css'
import { useEffect } from 'react/cjs/react.development'

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    //el usecallback regresa una version memorizada de esa funcion
    const increment = useCallback((num) => {
        // setCounter(counter + 1) eliminamos la dependencia de counter
        setCounter(c => c + num)
    }, [setCounter])

    useEffect(() => {
        //cuando la dependencia tambien es la funcion se usa el useCallback
    }, [setCounter])

    return (
        <div>
            <h1>useCallBack Hook: {counter}</h1>
            <hr />
            {/* al mandar el componente de necesita usar el useCalback para que no se renderize cada vez */}
            <ShowIncrement increment={increment} />
        </div>
    )
}
