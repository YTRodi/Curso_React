// import React from 'react'; Ya no hace falta...
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en el componente < PrimeraApp />', () => {
    
    test('Debe de mostrar el mensaje "Ohayo!"', () => {
        
        const saludoTest = 'Dattebayo!';
        // const wrapper = render( <PrimeraApp saludo= { saludoTest }/> );// Es el producto renderizado de mi componente.
        const { getByText } = render( <PrimeraApp saludo= { saludoTest }/> );// Es el producto renderizado de mi componente.

        // Agregamos el archivo setupTest.js en la carpeta src
        // expect( wrapper.getByText( saludoTest ) ).toBeInTheDocument();
        expect( getByText( saludoTest ) ).toBeInTheDocument();

    });

});