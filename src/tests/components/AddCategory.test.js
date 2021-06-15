import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en AddCategory.js', () => {

    // Definir una funcion nativa de jest
    const setCategories = jest.fn();
    let wrapper;

    // Reinicializar valores despues de cada prueba.
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('Debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('Debe cambiar la caja de texto', () => {

        const value = 'Hola Mundo';

        const input = wrapper.find('input').at(0);

        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').at(0).text().trim()).toBe(value);

    })

    test('No debe de enviar la informacion con submit', () => {

        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        })

        expect(setCategories).not.toHaveBeenCalled();

    })

    test('Debe enviar la informacion con submit', () => {

        const value = 'Hola Mundo';

        const input = wrapper.find('input').at(0);

        input.simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        })

        expect(setCategories).toHaveBeenCalled();
        // Comprueba que fue llamada un determinado numero de veces
        expect(setCategories).toHaveBeenCalledTimes(1);
        // Comprueba que fue llamada con argumentos
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    })

    test('Debe de llamar setCategories y limpiar la caja de texto', () => {

        const value = 'Hola';

        // 1 -Simular inputChange
        const input = wrapper.find('input').at(0).simulate('change', { target: { value } });

        // 2 -Simular submit
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        // 3 -setCategories se debe llamar
        expect(setCategories).toHaveBeenCalled();

        // 4 -El valor del input debe ser ''
        expect(wrapper.find('input').prop('value')).toBe('');

    })

})
