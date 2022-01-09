import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe('pruebas en useFetch', () => {

    const url = `https://www.breakingbadapi.com/api/quotes/1`

    test('debe de retornar la informacion por defecto', () => {
        const { result } = renderHook(() => useFetch(url))
        const { loading, error, data } = result.current

        expect(loading).toBe(true)
        expect(error).toBe(null)
        expect(data).toBe(null)
    })

    test('debe de tener la info deseada, loading false, error null', async () => {
        //para usar el waitForNextUpdate retorna una promise y necesita ser async test
        const { result, waitForNextUpdate } = renderHook(() => useFetch(url))
        await waitForNextUpdate({ timeout: 5000 })  //primero hacemos el update y luego las estraemos
        const { loading, error, data } = result.current

        expect(loading).toBe(false)
        expect(error).toBe(null)
        expect(data.length).toBe(1)
    })

    test('debe de manejar el error', async () => {
        const url404 = 'https://reqres.in/apid/users?page=2'
        const { result, waitForNextUpdate } = renderHook(() => useFetch(url404))
        await waitForNextUpdate({ timeout: 5000 })
        const { loading, error, data } = result.current

        expect(loading).toBe(false)
        expect(error).toBe('No se pudo cargar la info')
        expect(data).toBe(null)
    })
})
