import React, { useState } from 'react';
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

import '../02-useEffect/effects.css';


export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Real Example!</h1>
            <hr />
            
            { show && < MultipleCustomHooks />}

            {/* Con este botón simulamos la montura o desmontura del componente */}
            <button 
                className="btn btn-primary mt-3"
                onClick={ () => setShow( !show ) }
            >
                Show/Hide
            </button>
        </div>
    )
}
