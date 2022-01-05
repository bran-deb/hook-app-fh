import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomePage = () => {

    //usamos react context y user(usuarioContext) no se pasa por props
    const usuario = useContext(UserContext)
    console.log(usuario)

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />
        </div>
    )
}
