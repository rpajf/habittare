import React, { useState } from 'react'

import MapboxGl, { Source, Layer, Marker } from 'react-map-gl'

const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-122.4, 37.8] }
    }
  ]
}
const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`

const SIZE = 18
const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf'
  }
}

// function App() {
//   const [viewport, setViewport] = React.useState({
//     longitude: -122.45,
//     latitude: 37.78,
//     zoom: 14
//   })
//   return (
//     <ReactMapGL
//       {...viewport}
//       width="100vw"
//       height="100vh"
//       onViewportChange={setViewport}
//     >
//       <Source id="my-data" type="geojson" data={geojson}>
//         <Layer {...layerStyle} />
//       </Source>
//     </ReactMapGL>
//   )
// }

interface PropertyMapProps {
  lat: number
  long: number
  showExactly: boolean
}

const AboutUsMap: React.FC<PropertyMapProps> = ({ lat, long, showExactly }) => {
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: long,
    width: '100%',
    height: '300px',
    border: 'none',
    zoom: 15
  })

  return (
    <div>
      <MapboxGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
        mapStyle="mapbox://styles/artharaujo/ckmuqs4y33a8s17myolwxaems"
      >
        {showExactly && (
          <Marker longitude={long} latitude={lat}>
            <svg
              height={SIZE}
              viewBox="0 0 24 24"
              style={{
                cursor: 'pointer',
                fill: '#d00',
                stroke: 'none',
                transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
              }}
            >
              <path d={ICON} />
            </svg>
          </Marker>
        )}
      </MapboxGl>
    </div>
  )
}
export default AboutUsMap
