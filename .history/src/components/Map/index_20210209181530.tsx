import { useState } from 'react'
import Pins from './Marker'
import MapboxGl from 'react-map-gl'

const Mapbox: React.FC = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  function success(pos) {
    const crd = pos.coords

    console.log('Your current position is:')
    const latitude = `Latitude : ${crd.latitude}`
    const longitude =`Longitude: ${crd.longitude}`
    console.log(`More or less ${crd.accuracy} meters.`)
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }

  navigator.geolocation.getCurrentPosition(success, error, options)
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
