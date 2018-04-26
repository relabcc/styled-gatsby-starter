import React from 'react';
import ThemeProvider from '../components/ThemeProvider';

export default (SubComp) => {
  const WithProviders = (props) => {
    return (
      <ThemeProvider>
        <SubComp {...props} />
      </ThemeProvider>
    );
  };

  return WithProviders;
}
