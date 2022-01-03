import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import './styles.css'

//se llama la funcion init y lo que retorna es el inicialState
const init = () => {
    //traemos los datos del localStorage si es que hay datos
    return JSON.parse(localStorage.getItem('todos')) || []

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender react',
    //     done: false
    // }]
}

export const TodoApp = () => {


    //useReducer usa a todoReducer (initial state es un array vacio)
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    //guardamos en el localStorage cuando haya cambios en los todos
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    //en esta function manejamos delete del useReducer
    const handleDelete = (todoId) => {
        // console.log(todoId)

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action)
    }
    const handleToggle = (todoId) => {
        dispatch({//manda la action
            type: 'toggle',
            payload: todoId
        })
    }
    const handleAddTodo = (newTodo) => {
        //action del reducer tiene el newtodo
        //el dispatch manda la action al reducer que lo va a usar
        dispatch({
            type: 'add',//esta accion debe estar en el reducer
            payload: newTodo
        })
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                </div>

                <div className='col-5'>
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    )
}
