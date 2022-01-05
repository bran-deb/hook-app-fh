import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setUser] = useState({})

    return (
        <UserContext.Provider value={{      //retornamos un objeto que contiene el useState
            user,
            setUser,
        }}>
            <AppRouter />
        </UserContext.Provider>
    )
}
