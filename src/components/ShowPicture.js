import React from 'react'


export const ShowPicture =({hdurl, resetState})=> {
    const handleClick = () => {
        resetState()
        
    }

    return (
        <img onClick={handleClick} src={hdurl} alt="picture"/>
    )
}