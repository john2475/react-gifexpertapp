import React from 'react'

// export const GifGridItem = ( props ) => {
    // console.log(props);

export const GifGridItem = ( {title, url} ) => {
    
    // console.log(id, title, img);

    return (
        <div className="card animate__animated animate__fadeInDown">
            <img src = {url} alt = { title } />
            <p> {title} </p>
        </div>
    )
}
