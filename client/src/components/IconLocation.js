import L from 'leaflet'

const IconLocation = L.icon({
    iconUrl: require('../assets/marker-icon.svg'),
    iconRetinaUrl: require('../assets/marker-icon.svg'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon",
})

export default IconLocation