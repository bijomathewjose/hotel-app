import React, { useEffect, useState } from 'react'
import Style from './Card.module.css'
import Button from '../Button/Button';

import {AiOutlineHeart,AiFillHeart,AiOutlineCloseCircle} from 'react-icons/ai';
import {MdOutlineLocationOn} from 'react-icons/md';
import {PiBuildings} from 'react-icons/pi';
import {IoBedOutline,IoMoveOutline} from 'react-icons/io5';
import {LiaBathSolid} from 'react-icons/lia';

import { useNavigate } from 'react-router-dom';

import Tag from '../InfoTag/Tag';
const hotelTypeCustomStyle={
    background: '#fff',
    color: '#3739E4',
    padding: '10px 15px',
    width:'fit-content',
    height: 'fit-content',
    cursor: 'default',
}
const likeCustomStyle={
    aspectRatio: '1',
    padding: '11.5px',
    cursor: 'pointer',
}
const ReadMoreStyle={
  backgroundColor: 'transparent',
  border:'1px solid #3739E4',
  color: '#3739E4',
  width: 'fit-content', 
  fontWeight: '700',
}
const Card = ({hotel,onClose}) => {

    return (
      <div className={Style.Card}>
        {onClose && <div className={Style.close}> 
        <Button onClick={onClose} customStyles={
          {...hotelTypeCustomStyle,...likeCustomStyle}}
          ><AiOutlineCloseCircle size={20}/></Button>
        </div>}
        <ImageContainer hotel={hotel}/>
        <div className={Style.address}>
          <MdOutlineLocationOn size={16}/><h3>{hotel.address}</h3>
        </div>
        <div className={Style.location}>{hotel.location}  </div>
        <InfoTags hotel={hotel}/>
        <PriceAndButton hotel={hotel}/>
      </div>
    );
  };

  export default Card;

const ImageContainer=({hotel})=>{
  const [liked,setLiked]=useState(false)
  useEffect(()=>{
      isHotelLiked(hotel.id,setLiked)
  },[])

  const onLike=()=>{
    setLiked(like=>{
      addRemoveLikedHotel(hotel.id)
      return !like
    })
  }
  return(
    <div className={Style.ImageContainer} style={{backgroundImage: `url(${hotel.imageUrl})`}}>
            <Button customStyles={hotelTypeCustomStyle}>{hotel.type}</Button>
            <Button onClick={onLike} customStyles={{...hotelTypeCustomStyle,...likeCustomStyle}}>
                {liked?<AiFillHeart/>:<AiOutlineHeart/>}
            </Button>
        </div>
  )
}

const InfoTags=({hotel})=>{
    return(
        <div className={Style.infoTags}>
            <Tag>
              <PiBuildings size={16}/>
              {hotel.rooms} Room</Tag>
            <Tag>
              <IoBedOutline/>
              {hotel.beds} Bed
            </Tag>
            <Tag>
              <LiaBathSolid/>
              {hotel.baths} Bath
            </Tag>
            <Tag>
              <IoMoveOutline/>
              {hotel.sqft} sft
            </Tag>
        </div>
    )
}

const PriceAndButton=({hotel})=>{
  const navigate=useNavigate()
  const onReadMore=()=>{
      navigate(`/property/${hotel.id}`)
  }
  return(
    <div className={Style.price}>
    <div className={Style.priceTag}><h3>${hotel.price}</h3>/month</div>
    {window.location.pathname==='/' && <Button customStyles={ReadMoreStyle} onClick={onReadMore}>Read More</Button>}
  </div>
  )
}


function isHotelLiked(id,setLiked){
  const likedHotels=localStorage.getItem('likedHotels')
  if(likedHotels){
    const likedHotelsArray=JSON.parse(likedHotels)
    if(likedHotelsArray.includes(id))setLiked(true)
  }
}


function addRemoveLikedHotel(id){ 
  const likeList=localStorage.getItem('likedHotels')
  if(likeList){  
    const likedHotels=JSON.parse(likeList)
    console.log('includes' ,likedHotels.includes(id))
    const updated=likedHotels.includes(id)?likedHotels.filter(item=>{
      console.log(item,id,item!==id)
      return  item!==id
    }):[...likedHotels,id]
    console.log(updated)
    localStorage.setItem('likedHotels',JSON.stringify(updated))
  }
  else localStorage.setItem('likedHotels',JSON.stringify([id]))
  
}