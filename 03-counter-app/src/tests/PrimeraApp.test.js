import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en el componente < PrimeraApp />', () => {
    
    // Pruebas con enzyme
    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        
        const saludoTest = 'Ohayo';

        // shallow es parecido al render, pero nos permite simular clicks, document.queryselector y otras cosas..
        const wrapper = shallow( <PrimeraApp saludo={ saludoTest }/> );

        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        
        const saludoTest = 'Ohayo';
        const subtituloTest = 'Soy un subtitulo';

        const wrapper = shallow(
             <PrimeraApp 
                saludo = { saludoTest }
                subtitulo = { subtituloTest }
             /> 
        );

        // find() = document.querySelector('#id' o '.class' o etiquetas en general);
        const textoParrafo = wrapper.find( 'p' ).text();
        // console.log(textoParrafo);


        expect( textoParrafo ).toBe( subtituloTest );

        expect( wrapper ).toMatchSnapshot();

    });

});