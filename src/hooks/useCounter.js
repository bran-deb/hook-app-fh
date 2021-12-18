import { useState } from "react"


//un customhook es una function
export const useCounter = (initialState = 1) => {

    const [state, setState] = useState(initialState)

    const increment = () => {
        setState(state + 1)
    }
    const decrement = () => {
        setState(state - 1)
    }
    const product = (num = 2) => {
        setState(state * num)
    }
    const division = (num = 2) => {
        setState(state / num)
    }
    const reset = () => {
        setState(initialState)
    }

    return {
        state,
        increment,
        decrement,
        product,
        division,
        reset,
    }
}
