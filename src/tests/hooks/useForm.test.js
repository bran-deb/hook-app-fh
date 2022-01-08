import { act, renderHook } from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm'

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'brandon',
        email: 'email@email.com'
    }

    test('debe de regresar un formulario por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm))
        const [formValues, handleInputChange, reset] = result.current

        expect(formValues).toEqual(initialForm)
        expect(typeof handleInputChange).toBe('function')
        expect(typeof reset).toBe('function')
    })

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook(() => useForm(initialForm))
        const [, handleInputChange] = result.current
        //simulamos el evento del input para cambiar el name
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            })
        })
        const [formValues] = result.current
        //verificamos los valores del ...initialform y que solo se cambio el name
        expect(formValues).toEqual({ ...initialForm, name: 'Melissa' })
    })

    test('debe de cambiar el valor del formulario (cambiar email)', () => {
        const { result } = renderHook(() => useForm(initialForm))
        const [, handleInputChange] = result.current
        act(() => {
            handleInputChange({
                target: {
                    name: 'email',
                    value: 'otroemail@email.com'
                }
            })
        })
        const [formValues] = result.current
        expect(formValues).toEqual({ ...initialForm, email: 'otroemail@email.com' })
    })


    test('debe de re-establecer el formulario con reset', () => {
        const { result } = renderHook(() => useForm(initialForm))
        const [, handleInputChange, reset] = result.current
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'pepito'
                }
            })
            reset()
        })
        const [formValues] = result.current
        expect(formValues).toEqual(initialForm)
    })

})
