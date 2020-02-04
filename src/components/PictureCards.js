import React from 'react'

export const  PictureCards = ({picture, showImage}) => {

    const handleClick = (event) => {
        showImage(picture)
        

    }
    return (
        <div className ="card" onClick={handleClick} >
             <h2>{picture.title}</h2>
            <p>{picture.explanation}</p>   
                 
            
        </div>
    )
}
