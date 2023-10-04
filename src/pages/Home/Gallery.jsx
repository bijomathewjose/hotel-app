import React from 'react'
import Card from '../../components/PropertyCard/Card'
import Style from './Home.module.css'
const Gallery = ({hotels}) => {
    
    return (
        <div className={Style.galleryContainer}>
        {
            hotels.map((hotel,index)=>(<Card key={index} hotel={hotel}/> ))
        }
        </div>
    )
}

export default Gallery