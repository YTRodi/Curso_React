import CounterApp from "../CounterApp";
import { shallow } from "enzyme";

describe('Pruebas para el componente <CounterApp />', () => {
    
    test('Debe de mostrar <CounterApp /> correctamente y sus valores por defecto', () => {
        
        const wrapper = shallow( <CounterApp /> );

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

});