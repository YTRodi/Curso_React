import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';

import './styles.css';

const init = () => {

    // Si hay todos me los trae, sino me trae el [] vacio.
    return JSON.parse( localStorage.getItem( 'todos' )) || [];

}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    // Si los todos cambian, vuelvo a grabar en el localStorage
    useEffect( () => {

        localStorage.setItem( 'todos', JSON.stringify( todos ) );

    }, [ todos ] );

    const handleDelete = ( todoId ) => {

        const deleteAction = {
            type: 'delete',
            payload: todoId
        }

        dispatch( deleteAction );
    }

    const handleToggle = ( todoId ) => {

        const toggleAction = {
            type: 'toggle',
            payload: todoId
        }

        dispatch( toggleAction );

    }

    const handleAddTodo = ( newTodo ) => {

        const addAction = {
            type: 'add',
            payload: newTodo
        }

        dispatch( addAction );

    }

    return (
        <div>
            <h1>TodoApp <small>({ todos.length })</small></h1>
            <hr />

            <div className="row">

                <div className="col-7">

                    < TodoList 
                        todos={ todos } 
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle } 
                    />

                </div>

                <div className="col-5">

                    {/* 
                        A la app no le interesa la lógica del form, sólo le interesa saber cuando este componente (form)  
                        emita un nuevo todo, la manera para agregarlo al reducer es llamando a la función que me mandas por argumento.
                    */}
                    < TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />

                </div>

            </div>

        </div>
    )
}
