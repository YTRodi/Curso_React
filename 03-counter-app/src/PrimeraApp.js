// Regla de estilos: Cada componente debe escribirse con el UpperCamelCase
import React, { Fragment } from 'react';

// Functional Components ( Regresa un component de HTML )
const PrimeraApp = ( { saludo } ) => {

    // Usamos destructuración para los elementos. ( properties/props )
    // console.log(props);
    
    return (

        <>
            <h1> { saludo } </h1>
            <p>Mi primera aplicación</p>            
        </>
       
    ); 

};

export default PrimeraApp;