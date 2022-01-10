import React from 'react';
import { shallow } from 'enzyme'
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks"
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

//simulamos el usefetch y useCounter
jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')


describe('Pruebas en multipleCustomHooks', () => {

    beforeEach(() => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => { }
        });
    })

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
        expect(wrapper.find('.alert').exists()).toBe(false)             //no existe loading en la clase alert
        expect(wrapper.find('.mb-4').text().trim()).toBe('Hola Mundo')  //la clase mb-4 contiene el quote
        expect(wrapper.find('footer').text().trim()).toBe('jairo')      //footer es una etiqueta y contiene author
    })

})
