import React, { useEffect, useState } from 'react'
import './effects.css'
import { Messaje } from './Messaje'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    })

    const { name, email } = formState

    useEffect(() => {
        // console.log('hey')
    }, [])

    useEffect(() => {
        // console.log('cambio formulario')
    }, [formState])

    useEffect(() => {
        // console.log('cambio name')
    }, [name])

    useEffect(() => {
        // console.log('cambio email')
    }, [email])


    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }


    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className='form-group'>
                <input
                    type='text'
                    name='name'//elemento del objeto para el match
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className='form-group'>
                <input
                    type='text'
                    name='email'//elemento del objeto para el match
                    className='form-control'
                    placeholder='email@gmail.com'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {(name === '123') && <Messaje />}
        </>
    )
}
