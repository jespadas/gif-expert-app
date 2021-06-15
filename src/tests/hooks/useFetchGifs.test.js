import React from 'react';
import '@testing-library/jest-dom';

import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en useFetchGifs.js', () => {

    test('Debe retornar el state inicial', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toEqual(true);

    });

    test('Debe retornar un Array de imagenes y el loading false', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toEqual(false);

    });


})
