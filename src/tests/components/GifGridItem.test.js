import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = "el titulo";

    const url = "https://localhost:3000/img.png";

    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('Debe tener un parrafo con un parrafo en el titulo', () => {

        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);

    })

    test('Debe tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find(('img'));

        // Para ver las props
        //console.log(img.prop('src'));

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })

    test('Debe de tener las clases animate__animated animate__zoomIn', () => {

        const div = wrapper.find('div');

        const className = div.prop('className');

        expect(className.includes('animate__zoomIn')).toBe(true);
    })

})