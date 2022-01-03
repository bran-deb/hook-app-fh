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
    const [todos, dispatch] = useReducer(todoReducer, initialState)
    //mostramos el listado de todos
    console.log(todos)

    const handleSubmit = (e) => {
        e.preventDefault()
        //creamos un nuevo todo
        const newTodo = {
            id: new Date().getTime(),
            desc: 'Nueva tarea',
            done: false
        }
        //action del reducer tiene el newtodo
        const action = {
            type: 'add',//esta accion debe estar en el reducer
            payload: newTodo
        }
        //el dispatch manda la action al reducer que lo va a usar
        dispatch(action)
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
                                    <p className='text-center'>{i + 1}. {todo.desc}</p>
                                    <button className='btn btn-danger'>
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
