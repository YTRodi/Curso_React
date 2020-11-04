import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value = 10 } ) => {

    //! HOOKS ( Son funciones. )

    // counter = valor del estado actual.
    // setCounter = función que permite actualizarlo.
    const [ counter, setCounter ] = useState( value );
    
    const handleAdd = () => { setCounter( counter + 1 ); }
    const handleSubtract = () => { setCounter( counter - 1 ); }
    const handleReset = () => { setCounter( value ); }

    return (

        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </>

    );

};

CounterApp.propTypes = {

    value: PropTypes.number
    
}

// CounterApp.defaultProps = {

//     value: 100

// }

export default CounterApp;