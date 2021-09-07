import React from 'react';
// import React,{useState, useEffect} from 'react';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const {data: imgs, loading} = useFetchGifs(category); 

    return (
        <>
            <h3 className="animate__animated animate__slideInDown"> {category} </h3>

            {loading && <p className="animate__animated animate__fadeInLeft">Loading...</p>}

            <div className="card-grid">
                
                {
                    imgs.map( img => (
                        <GifGridItem 
                            key =   { img.id }
                                    { ...img }/>
                    ))
                }
 
            </div>
        </>
        
    )
}
