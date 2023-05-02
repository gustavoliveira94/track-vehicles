/* eslint-disable default-case */
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faList } from '@fortawesome/free-solid-svg-icons';

import * as Styles from './styles';

export const Navigation: React.FC = () => {
  const { pathname } = useLocation();

  const type = () => {
    switch (pathname) {
      case '/': {
        return (
          <NavLink to="/register-vehicles" data-testid="add-button">
            <FontAwesomeIcon icon={faPlus} />
          </NavLink>
        );
      }
      case '/register-vehicles': {
        return (
          <NavLink to="/" data-testid="list-button">
            <FontAwesomeIcon icon={faList} />
          </NavLink>
        );
      }
    }
  };

  return <Styles.Wrapper>{type()}</Styles.Wrapper>;
};
