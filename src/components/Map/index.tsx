import { useState } from 'react'
import Pins from './Marker'
import CITIES from './Info/cities.json'
import CityInfo from './Info/info'
import MapboxGl, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl'
const geolocateStyle = {
  top: 0,
  left: 0,
  padding: '10px'
}

const fullscreenControlStyle = {
  top: 0,
  left: 0,
  padding: '10px'
}

const navStyle = {
  top: 72,
  left: 0,
  padding: '10px'
}

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: '10px'
}

const Mapbox: React.FC = () => {
  const [viewport, setViewport] = useState({
    latitude: 40,
    longitude: -100,
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
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      >
        <Pins data={CITIES} onClick={setPopupInfo} />
        {popupInfo && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={setPopupInfo}
          >
            <CityInfo info={popupInfo} />
          </Popup>
        )}
        <GeolocateControl style={geolocateStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </MapboxGl>
    </div>
  )
}

export default Mapbox
