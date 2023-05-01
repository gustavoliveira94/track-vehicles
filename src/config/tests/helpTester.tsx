import { render as renderComponent } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'core/store';

export const render = (Component: JSX.Element) => {
  return {
    ...renderComponent(<Provider store={store}>{Component}</Provider>),
  };
};
