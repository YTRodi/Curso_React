import { act } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Prubas en <TodoApp />', () => {
    
    const wrapper = shallow( <TodoApp /> );

    test('Debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de agregar un TODO', () => {

        // Cuando queremos probar toda la app en general
        const wrapper = mount( <TodoApp /> );
        
        // Podemos ejecutarla o extraer la ref
        act( () => {
            wrapper.find( 'TodoAdd' ).prop( 'handleAddTodo' )( demoTodos[0] );        
            wrapper.find( 'TodoAdd' ).prop( 'handleAddTodo' )( demoTodos[1] );        
        } );
    });

});