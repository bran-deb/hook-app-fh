import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext)

    const addObject = () => {
        setUser({
            id: 12,
            name: 'rob'
        })
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={addObject}
            >
                login
            </button>
        </div>
    )
}
