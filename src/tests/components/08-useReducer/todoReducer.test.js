import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas en <todoReducer/>', () => {

    test('debe de retornar el estado por defecto', () => {
        //mandamos un state y action vacio
        const state = todoReducer(demoTodos, {})
        expect(state).toEqual(demoTodos)
    })

    test('debe de agregar un TODO', () => {
        const newTodo = {
            id: 3,
            desc: 'aprender Express',
            done: false
        }
        const action = {
            type: 'add',
            payload: newTodo
        }
        //pasamos el demotodo y con la accion añadimos otro todo
        const state = todoReducer(demoTodos, action)
        expect(state.length).toEqual(3)                 //ahora son 3 elementos en demotodo
        expect(state).toEqual([...demoTodos, newTodo])  //verificamos los datos del state con demotodos y newtodo
    })

    test('debe de eliminar un todo', () => {
        const action = {
            type: 'delete',
            payload: 1  //id
        }
        const state = todoReducer(demoTodos, action)
        expect(state.length).toEqual(1)
        expect(state).toEqual([demoTodos[1]])   //verificamos que el state sea igual al 2do elemento de demotodos
    })

    test('debe de hacer el toggle del TODO', () => {
        const action = {
            type: 'toggle',
            payload: 1  //id
        }
        const state = todoReducer(demoTodos, action)
        expect(state[0].done).toBe(true)
        expect(state[1].done).toBe(false)
        expect(state[1]).toEqual(demoTodos[1])  //verifica que no cambio el segundo elemento
    })

})
