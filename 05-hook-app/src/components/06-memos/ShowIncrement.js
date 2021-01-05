import React from 'react'

// Usamos React.memo para que memorice este componente si los argumentos no cambian.
export const ShowIncrement = React.memo(( { increment } ) => {

    console.log('Me volví a generar :c');

    return (
        <button
            className="btn btn-primary"
            onClick={ () => {
                increment( 5 );
            }}
        >
            Incrementar
        </button>
    )
}
)