import { TodoApp } from "../../../components/08-useReducer/TodoApp"
import { shallow, mount } from 'enzyme'
import { act } from '@testing-library/react'
import { demoTodos } from "../../fixtures/demoTodos"
describe('Pruebas en <TodoApp/>', () => {

    const wrapper = shallow(<TodoApp />)
    Storage.prototype.setItem = jest.fn(() => { })       //simulamos el localStorage

    test('debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de agregar un TODO', () => {
        const wrapper = mount(<TodoApp />)
        act(() => {
            //añadimos los demos todos con todoadd()
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0])
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1])
        })
        expect(wrapper.find('h1').text().trim()).toBe('TodoAdd(2)')     //verificamos el tamaño mediante h1
        expect(localStorage.setItem).toHaveBeenCalledTimes(2)           //verifica si se llamo 2 veces
    })

    test('debe de eliminar un todo', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0])     //añade demoTodo en la posicion 0
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id)     //delete demotodo en la posicion 0
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp(0)')     //verifica el tamaño del array (0)
    })

})
