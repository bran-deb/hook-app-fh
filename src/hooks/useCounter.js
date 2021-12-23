import { useState } from "react"


//un customhook es una function
export const useCounter = (initialState = 1) => {

    const [counter, setCounter] = useState(initialState)

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    const product = (num = 2) => {
        setCounter(counter * num)
    }
    const division = (num = 2) => {
        setCounter(counter / num)
    }
    const reset = () => {
        setCounter(initialState)
    }

    return {
        counter,
        increment,
        decrement,
        product,
        division,
        reset,
    }
}
