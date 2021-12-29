import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';
import '../02-useEffect/effects.css'

export const Padre = () => {

    const numeros = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);

    // const incrementar = (num) => {
    //     setValor(valor + num)
    // }

    //usamos el useCallback para dejar de renderizar nuestros botones
    const incrementar = useCallback((num) => {
        // el valor es igual a el valor anterior mas el num
        setValor(v => v + num)
    }, [setValor])


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: {valor} </p>

            <hr />

            {
                numeros.map(n => (
                    <Hijo
                        key={n}
                        numero={n}
                        incrementar={incrementar}
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
