import '@testing-library/jest-dom'; // Para tener todos los métodos de jest.
const { getSaludo } = require('../../base/02-template-string');

describe('Pruebas en 02-template-string.js', () => {
    // Me conviene comentar los console.log
    test('getSaludo() debe de retornar hola + el nombre', () => {
        const nombre = 'Carlos';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + '!');

        // console.log(saludo)
    });

    test('getSaludo() debe de retornar Hola Carlos! si no hay argumento nombre', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos!');
    });
});
