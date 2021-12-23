import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    //puede cambiar a lo que apunta el ref sin necesidad de renderizar
    const inputRef = useRef()
    console.log(inputRef)


    const hanldeClick = () => {
        //usamos focus o select para seleccionar el foco del input
        // document.querySelector('input').focus()
        inputRef.current.select()
        // console.log(inputref)
    }

    return (
        <div>
            <h3>Focus Screen</h3>
            <hr />

            <input
                ref={inputRef}
                className='form-control'
                placeholder='Su nombre'
            />
            <button
                className='btn btn-outline-primary mt-5'
                onClick={hanldeClick}
            >
                Focus
            </button>
        </div>
    )
}
