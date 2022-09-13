import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import { URL_MARKER_DEFAULT, CITY, POINT } from 'const';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const Map = () => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, CITY);

  useEffect(() => {
    if (map) {
      leaflet
        .marker({
          lat: POINT.lat,
          lng: POINT.lng,
        }, {
          icon: defaultCustomIcon,
        })
        .addTo(map)
        .bindPopup(POINT.title);
    }
  }, [map]);

  return (
    <div
      style={{width: '649px',
        height: '336px'}}
      ref={mapRef}
    >
    </div>
  );
};

export default Map;
