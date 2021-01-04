import React, { useEffect, useState } from 'react'

export const Message = () => {
    
    const [coords, setCoords] = useState( { x:0, y: 0 } );
    const { x, y } = coords;

    // Se va a mostrar cuando el componente es mostrado una sola vez.
    useEffect(() => {

        // Efecto
        console.log('Componente montado')

        const mouseMove = ( e ) => {
            const coords = { x: e.x, y: e.y };
            setCoords( coords )
        }

        window.addEventListener( 'mousemove', mouseMove);

        return () => {
            // cleanup
            console.log('Componente desmontado');

            // Lo remuevo porque sino me comeria toda la memoria RAM
            window.removeEventListener( 'mousemove', mouseMove );
        }
    }, []);

    return (
        <div>
            <h3>Surpriseeeee!!!!!!!!🎉</h3>
            <p>
                x: { x }
            </p>
            <p>
                y: { y } 
            </p>
        </div>
    )
}
