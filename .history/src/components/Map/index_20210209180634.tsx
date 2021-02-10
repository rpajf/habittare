import { useState } from 'react'
import Pins from './Marker'
import MapboxGl from 'react-map-gl'

const Mapbox: React.FC = () => {
  const [viewport, setViewport] = useState({
    latitude: -2.511341,
    longitude: -44.258348,
    width: '725px',
    height: '250px',
    border: 'none',
    zoom: 10
  })
  return (
    <div>
      <MapboxGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/raphael001/ckkyh3kd36ffi17rrovd998c4"
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      ></MapboxGl>
    </div>
  )
}

export default Mapbox
