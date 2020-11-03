import getHeroeByIdAsync from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con Promesas', () => {
    //! CUANDO TENEMOS TAREAS ASÍNCRONAS...
    // Callback 'done' = le dice a Jest cuando tiene que terminar la prueba.

    test('getHeroeByIdAsync() debe retornar un héroe async', done => {
        const id = 1;

        getHeroeByIdAsync(id) // break Prettier
            .then(heroe => {
                // expect(true).toBe(false); // (sin el 'done) = La prueba pasa... (porque la toma como una tarea síncrona)

                expect(heroe).toBe(heroes[0]);

                done(); // Le digo que la prueba terminó.
            });
    });

    test('getHeroeByIdAsync() debe obtener un error si el héroe por id no existe', done => {
        const id = 100;

        getHeroeByIdAsync(id) // break Prettier
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');

                done();
            });
    });
});
