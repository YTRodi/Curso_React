// Regla de estilos: Cada componente debe escribirse con el UpperCamelCase
import React, { Fragment } from 'react';

// Functional Components ( Regresa un component de HTML )
const PrimeraApp = () => {

    const saludo = 'Hola Mundo desde variable';
    const persona = {
        
        nombre: 'Peter',
        apellido: 'Parker',
        edad: 27

    }

    //! Tenemos que retornar todos los elementos HTML en un elemento que los contenga a todos
    
    return (

        // Distintas formas de retornar fragments
        // #2 Usamos <> ( No hace falta importar nada. )
        <>
            <h1>Hola Mundo</h1>
            <h2> { saludo } </h2>
            <p>Mi primera aplicación</p>

            {/* COMO IMPRIMIMOS OBJETOS? con JSON.stringify... */}
            {/* <pre> {  JSON.stringify( persona, null, 3 ) } </pre>  */}
            
        </>

        // #1 Usamos el componente <Fragment> para no crear divs que no tengan ninguna utilidad.
        // <Fragment>
        //     <h1>Hola Mundo</h1>
        //     <p>Mi primera aplicación</p>
        // </Fragment>
        
    ); 

    
    // return (

    //     <div>
    //         <h1>Hola Mundo</h1>
    //         <p>Mi primera aplicación</p>
    //     </div>

    // ); 

};

export default PrimeraApp;