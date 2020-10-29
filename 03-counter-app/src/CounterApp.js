import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value } ) => {

    //! HOOKS ( Son funciones. )
    const [ counter, setCounter ] = useState( 0 ); // retorna [ value, function ]


    const handleAdd = ( e ) => {

        // setCounter( counter++ ); // NO podemos mutar el state de esta forma.


        /** IMPORTANTE:
         * Cuando usamos el setCounter le decimos a React que el counter cambió.
         * Por eso se va a renderizar el componente
         */
        // #1
        setCounter( counter + 1 );

        // #2
        // setCounter( ( c ) => c + 1 );
    }

    return (

        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
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