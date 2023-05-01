import { useVehicles } from 'core/hooks/useVehicles';
import * as Styles from './styles';

export const List: React.FC = () => {
  const { vehicles } = useVehicles();

  console.log(vehicles);

  return (
    <Styles.Wrapper>
      <Styles.Title>
        <h3>Veículos</h3>
      </Styles.Title>
      <Styles.List />
    </Styles.Wrapper>
  );
};
