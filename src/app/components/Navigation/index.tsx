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
          <NavLink to="/register-vehicles">
            <FontAwesomeIcon icon={faPlus} />
          </NavLink>
        );
      }
      case '/register-vehicles': {
        return (
          <NavLink to="/">
            <FontAwesomeIcon icon={faList} />
          </NavLink>
        );
      }
      default: {
        return null;
      }
    }
  };

  return <Styles.Wrapper>{type()}</Styles.Wrapper>;
};
