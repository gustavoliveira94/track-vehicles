/* eslint-disable react/button-has-type */
/* eslint-disable camelcase */
import { icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { useVehicles } from 'core/hooks/useVehicles';

import iconUrl from 'leaflet/dist/images/marker-icon.png';

const DefaultIcon = icon({
  iconUrl,
});

export const Map: React.FC = () => {
  const { vehicles } = useVehicles();

  const latitude = localStorage.getItem('latitude');
  const longitude = localStorage.getItem('longitude');

  return (
    <MapContainer
      center={[Number(latitude), Number(longitude)]}
      zoom={50}
      scrollWheelZoom={false}
      style={{ width: 'calc(100% - 300px)' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {vehicles.length
        ? vehicles.map(({ coordinates, license_plate }) => {
            return (
              <Marker
                data-testid="vehicle-marker"
                key={license_plate}
                position={[coordinates?.latitude, coordinates?.longitude]}
                icon={DefaultIcon}
              >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            );
          })
        : null}
    </MapContainer>
  );
};
