import React from 'react'
// import { memo } from 'react'

//prevenir que el componente se vuelva a renderizar si las props siguen con el mismo valor
export const Small = React.memo(({ value }) => {
    //si tiene diferente valor clg
    console.log('me volvi a llamar :c')

    return (
        <small>
            {value}
        </small>
    )
})
