import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid.js', () => {

    const category = "Back to the future";

    test('Debe mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar items cuando se cargan imagenes (useFetchGifs)', () => {

        const gifs = [{
            id: 'ABC',
            url: 'http://localhost:3000/img.png',
            title: 'The gif'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);

        // Comparando con snapshot
        expect(wrapper).toMatchSnapshot();
        // Buscando si existe un p en el componente
        expect(wrapper.find('p').exists()).toBe(true);
        // Comprobando el numero de elementos retornados
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    })


});
