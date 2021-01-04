import React, { useEffect, useState } from 'react';
import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    //! ESTOS EFECTOS VAN A ESTAR PENDIENTES DE:

    // Nada, solamente se ejecuta una vez.
    useEffect( () => {
        console.log('hey');
    }, [] );

    // Del formulario
    useEffect( () => {
        console.log('formState cambió!');
    }, [ formState ] );

    // Del email
    useEffect( () => {
        console.log('email cambió!');
    }, [ email ] );

    // Lo manejamos a través del 'name'
    const handleInputChange = ( { target } ) => {

        setFormState({
            ...formState,
            [ target.name ] : target.value
            // Hacemos que lo que venga en esta propiedad sea lo que venga en este obj
        })

    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                >
                </input>

                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                >
                </input>
            </div>
        </>
    )
}
