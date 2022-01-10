import { shallow } from 'enzyme'
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd"


describe('Pruebas en <TodoAdd/>', () => {

    const handleAddTodo = jest.fn()
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />)

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('No debe de llamar handletodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit')
        formSubmit({ preventDefault() { } })        //al formsubmit le pasamos el preventdefault
        expect(handleAddTodo).toHaveBeenCalledTimes(0)      //verifica que se haya llamado 0 veces
    })

    test('debe de llamar la funcion handleAddTodo', () => {
        const value = 'Aprender React'
        //se simulo un cambio
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        })
        const formSubmit = wrapper.find('form').prop('onSubmit')
        formSubmit({ preventDefault() { } })
        expect(handleAddTodo).toHaveBeenCalledTimes(1)      //verifica que se haya llamado 1 ves
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object))
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),      //como el id cambia cada que se renderiza(.date) solo verificamos que sea un number
            desc: value,
            done: false
        })
        expect(wrapper.find('input').prop('value')).toBe('')    //verifica si se ejecuto el reset
    })

})
