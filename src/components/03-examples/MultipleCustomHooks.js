import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1)
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    //si existe la data destructuring la posicion cero de la data
    const { author, quote } = !!data && data[0]

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading
                    ? (
                        <div className='alert alert-info text-center'>
                            loading...
                        </div>
                    )
                    : (<div>

                        <blockquote className="blockquote text-right">
                            <p className='mb-4'>{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                        <button
                            className='btn btn-primary'
                            onClick={increment}
                        >
                            Siguiente quote
                        </button>
                    </div>
                    )
            }
        </div>
    )
}
