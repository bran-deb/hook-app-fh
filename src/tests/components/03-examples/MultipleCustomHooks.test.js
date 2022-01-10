import React from 'react';
import { shallow } from 'enzyme'
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks"
import { useFetch } from '../../../hooks/useFetch';
//simulamos el usefetch
jest.mock('../../../hooks/useFetch')


describe('Pruebas en multipleCustomHooks', () => {

    test('debe de mostrarse correctamente', () => {
        //el usefetch regresa el estado inicial o por defecto
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })
        const wrapper = shallow(<MultipleCustomHooks />)
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar la informacion', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'jairo',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />)
        //buscamos un elemento por su clase en el wrapper [alert]
        expect(wrapper.find('.alert').exists()).toBe(false)
        expect(wrapper.find('.mb-4').text().trim()).toBe('Hola Mundo')
        expect(wrapper.find('footer').text().trim()).toBe('jairo')//footer es una etiqueta
        console.log(wrapper.html())
    })

})
