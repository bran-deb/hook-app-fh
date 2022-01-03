import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './styles.css'

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender react',
    done: false
}]

export const TodoApp = () => {

    //useReducer usa a todoReducer
    const [todos] = useReducer(todoReducer, initialState)
    //mostramos el listado de todos
    console.log(todos)

    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Hola de nuevo</li>
            </ul>
        </div>
    )
}
