
const inicialState = [{
    id: 1,
    todo: 'comprar pan',
    done: false
}]

const todoReducer = (state = inicialState, action) => {
    //si la accion tiene algun valor lee el tipo sino no ejecuta
    if (action?.type === 'agregar') {
        //agregamos el payload al estado
        return [...state, action.payload]
    }
    return state
}


let todos = todoReducer()
//nuevo objeto para añadir mediante la action
const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const addTodoAction = {
    //debe de tener un type por standar
    //debe de tener un payload que contenga el nuevo objeto por standar
    type: 'agregar',
    payload: newTodo
}
//le pasamos el estado inicial (todo) y la accion(addTodoAction)
todos = todoReducer(todos, addTodoAction)




console.log(todos)