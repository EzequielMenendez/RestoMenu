import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Markers from '../Marker/Markers'

const MapRegister = () =>{
    return (
        <div>
            <MapContainer center={{lat: '51.52437', lng: '13.41053'}} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Markers />
            </MapContainer>
        </div>
    )
}

export default MapRegister