import CounterApp from "../CounterApp";
import { shallow } from "enzyme";

describe('Pruebas para el componente <CounterApp />', () => {

    let wrapper = shallow( <CounterApp /> );
    
    // Función que se va a ejecutar antes de cada una de los test
    beforeEach(() => {
        
        // Reinicio el componente y le pongo el valor por defecto.
        // Le asigno lo mismo dos veces para poder tener todos los métodos del wrapper.
        wrapper = shallow( <CounterApp /> );

    });

    test('Debe de mostrar <CounterApp /> correctamente y sus valores por defecto', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de mostrar el valor por defecto de 100 (pasado por props)', () => {
        
        const valueTest = 100;

        const wrapper = shallow( 
            <CounterApp
                value = { valueTest }
            /> 
        );

        const counterTextFromh2 = wrapper.find( 'h2' ).text();
        // console.log(counterTextFromh2);

        expect( counterTextFromh2 ).toBe( '100' );

    });

    test('Debe de incrementar el counter con el botón +1', () => {
        
        // .at( Índice 0)
        const btn1 = wrapper.find( 'button' ).at( 0 ); 
        // console.log( btn1.html() );

        // Simulo el evento click.
        btn1.simulate( 'click' );

        const counterTextFromh2 = wrapper.find( 'h2' ).text();

        expect( counterTextFromh2 ).toBe( '11' );

    });

    test('Debe de decrementar el counter con el botón -1', () => {
        
        // .at( Índice 0)
        const btn2 = wrapper.find( 'button' ).at( 2 ); 
        // console.log( btn2.html() );

        // Simulo el evento click.
        btn2.simulate( 'click' );

        const counterTextFromh2 = wrapper.find( 'h2' ).text();

        expect( counterTextFromh2 ).toBe( '9' );

    });

    test('Debe de colocar el valor por defecto del counter con el botón reset', () => {
        
        // Lógica: para probar si realmente funciona primero tengo que incrementar o decrementar el counter.

        const valueTest = 105;

        const wrapper = shallow( 
            <CounterApp
                value = { valueTest }
            /> 
        );

        // button +1
        wrapper.find( 'button' ).at( 0 ).simulate( 'click' );
        wrapper.find( 'button' ).at( 0 ).simulate( 'click' );
        wrapper.find( 'button' ).at( 0 ).simulate( 'click' );
        wrapper.find( 'button' ).at( 0 ).simulate( 'click' );
        wrapper.find( 'button' ).at( 0 ).simulate( 'click' );

        // button Reset
        wrapper.find( 'button' ).at( 1 ).simulate( 'click' );

        
        const counterTextFromh2 = wrapper.find( 'h2' ).text();
        expect( counterTextFromh2 ).toBe( '105' );

    });

});