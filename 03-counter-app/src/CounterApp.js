import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value } ) => {

    const handleAdd = ( e ) => { console.log( e ); }

    return (

        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>

            {/* El argumento del evento onClick podemos pasarlos de dos formas */}

            {/* #1 - Referencia a una función */}
            {/* <button onClick={ ( e ) => { handleAdd( e ) } }>+1</button> */}

            {/* #2 - Obviamos el parámetro del evento onClick */}
            <button onClick={ handleAdd }>+1</button>

        </>

    );

};

CounterApp.propTypes = {

    value: PropTypes.number
    
}

CounterApp.defaultProps = {

    value: 1000

}

export default CounterApp;