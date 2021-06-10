import React, { useState } from 'react';

import { AddCategory } from './AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // Usando .concat
    /* const handleAdd = () => {
        setCategories(categories => categories.concat("New category " + Math.random(1)));
    } */

    // Usando Spread ...
    /* const handleAdd = () => {
        setCategories(categories => [...categories, "New category "]);
    } */

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory />
            <hr />



            <ul>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>
                })}
            </ul>

        </>
    )
}