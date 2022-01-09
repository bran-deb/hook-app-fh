import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const isMounted = useRef(true)
    const [state, setState] = useState({ loading: true, error: null, data: null, })

    //
    useEffect(() => {
        //no tiene ningun efecto solo cuando se desmonte cambia su valor a false
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {
        //reseteamos el state cada que llama la url
        setState({ loading: true, error: null, data: null })
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                // setTimeout(() => {
                //si esta montado actualizamos data
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })

                } else {
                    console.log('setState no se llamo')
                }
                // }, 4000);

            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
            })
    }, [url])

    return state
}