import React, { useState, useEffect } from 'react'

export const Messaje = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const { x, y } = coords

    useEffect(() => {

        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y }
            setCoords(coords)
        }

        //para no mandar el callback mandamos la funcion mouseMove
        window.addEventListener('mousemove', mouseMove)

        return () => {
            //desmontamos para que no se agrupen los effects
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                x:{x}y:{y}
            </p>
        </div>
    )
}
