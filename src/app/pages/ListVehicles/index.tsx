import { Map } from 'app/pages/ListVehicles/components/Map';
import { List } from 'app/pages/ListVehicles/components/List';
import { Search } from 'app/pages/ListVehicles/components/Search';

import * as Styles from './styles';

export const ListVehicles: React.FC = () => {
  return (
    <Styles.Wrapper>
      <Search />
      <List />
      <Map />
    </Styles.Wrapper>
  );
};
