import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';
import '../02-useEffect/effects.css';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // UNA FUNCIÓN QUE NO CAMBIA
    const incrementar = useCallback(( num ) => {

        // setValor( valor + num );

        // Para volver a tener una referencia al valor que ya tenía uso un arfn
        setValor( valorAnterior => valorAnterior + num );

    }, [ setValor ]);


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
