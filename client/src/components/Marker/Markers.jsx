import { Marker } from "react-leaflet"
import IconLocation from "../IconLocation"

const Markers = () =>{
    return(
        <Marker position={{lat: '51.52437', lng: '13.41053'}} icon={IconLocation}/>
    )
}

export default Markers