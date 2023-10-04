import React from 'react'
import Style from './Property.module.css'
import Card from '../../components/PropertyCard/Card'
import Data from '../../data.json'
import { useNavigate, useParams } from 'react-router-dom'
const Property = () => {
  const navigate=useNavigate()
  const {id}=useParams()
  const hotel = Data.hotels.find(item=>String(item.id)===id)
  return (
<div className={Style.container}>
<Card hotel={hotel||{}} onClose={()=>navigate(-1)}/>

</div>
    )
}

export default Property