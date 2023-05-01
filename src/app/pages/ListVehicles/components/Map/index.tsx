/* eslint-disable camelcase */
import { icon, Marker as M } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { useVehicles } from 'core/hooks/useVehicles';

import iconUrl from 'leaflet/dist/images/marker-icon.png';

const DefaultIcon = icon({
  iconUrl,
});

M.prototype.options.icon = DefaultIcon;

export const Map: React.FC = () => {
  const { vehicles } = useVehicles();

  return vehicles.length ? (
    <MapContainer
      center={[
        Number(vehicles?.[0]?.coordinates?.latitude),
        Number(vehicles?.[0]?.coordinates?.longitude),
      ]}
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
  ) : null;
};
