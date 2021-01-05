import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    description: 'Aprender React',
    done: false
}];


export const TodoApp = () => {

    /** Params 'useReducer':
     * # 1 = function
     * # 2 = estado inicial
     * # 3 = function => es usado para inicializar el state en caso de que ese state haga varias acciones.
     */

    /** ¿ QUE ES EL DISPATCH ?
     * Es una función que le mandamos una accion y ya va a saber a que reducer enviar la info.
     * Y cuando cambie el state, va a redibujar lo que cambie.
     */
    const [ todos, dispatch ] = useReducer( todoReducer, initialState );

    console.log(todos);

    const handleSubmit = ( e ) => {
        e.preventDefault();
        
        const newTodo = {
            id: new Date().getTime(),
            description: 'Nueva tarea',
            done: false
        };

        const addAction = {
            type: 'add',
            payload: newTodo
        }

        // Este dispatch se puede mandar como argumento a componentes HIJOS y ya va a saber 
        // que pertenece a este reducer ( ya que son pasados por referencia. )
        dispatch( addAction );
    }

    return (
        <div>
            <h1>TodoApp <small>({ todos.length })</small></h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map( ( todo, index ) => (

                                <li
                                    key={ todo.id }
                                    className="list-group-item"
                                >
                                    <p className="text-center">
                                        { index + 1 } - { todo.description }
                                    </p>

                                    <button className="btn btn-danger">
                                        Borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Your new todo..."
                        >
                        </input>

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Agregar
                        </button>
                    </form>
                </div>

            </div>

        </div>
    )
}
