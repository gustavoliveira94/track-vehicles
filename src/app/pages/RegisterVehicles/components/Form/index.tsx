import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useFormik } from 'formik';

import { useToast } from 'core/hooks/useToast';
import { Vehicle } from 'contracts/vehicles';
import { useCreateVehicle } from 'core/hooks/useCreateVehicle';
import { validationRegisterForm } from 'core/utils/validations/registerForm';

import * as Styles from './styles';

export const Form: React.FC = () => {
  const { success, error } = useToast();

  const { createVehicle } = useCreateVehicle();

  const initialValues: Vehicle = {
    identifier: '',
    license_plate: '',
    tracker_serial_number: '',
    status: '' as Vehicle['status'],
    coordinates: {
      latitude: '',
      longitude: '',
    } as unknown as Vehicle['coordinates'],
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationRegisterForm,
    onSubmit: async (values, { resetForm }) => {
      try {
        await createVehicle(values);
        success({ message: 'Cadastro realizado com sucesso!' });
        resetForm();
      } catch (e) {
        return error({ message: 'Ocorreu um erro ao realizar o cadastro!' });
      }
    },
  });

  return (
    <Styles.Wrapper>
      <h3>CADASTRAR VEÍCULOS</h3>
      <form onSubmit={formik.handleSubmit}>
        <Styles.FormWrapper>
          <Styles.Divide>
            <hr />
            <small>Dados do veículo</small>
          </Styles.Divide>
          <Styles.TextField
            data-testid="identifier"
            id="identifier"
            name="identifier"
            variant="filled"
            label="Identificador"
            value={formik.values.identifier}
            onChange={formik.handleChange}
            error={
              formik.touched.identifier && Boolean(formik.errors.identifier)
            }
            helperText={formik.touched.identifier && formik.errors.identifier}
          />

          <Styles.TextField
            data-testid="license_plate"
            id="license_plate"
            name="license_plate"
            variant="filled"
            label="Placa"
            value={formik.values.license_plate}
            onChange={formik.handleChange}
            error={
              formik.touched.license_plate &&
              Boolean(formik.errors.license_plate)
            }
            helperText={
              formik.touched.license_plate && formik.errors.license_plate
            }
          />

          <Styles.TextField
            data-testid="tracker_serial_number"
            id="tracker_serial_number"
            name="tracker_serial_number"
            variant="filled"
            label="Número de série"
            value={formik.values.tracker_serial_number}
            onChange={formik.handleChange}
            error={
              formik.touched.tracker_serial_number &&
              Boolean(formik.errors.tracker_serial_number)
            }
            helperText={
              formik.touched.tracker_serial_number &&
              formik.errors.tracker_serial_number
            }
          />

          <FormControl variant="filled" fullWidth>
            <InputLabel
              error={formik.touched.status && Boolean(formik.errors.status)}
              id="status"
            >
              Status
            </InputLabel>
            <Select
              labelId="status"
              id="status"
              label="Status"
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
              error={formik.touched.status && Boolean(formik.errors.status)}
            >
              <MenuItem value="Em funcionamento">Em funcionamento</MenuItem>
              <MenuItem value="Com defeito">Com defeito</MenuItem>
            </Select>
            {formik.touched.status && (
              <FormHelperText error>{formik.errors.status}</FormHelperText>
            )}
          </FormControl>

          <Styles.Divide>
            <hr />
            <small>Coordenadas do veículo</small>
          </Styles.Divide>

          <Styles.TextField
            data-testid="coordinates.latitude"
            id="coordinates.latitude"
            name="coordinates.latitude"
            variant="filled"
            label="Latitude"
            value={formik.values.coordinates.latitude}
            onChange={formik.handleChange}
            error={
              formik.touched.coordinates?.latitude &&
              Boolean(formik.errors.coordinates?.latitude)
            }
            helperText={
              formik.touched.coordinates?.latitude &&
              formik.errors.coordinates?.latitude
            }
          />

          <Styles.TextField
            data-testid="coordinates.longitude"
            id="coordinates.longitude"
            name="coordinates.longitude"
            variant="filled"
            label="Longitude"
            value={formik.values.coordinates.longitude}
            onChange={formik.handleChange}
            error={
              formik.touched.coordinates?.longitude &&
              Boolean(formik.errors.coordinates?.longitude)
            }
            helperText={
              formik.touched.coordinates?.longitude &&
              formik.errors.coordinates?.longitude
            }
          />

          <Button
            size="large"
            variant="contained"
            type="submit"
            data-testid="button-register"
          >
            CADASTRAR
          </Button>
        </Styles.FormWrapper>
      </form>
    </Styles.Wrapper>
  );
};
