import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {
    //usamos react context y user,setuser lo destructuramos de usercontext
    const { user, setUser } = useContext(UserContext)

    const logout = () => {
        setUser({})
    }


    return (
        <div>
            <h1>AboutScreen</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button
                className='btn btn-warning'
                onClick={logout}
            >
                Logout</button>
        </div>
    )
}
