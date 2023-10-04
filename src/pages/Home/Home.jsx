import { useState,useId, useEffect } from 'react'
import Style from './Home.module.css'
import Button from '../../components/Button/Button'
import LocationTags from './LocationTags'
import Gallery from './Gallery'
import Data from '../../data.json'
import { useSelector } from 'react-redux'
const customStyles={
  background: '#3738E4',
  color:'#fff',
}
const Home = () => {
  const [hotels,setHotel]=useState(Data.hotels)
  
  const selectedHotel=useSelector(state=>state.propertyReducer.locationFilter)
  const filteredHotels=hotels.filter(item=> item.state.trim()===selectedHotel?.name?.trim())
  
  const [setsOfGallery,setSets]=useState(2)
  const galleries=Array.from({length:setsOfGallery},(_,index)=>index+1)||[]
  
  const showMore=()=>{
    if(setsOfGallery*3<=hotels.length) setSets((item)=>item+1)    
  }

  return (
    <div className={Style.homeContainer}>
      <HeaderSection/>
      <LocationTags/>
      {
        galleries.map((_,index)=>(
          <Gallery key={index} hotels={filteredHotels.slice(index*3,index*3+3)}/>
        ))}
      {setsOfGallery*3<=filteredHotels.length && <Button onClick={showMore} customStyles={customStyles}>
          Show More   
      </Button>}
    </div>
  )
}
export default Home

const desc=`Real estate can be bought, sold, leased, or rented, 
            and can be a valuable investment opportunity. 
            The value of real estate can be...`
const HeaderSection=()=>(
  <div className={Style.titleContainer}>
    <h1>Featured Listed Property</h1>
    <p>{desc}</p> 
  </div>
)




