import { getGifs } from "../../helpers/getGifs"

describe('Pruebas en GetGifs.js', () => {

    test('Debe retornar 10 elementos', async () => {

        const gifs = await getGifs('Master Chef');

        expect(gifs.length).toBe(10);

    })

})
