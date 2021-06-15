import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifSearchApp } from '../GifSearchApp';

describe('Pruebas en GifSearchApp', () => {

    test('Debe mostrarse correctamente', () => {

        const wrapper = shallow(<GifSearchApp />);

        expect(wrapper).toMatchSnapshot();

    })

    test('Debe mostrar na lista de categorias', () => {

        const categories = ['Dragon Ball', 'Ranma 1/2'];
        const wrapper = shallow(<GifSearchApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    })

})
