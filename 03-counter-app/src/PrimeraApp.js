import React from 'react';
import PropTypes from "prop-types";

// Functional Components ( Regresa un component de HTML )
const PrimeraApp = ( { saludo, subtitulo } ) => {
    
    return (

        <>
            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>            
        </>
       
    ); 

};

// Si alguien quiere usar este componente, tiene que proveer la propiedad 'saludo'.
PrimeraApp.propTypes = {

    // Le digo que el saludo es un string y es obligatorio
    saludo: PropTypes.string.isRequired

}

// Si queremos que algunas propiedades traigan por default
PrimeraApp.defaultProps = {

    subtitulo: 'Soy un subtitulo'

}


export default PrimeraApp;