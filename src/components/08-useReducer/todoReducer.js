export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload]

        //retorna el valor inicial
        default:
            return state
    }
}