import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Provider } from 'react-redux';

import Box from '../components/Box';
import ThemeProvider from '../components/ThemeProvider';
import createStore from '../state/createStore';

const Layout = ({ children, data }) => (
  <Provider store={createStore()}>
    <Box height="100%">
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <ThemeProvider>
        {children()}
      </ThemeProvider>
    </Box>
  </Provider>
);

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
