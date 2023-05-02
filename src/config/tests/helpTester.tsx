import { Suspense } from 'react';
import { render as renderComponent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Navigation } from 'app/components/Navigation';

import { store } from 'core/store';

export const render = (component: JSX.Element) => {
  return {
    ...renderComponent(
      <Suspense fallback="loading">
        <BrowserRouter>
          <Provider store={store}>
            {component}
            <Navigation />
          </Provider>
        </BrowserRouter>
      </Suspense>,
    ),
  };
};
