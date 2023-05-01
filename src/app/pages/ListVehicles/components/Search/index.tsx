import { useSearchVehicles } from 'core/hooks/useSearchVehicles';

import * as Styles from './styles';

export const Search: React.FC = () => {
  const { setSearchVehicles } = useSearchVehicles();

  return (
    <Styles.Wrapper>
      <input
        data-testid="input-search"
        placeholder="Procure um veículo"
        onChange={(e) => setSearchVehicles(e.target.value)}
      />
    </Styles.Wrapper>
  );
};
