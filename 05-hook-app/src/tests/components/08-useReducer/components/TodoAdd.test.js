import { shallow } from "enzyme";
import { TodoAdd } from "../../../../components/08-useReducer/components/TodoAdd";

describe('Pruebas en <TodoAdd />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow( 
        <TodoAdd 
            handleAddTodo={ handleAddTodo }
        /> 
    );
    
    test('Debe de mostrar el componente correctamente', () => { 
        expect( wrapper ).toMatchSnapshot();
    });

    test('NO debe de llamar handleAddTodo', () => {
        
        // description.length <= 1
        const formSubit = wrapper.find( 'form' ).prop( 'onSubmit' ); // Hace ref a una función.
        
        formSubit( { preventDefault(){} } );

        expect( handleAddTodo ).toHaveBeenCalledTimes( 0 );
        
    });

    test('Debe de llamar la función handleAddTodo', () => {
        
        // Con un argumento
        const value = 'Aprender React';
        wrapper.find( 'input' ).simulate( 'change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubit = wrapper.find( 'form' ).prop( 'onSubmit' ); // Hace ref a una función.
        formSubit( { preventDefault(){} } );
        
        expect( handleAddTodo ).toHaveBeenCalledTimes( 1 );
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any( Object ) ); // {  } standard
        expect( handleAddTodo ).toHaveBeenCalledWith( {
            id: expect.any(Number), // No me importa que id sea, sólo me importa que sea un número
            desc: value,
            done: false,
        } );

        expect( wrapper.find( 'input' ).prop( 'value' ) ).toBe( '' );

    });

});