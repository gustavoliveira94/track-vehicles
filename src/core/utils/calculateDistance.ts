import { Vehicle } from 'contracts/vehicles';
import { orderByDistance } from 'geolib';

interface ICalculateDistance {
  list: Vehicle[];
}

export const calculateDistance = ({ list }: ICalculateDistance) => {
  navigator.geolocation.getCurrentPosition((position) => {
    localStorage.setItem('latitude', String(position.coords.latitude));
    localStorage.setItem('longitude', String(position.coords.longitude));
  });

  const newList = list.map((vehicle) => {
    return {
      ...vehicle,
      latitude: vehicle.coordinates.latitude,
      longitude: vehicle.coordinates.longitude,
    };
  });

  const myLatitude = localStorage.getItem('latitude');
  const myLongitude = localStorage.getItem('longitude');

  if (!myLatitude && !myLongitude) {
    return [];
  }

  const result = orderByDistance(
    {
      latitude: myLatitude!,
      longitude: myLongitude!,
    },
    newList,
  );

  return result as unknown as Vehicle[];
};
