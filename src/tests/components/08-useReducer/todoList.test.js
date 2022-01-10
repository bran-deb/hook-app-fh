import { TodoList } from "../../../components/08-useReducer/TodoList"
import { shallow } from 'enzyme'
import { demoTodos } from "../../fixtures/demoTodos"

describe('Pruebas en <TodoList/>', () => {
    //simulamos las function
    const handleToggle = jest.fn()
    const handleDelete = jest.fn()

    const wrapper = shallow(
        <TodoList
            todos={demoTodos}               //pasamos datos de demotodos
            handleToggle={handleToggle}
            handleDelete={handleDelete}
        />)

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de tener dos <TodoListItem/>', () => {

        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length)      //selecciona todolistitems y lo compara con el tamaño de demotodos
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function))       //selecciona todolistitem en la posicion 0 y toma la prop de handledelete y verifica si es una function
        expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(expect.any(Function))       //selecciona todolistitem en la posicion 0 y toma la prop de handledelete y verifica si es una function
    })

})
