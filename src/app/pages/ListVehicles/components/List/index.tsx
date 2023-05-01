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
        {mapVehicles.map(({ identifier, license_plate }) => {
          return (
            <Styles.Item key={license_plate}>
              <Styles.Icon>
                <FontAwesomeIcon icon={faTruck} size="2x" />
              </Styles.Icon>
              <Styles.Infos>
                <p>{identifier}</p>
                <p>{license_plate}</p>
              </Styles.Infos>
            </Styles.Item>
          );
        })}
      </Styles.List>
    </Styles.Wrapper>
  );
};
