import React, { useState } from 'react'
import AddCategory from './components/AddCategory';

const GifExpertApp = (  ) => {

    const categoriesDefault = [ 'Kimetsu no Yaiba', 'Shingeki no kyojin', 'Made in abyss' ];

    const [ categories, setCategories ] = useState( categoriesDefault );

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
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
