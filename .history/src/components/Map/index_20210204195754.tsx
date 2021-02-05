import { useState } from 'react'
import Pins from './Marker'
import CITIES from './Test/cities.json'
import MapboxGl, { Popup } from 'react-map-gl'

const Mapbox: React.FC = () => {
  const [viewport, setViewport] = useState({
    latitude: -2.511341,
    longitude: -44.258348,
    width: '725px',
    height: '250px',
    border: 'none',
    zoom: 10
  })
  const [popupInfo, setPopupInfo] = useState(null)
  return (
    <div>
      <MapboxGl
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoicmFwaGFlbDAwMSIsImEiOiJja2tva3p5ZGwwZHo3MnBxZDFidDZxZmtoIn0.9UrwKW426t_sDOYtZQPUUQ"
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      >
        <Pins data={CITIES} onClick={setPopupInfo} />
      </MapboxGl>
    </div>
  )
}

export default Mapbox
