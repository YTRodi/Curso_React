//! Agrupamos las pruebas unitarias.
describe( 'Pruebas en el archivo de demo.test.js', () => {

    test( 'Deben de ser iguales los strings', () => {
    
        // 1 - Arrange ( Inicialización )
        const msg = 'Hola Mundo';
    
        // 2 - Act ( Estímulo )
        const msg2 = `Hola Mundo!`;
        
        // 3 - Assert ( Observar comportamiento )
        expect( msg ).toBe( msg2 ); // Internamente hace un ===
    
    });

});