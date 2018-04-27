import React from 'react';
import { Provider } from 'react-redux';

import ThemeProvider from '../components/ThemeProvider';
import configureStore from '../configureStore';

export default (SubComp) => {
  const WithProviders = (props) => {
    return (
      <Provider store={configureStore()}>
        <ThemeProvider>
          <SubComp {...props} />
        </ThemeProvider>
      </Provider>
    );
  };

  return WithProviders;
}
