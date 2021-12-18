import { useState } from "react"


//un customhook es una function
export const useCounter = (initialState = 10) => {

    const [state, setState] = useState(initialState)

    const increment = () => {
        setState(state + 1)
    }
    const decrement = () => {
        setState(state - 1)
    }

    return {
        state,
        increment,
        decrement,
    }
}
