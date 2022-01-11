import React from 'react';
import { HomePage } from '../../../components/09-useContext/HomePage';
import { mount } from 'enzyme'
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <HomePage/>', () => {

    const user = {
        name: 'jairo',
        email: 'email@email.com'
    }
    //mount para ver todos los datos dentro del componente
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomePage />
        </UserContext.Provider>
    )

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

})
