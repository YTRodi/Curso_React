import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";

// Hay que decirle a JEST que sólo me interesa lo que va a retornar (usamos un mock)
jest.mock( "../../../hooks/useFetch" );
jest.mock( "../../../hooks/useCounter" );

describe('Pruebas en <MultipleCustomHooks />', () => {

    useCounter.mockReturnValue({
        counter: 1,
        increment: () => {}
    });
    
    test('Debe de mostrarse correctamente', () => {
        
        // Necesito proveer alguna info por DEFECTO cuando se llame al useFetch...
        useFetch.mockReturnValue({
            data:null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de mostrar la información (cuando se tiene algo)', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Maggie',
                quote: 'Grrrr Guau'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );
        // console.log(wrapper.html());

        expect( wrapper.find( '.alert' ).exists() ).toBe( false ); // No debería de existir
        expect( wrapper.find( '.mb-0' ).text().trim() ).toBe( 'Grrrr Guau' ); 
        expect( wrapper.find( 'footer' ).text().trim() ).toBe( 'Maggie' ); 

    });

});