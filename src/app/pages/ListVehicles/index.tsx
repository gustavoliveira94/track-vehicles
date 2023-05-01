import { Map } from 'app/components/Map';

import { List } from 'app/components/List';

import * as Styles from './styles';

export const ListVehicles: React.FC = () => {
  return (
    <Styles.Wrapper>
      <List />
      <Map />
    </Styles.Wrapper>
  );
};
