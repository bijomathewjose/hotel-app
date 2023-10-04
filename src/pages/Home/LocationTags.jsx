import { useEffect, useId } from "react"
import { useDispatch, useSelector } from "react-redux"
import Style from './Home.module.css'
import Button from "../../components/Button/Button"
import { setLocationFilter } from "../../redux/propertySlice"
const  customStyles={
    width:'100px'
}
const selectCustomStyles={
    background: '#3738E4',
    color:'#fff',
    width:'100px'
}

const LocationTags=()=>{
    const locations=[{id:useId(),name:'New York'},{id:useId(),name:'Mumbai'},{id:useId(),name:'London'},{id:useId(),name:'Paris'}]
    
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(setLocationFilter(locations[0]))
    },[])
    
    const selectedLocation=useSelector(state=>state.propertyReducer.locationFilter)
    
    
    const onLocationClick=(e)=>{
        const filtered=locations.find(location=>location.id===e.target.id)
        dispatch(setLocationFilter(filtered))
    }
    
    return (
        <div className={Style.tagContainer}>
            {locations.map((location,index)=>(
            <Button
            id={location.id} 
            onClick={onLocationClick} 
            customStyles={selectedLocation.id===location.id?selectCustomStyles:customStyles} 
            key={location.id}>
                {location.name}
            </Button>
            ))}
        </div>
    )
}

export default LocationTags