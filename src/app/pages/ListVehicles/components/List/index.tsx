/* eslint-disable camelcase */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

import { useVehicles } from 'core/hooks/useVehicles';

import * as Styles from './styles';

export const List: React.FC = () => {
  const { vehicles, searchVehicles, isSearching } = useVehicles();

  const mapVehicles = isSearching ? searchVehicles : vehicles;

  return (
    <Styles.Wrapper>
      <Styles.Title>
        <h3>VEÍCULOS</h3>
      </Styles.Title>
      <Styles.List>
        {mapVehicles?.length ? (
          mapVehicles.map(({ identifier, license_plate, status }) => {
            return (
              <Styles.Item
                key={license_plate}
                data-testid="vehicle"
                title={status}
              >
                <Styles.Icon defect={status === 'Com defeito'}>
                  <FontAwesomeIcon icon={faTruck} />
                </Styles.Icon>
                <Styles.Infos>
                  <p>{identifier}</p>
                  <p>{license_plate}</p>
                </Styles.Infos>
              </Styles.Item>
            );
          })
        ) : (
          <Styles.NotFound data-testid="not-found">
            Nenhum veículo encontrado!
          </Styles.NotFound>
        )}
      </Styles.List>
    </Styles.Wrapper>
  );
};
