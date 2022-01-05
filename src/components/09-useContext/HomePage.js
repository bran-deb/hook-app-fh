import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomePage = () => {

    //usamos react context y user lo destructuramos de usercontext
    const { user } = useContext(UserContext)
    console.log(user)

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />

            <pre >
                {JSON.stringify(user, null, 3)}
            </pre>
        </div>
    )
}
