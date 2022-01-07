import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter'

describe('Pruebas en useCounter', () => {

    test('debe de retornar valores por defecto', () => {
        const { result } = renderHook(() => useCounter())

        expect(result.current.counter).toBe(1)
        expect(typeof result.current.increment).toBe('function')
        expect(typeof result.current.decrement).toBe('function')
        expect(typeof result.current.division).toBe('function')
        expect(typeof result.current.product).toBe('function')
        expect(typeof result.current.reset).toBe('function')
    })

    test('debe de tener el counter en 100', () => {

        const { result } = renderHook(() => useCounter(100))
        expect(result.current.counter).toBe(100)
    })

    test('debe de incrementar el counter en 1', () => {

        const { result } = renderHook(() => useCounter(100))
        //extraemos la function incrementar
        const { increment } = result.current
        //se hace la accion de increment y aumenta en +1
        act(() => {
            increment()
        })
        //extraemos el valor del counter
        const { counter } = result.current
        expect(counter).toBe(101)
    })

    test('debe de decrementar el counter en 1', () => {
        const { result } = renderHook(() => useCounter(100))
        const { decrement } = result.current
        act(() => {
            decrement()
        })
        const { counter } = result.current
        expect(counter).toBe(99)
    })

    test('debe de multiplicar *2', () => {
        const { result } = renderHook(() => useCounter(100))
        const { product } = result.current
        act(() => {
            product()
        })
        const { counter } = result.current
        expect(counter).toBe(200)
    })

    test('debe de dividir en /2', () => {
        const { result } = renderHook(() => useCounter(100))
        const { division } = result.current
        act(() => {
            division()
        })

        const { counter } = result.current
        expect(counter).toBe(50)
    })

    test('debe de resetear el valor', () => {
        const { result } = renderHook(() => useCounter(100))
        const { reset, increment } = result.current
        act(() => {
            increment()
            reset()
        })
        const { counter } = result.current
        expect(counter).toBe(100)
    })

})
