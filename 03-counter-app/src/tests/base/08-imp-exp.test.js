import { getHeroeById, getHeroesByName, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {
    test('Debe de retornar un héroe por id', () => {
        const idTest = 1;
        const heroe = getHeroeById(idTest);

        const heroeData = heroes.find(item => item.id === idTest);
        // console.log(heroe);
        // console.log(typeof heroeData);

        expect(heroe).toStrictEqual(heroeData);
    });

    test('Debe de retornar undefined si héroe por id no existe', () => {
        const idTest = 100;
        const heroe = getHeroeById(idTest);

        const heroeData = heroes.find(item => item.id === idTest);
        // console.log(heroe);
        // console.log(typeof heroeData);

        // expect(heroe).toStrictEqual(undefined);

        // Como es primitivo de JS puedo usar .toBe()
        expect(heroe).toBe(undefined);
    });

    test('Debe de retornar un array con los héroes de DC', () => {
        const owner = 'DC';
        const heroeDataOwner = getHeroesByOwner(owner);
        const heroesFilterTest = heroeDataOwner.filter(h => h.owner === owner);
        // console.log(heroesFilterTest);

        expect(heroeDataOwner).toStrictEqual(heroesFilterTest);
    });

    test('Debe de retornar un array con los héroes de Marvel (length == 2)', () => {
        const owner = 'Marvel';
        const heroeDataOwner = getHeroesByOwner(owner);

        expect(heroeDataOwner.length).toBe(2);
    });

    test('Debe de retornar undefined si el owner no existe', () => {
        const owner = 'Disney';
        const heroeDataOwner = getHeroesByOwner(owner);

        expect(heroeDataOwner.owner).toBe(undefined);
    });

    test('Debe de retornar undefined si el name no existe', () => {
        const name = 'Hulk';
        const heroeDataOwner = getHeroesByName(name);

        expect(heroeDataOwner.name).toBe(undefined);
    });
});
