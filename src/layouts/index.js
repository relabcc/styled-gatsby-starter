import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Box from '../components/Box';
import ThemeProvider from '../components/ThemeProvider';

const Layout = ({ children, data }) => (
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
);

Layout.propTypes = {
  children: PropTypes.func,
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
