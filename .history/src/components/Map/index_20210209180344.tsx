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
        mapStyle="https://api.mapbox.com/styles/v1/raphael001/ckkyh3kd36ffi17rrovd998c4.html?fresh=true&title=view&access_token=pk.eyJ1IjoicmFwaGFlbDAwMSIsImEiOiJja2tva3p5ZGwwZHo3MnBxZDFidDZxZmtoIn0.9UrwKW426t_sDOYtZQPUUQ"
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      ></MapboxGl>
    </div>
  )
}

export default Mapbox
