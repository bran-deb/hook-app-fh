import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import './layout.css'

export const Layout = () => {

    const { counter, increment } = useCounter(1)
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    //si existe la data destructuring la posicion cero de la data
    const { quote } = !!data && data[0]
    //hacemos ref al parrafo
    const pTag = useRef()
    //usamos el state para mostrar en el html la medida
    const [boxSize, setBoxSize] = useState({})

    //saca mediciones despues de que se renderizo quote
    useLayoutEffect(() => {
        //getBoundingClientRect calcula el tamaño del elemento
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p
                    className='mb-4'
                    ref={pTag}
                >
                    {quote}
                </p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button
                className='btn btn-primary'
                onClick={increment}
            >
                Siguiente quote
            </button>
        </div>
    )
}
