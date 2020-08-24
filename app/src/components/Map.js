// Libraries
import React, {useState} from 'react';
import ReactMapGL, {Source, Layer, NavigationControl} from "react-map-gl";


// Styles
import './Map.css';

// Data
import STL_Counties from '../data/geojson/STL_MSA_Counties.geojson';
import MO_IL_Counties from '../data/geojson/MO_IL_Counties.geojson';


const dataLayer = {
    id: 'data',
    type: 'fill',
    paint: {
      'fill-color': {
        property: 'count',
        stops: [
          [0, '#3288bd'],
          [1, '#66c2a5'],
          [2, '#abdda4'],
          [3, '#e6f598'],
          [4, '#ffffbf'],
          [5, '#fee08b'],
          [6, '#fdae61'],
          [7, '#f46d43'],
          [8, '#d53e4f']
        ]
      },
      'fill-opacity': 0.2
    }
  };

  
const Map = (props) => {

    const [viewport, setViewport] = useState({
        latitude: 38.6264178,
        longitude: -90.1998378,
        width: "66vw",
        height: "60vh",
        zoom: 5,
        pitch: 30,
    });

    const [settings, setSettings] = useState({
      doubleClickZoom: false,
      minZoom: 5,
      maxZoom: 20,
      minPitch: 30,
      maxPitch: 30
    });

    return (
        <section id="map-section">
          <ReactMapGL {...viewport} {...settings} className="map" transitionDuration={700} mapStyle="mapbox://styles/mapbox/streets-v11" onViewportChange={viewport => setViewport(viewport)} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>
              <Source type="geojson" data={STL_Counties}>
                  <Layer {...dataLayer} />
              </Source>
              <div style={{position: 'absolute', right: 0}}>
                <NavigationControl />
              </div>
          </ReactMapGL>
        </section>
    );
}


export default Map;