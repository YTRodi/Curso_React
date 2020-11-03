import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en destructuración del archivo 07-deses-arr', () => {
    test('Debe retornar un string y un número', () => {
        // const arr = retornaArreglo();
        // expect(arr).toStrictEqual(['ABC', 123]);
        // Puedo hacer la -desestructuración- acá y analizar los arreglos.
        const [letras, numeros] = retornaArreglo();

        expect(['ABC', 123]).toStrictEqual(retornaArreglo());

        expect(letras).toStrictEqual('ABC');
        expect(typeof letras).toStrictEqual('string');

        expect(numeros).toStrictEqual(123);
        expect(typeof numeros).toStrictEqual('number');
    });
});
