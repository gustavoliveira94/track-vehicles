import * as yup from 'yup';

export const validationRegisterForm = yup.object({
  identifier: yup.string().required('Identificador é um campo obrigatório!'),
  license_plate: yup.string().required('Placa é um campo obrigatório!'),
  tracker_serial_number: yup
    .string()
    .required('Número de série é um campo obrigatório!'),
  model: yup.string().required('Modelo é um campo obrigatório!'),
  status: yup.string().required('Status é um campo obrigatório!'),
  coordinates: yup.object({
    latitude: yup.string().required('Latitude é um campo obrigatório!'),
    longitude: yup.string().required('Longitude é um campo obrigatório!'),
  }),
});
