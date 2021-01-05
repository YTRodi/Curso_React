const initalState = [{
    id: 1,
    todo: 'Conseguir el trabajo de mis sueños',
    done: false
}];

// Siempre tiene que regresar un nuevo estado.
// NO puede disparar peticiones asincronas
// NO puede disparar efectos secundarios
// La UNICA forma de modificar el state es dentro del reducer.
const taskReducer = ( state = initalState, action ) => {

    // Adentro del reducer tengo que modificar el state a través de la action.
    if ( action?.type === 'add' ) {
        // Lo que le decimos con el signo de pregunta '?' es: 
        // si la action tiene algún valor, que lea el type, sino que no haga nada.
        return [ ...state, action.payload ];
    }

    return state;
}

let tasks = taskReducer();

const newTask = {
    id: 2,
    todo: 'Recibirme',
    done: false // Por ahora... falta muy poquito
}

const addNewTaskAction = {
    // Standard para las actions de los REDUCER ( propiedad type y payload )
    type: 'add',
    payload: newTask
}

/** NOTES:
 * Como agregamos una nueva task? 
 * NO USAMOS PUSH EN REACT;
 * ( Ya que el push modifica/muta el obj y no queremos eso :D ).
 */

tasks = taskReducer( tasks, addNewTaskAction );


console.log(tasks);