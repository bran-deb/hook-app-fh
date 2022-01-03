import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { useForm } from '../../hooks/useForm'
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

    const [{ description }, handleInputChange, resetForm] = useForm({
        description: ''//asociamos con el form
    })
    //useReducer usa a todoReducer (initial state es un array vacio)
    const [todos, dispatch] = useReducer(todoReducer, [], init)
    //mostramos el listado de todos
    // console.log(description)

    //guardamos en el localStorage cuando haya cambios en los todos
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    //en esta function manejamos delete del useReducer
    const handleDelete = (todoId) => {
        console.log(todoId)

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



    //en esta function manejamos add del useReducer
    const handleSubmit = (e) => {
        e.preventDefault()
        if (description.trim().length <= 1) {
            return
        }
        //creamos un nuevo todo
        const newTodo = {
            id: new Date().getTime(),
            desc: description,//le pasamos la description del input
            done: false
        }
        //action del reducer tiene el newtodo
        const action = {
            type: 'add',//esta accion debe estar en el reducer
            payload: newTodo
        }
        //el dispatch manda la action al reducer que lo va a usar
        dispatch(action)
        resetForm()
    }


    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group list-group-flush'>

                        {
                            todos.map((todo, i) => (
                                <li
                                    key={todo.id}
                                    className='list-group-item'
                                >
                                    <p
                                        className={`${todo.done && 'complete'}`}
                                        onClick={() => {
                                            handleToggle(todo.id)
                                        }}
                                    >
                                        {i + 1}. {todo.desc}
                                    </p>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => {
                                            handleDelete(todo.id)
                                        }}
                                    >
                                        borrar
                                    </button>
                                </li>
                            ))
                        }

                    </ul>
                </div>

                <div className='col-5'>
                    <h4>agregar TODO</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>

                        <input
                            type='text'
                            name='description'
                            className='form-control'
                            placeholder='Aprender ...'
                            autoComplete='off'
                            value={description}//
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
