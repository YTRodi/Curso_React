import { getUser, getUsuarioActivo } from '../../base/05-funciones.js';

describe('Pruebas en 05-funciones.js', () => {
    // COMPARAR OBJETOS.

    test('getUser() debe de retornar una objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502',
        };

        const user = getUser();

        console.log(user);
        // expect(user).toBe(userTest); // {} === {} - False ( Son dos objetos que apuntan a direcciones de memoria diferentes )
        expect(user).toStrictEqual(userTest);
    });

    test('getUsuarioActivo() debe de retornar un objeto', () => {
        const nombreTest = 'Pepe';
        const userTest = {
            uid: 'ABC567',
            username: 'Pepe',
        };

        const user = getUsuarioActivo(nombreTest);

        console.log(user);

        // #1
        // expect(user).toStrictEqual(userTest);

        // #2
        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: nombreTest,
        });
    });
});
