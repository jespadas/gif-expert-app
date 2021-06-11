import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);
    /* 
        // Usando .concat
        /* const handleAdd = () => {
            setCategories(categories => categories.concat("New category " + Math.random(1)));
        }

        // Usando Spread ...
        const handleAdd = () => {
        setCategories(categories => [...categories, "New category "]);
        } 
    */

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />



            <ul>
                {
                    categories.map(category => (
                        < GifGrid
                            key={category}
                            category={category}
                        />
                    )
                    )
                }
            </ul>

        </>
    )
}