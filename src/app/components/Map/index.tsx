import { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export const Map: React.FC = () => {
  const [location, setLocation] = useState<LatLngExpression>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
      setLocation([position.coords.latitude, position.coords.longitude]),
    );
  }, []);

  return location ? (
    <MapContainer
      center={location}
      zoom={50}
      scrollWheelZoom={false}
      style={{ width: 'calc(100% - 300px)' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-22.9244928, -43.5552256]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  ) : null;
};
