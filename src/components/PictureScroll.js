import React from 'react'
import {PictureCards} from './PictureCards'

export const PictureScroll = ({pictures, showImage}) => {


    const pictureCards  = pictures.map(picture=>{
        return <PictureCards
        key= {picture.id} 
        picture={picture}
        showImage={showImage}
        />
    })

    return (
        <div id ="scroll">
            {pictureCards}
           
        </div>
    )
}
