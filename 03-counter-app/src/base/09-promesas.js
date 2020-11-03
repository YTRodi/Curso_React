import { getHeroeById } from './08-imp-exp.js';

const getHeroeByIdAsync = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject('No se pudo encontrar el héroe');
            }
        }, 1500);
    });
};

// getHeroeByIdAsync(1) // Este comentario es para que no me lo formatee Prettier
//     .then(console.log)
//     .catch(console.warn);
export default getHeroeByIdAsync;
