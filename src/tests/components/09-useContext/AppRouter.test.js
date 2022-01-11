import { AppRouter } from "../../../components/09-useContext/AppRouter"
import { mount } from 'enzyme'
import { UserContext } from "../../../components/09-useContext/UserContext"

describe('Pruebas en <AppRouter/>', () => {
    const user = {
        name: 'jairo',
        email: 'email@email.com'
    }
    const wrapper = mount(
        <UserContext.Provider value={user}>
            <AppRouter />
        </UserContext.Provider>
    )

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

})
