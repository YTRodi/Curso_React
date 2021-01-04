import React from 'react'

// Va regresar la forma memorizada de mi componenete
// SOLO se dispara si las properties CAMBIAN, es decir, el componente
// solamente se va a volver a renderizar cuando las properties cambien.
// Caso contrario, usa la forma memorizada.
export const Small = React.memo(( { value } ) => {

    console.log('Me volví a llamar :(');

    return (
        <small>{ value } </small>
    )
});
