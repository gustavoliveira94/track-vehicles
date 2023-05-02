import { createServer, Model } from 'miragejs';

import { Vehicle } from 'contracts/vehicles';

export function makeServer({ environment = 'test' } = {}) {
  return createServer({
    environment,

    models: {
      vehicle: Model.extend<Partial<Vehicle>>({}),
    },

    routes() {
      this.namespace = 'api';

      this.get('/vehicles', (schema) => {
        return schema.all('vehicle');
      });

      this.post('/vehicle', (schema, request) => {
        const { data } = JSON.parse(request.requestBody);
        return schema.create('vehicle', data);
      });
    },

    seeds(server) {
      server.create('vehicle', {
        identifier: 'Vehicle 1',
        license_plate: 'AAA9A99',
        tracker_serial_number: 'A0000000',
        status: 'Em funcionamento',
        coordinates: {
          latitude: -25.43247,
          longitude: -49.27845,
        },
      } as object);
    },
  });
}
