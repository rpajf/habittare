import { useState } from 'react'

import MapboxGl from 'react-map-gl'

const Mapbox = () => {
  const [viewport, setViewport] = useState({
    latitude: -2.511341,
    longitude: -44.258348,
    width: '725px',
    height: '250px',
    border: ""
    zoom: 10
  })
  return (
    <div>
      <MapboxGl
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoicmFwaGFlbDAwMSIsImEiOiJja2tva3p5ZGwwZHo3MnBxZDFidDZxZmtoIn0.9UrwKW426t_sDOYtZQPUUQ"
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      ></MapboxGl>
    </div>
  )
}

export default Mapbox
