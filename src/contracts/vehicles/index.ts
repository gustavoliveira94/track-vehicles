type Coordinates = {
  latitude: number;
  longitude: number;
};

export type Vehicle = {
  identifier: string;
  license_plate: string;
  tracker_serial_number: string;
  status: string;
  coordinates: Coordinates;
};
