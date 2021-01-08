import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en todoReducer', () => {
    
    test('Debe de retornar el estado por defecto', () => {
        
        const state = todoReducer( demoTodos, {} );

        expect( state ).toEqual( demoTodos );

    });

    test('Debe de agregar un TODO', () => {
        
        const newTodo = {
            id: 3,
            desc: 'Ser el mejor ayudante de cátedra',
            done: false
        };

        const addAction = {
            type: 'add',
            payload: newTodo
        };

        const state = todoReducer( demoTodos, addAction );

        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [ ...demoTodos, newTodo ] );

    });

    test('Debe de eliminar un TODO', () => {
        
        const deleteAction = {
            type: 'delete',
            payload: 2
        };

        const state = todoReducer( demoTodos, deleteAction );

        expect( state.length ).toBe( 1 );

    });

    test('Debe de hacer el toggle un TODO', () => {
        
        const deleteAction = {
            type: 'toggle',
            payload: 1
        };

        const state = todoReducer( demoTodos, deleteAction );

        expect( state[0].done ).toBe( true );
        expect( state[1] ).toEqual( demoTodos[1] ); // Me aseguro que el otro obj no cambió

    });

});