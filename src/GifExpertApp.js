import React, { useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['Thundercats', 'Transformers', 'Ghostbusters'];
    const [categories, setCategories] = useState(['']);

    // const handleAdd = () => {
    //     // setCategories ( [...categories,'Tigersharks']);
    //     setCategories ( cats => [...categories, 'Tigersharks']);
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            {/* Aqui sucede la comunicación entre componentes por medio de la función setCategories que se envía por referencia. */}
            <AddCategory setCategories = {setCategories} />
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key = {category}
                            category = {category}
                        />
                    ))
                }
            </ol>

        </div>
    )
}
