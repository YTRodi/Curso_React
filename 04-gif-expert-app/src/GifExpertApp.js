import React, { useState } from 'react'
import AddCategory from './components/AddCategory';

const GifExpertApp = (  ) => {

    const categoriesDefault = [ 'Kimetsu no Yaiba', 'Shingeki no kyojin', 'Made in abyss' ];

    const [ categories, setCategories ] = useState( categoriesDefault );

    // const handleAdd = () => { 
        
    //     // Con esta función le digo a React que el estado del [] ( categoriesDefault ) cambió y se necesita renderizar de nuevo el componente
    //     setCategories( [ ...categories, 'Naruto' ] );

    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />

            <ol>
                { 
                    // El key NO PUEDE ser el índice y TIENE QUE SER único.
                    categories.map( category => {
                        return <li key={ category }>
                                    { category }
                               </li>
                    })              
                }
            </ol>
        </>
    )
}

export default GifExpertApp
