import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

    // Va a regresar una versión memorizada de la función (setCounter en este caso)
    // Que me va a servir para mandarla como argumentos en otros lugares.
    // React va a saber que la función no va a cambiar o no ha cambiado si la dependencia ( [] ) no ha cambiado.
    const increment = useCallback( ( num ) => {
        
        // setCounter( counter + 1 );
        setCounter( c => c + num );

    }, [ setCounter ]);

    return (
        <div>
            <h1>useCallback hook! { counter }</h1>
            <hr />

            < ShowIncrement increment={ increment } />
        </div>
    )
}

// NOTAS:
// Usos principales de este hook:
/**
 * nº1: Cuando necesitamos mandar una función a un componente hijo
 * 
 * IMPORTANTE:
 * Si no mandamos la función con el useCallback, SIEMPRE se va a estar generando una nueva versión cada renderizado del componente padre. ( ESO ESTA MAL! ).
 */