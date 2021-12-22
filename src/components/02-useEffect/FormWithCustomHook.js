import { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import './effects.css'

export const FormWithCustomHook = () => {


    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    })

    const { name, email, password } = formValues

    useEffect(() => {
        console.log('email cambio')
    }, [email])

    const hanldeInputSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)
    }


    return (
        <form onSubmit={hanldeInputSubmit}>
            <h1>FormWithCustomHook</h1>
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

            <div className='form-group'>
                <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='******'
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    )
}
