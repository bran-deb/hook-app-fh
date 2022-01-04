import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = (props) => {
    const { handleAddTodo } = props

    const [{ description }, handleInputChange, resetForm] = useForm({
        description: ''//asociamos con el form
    })

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

        //el dispatch manda la action al reducer que lo va a usar
        handleAddTodo(newTodo)
        resetForm()
    }

    return (
        <>
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
        </>
    )
}
