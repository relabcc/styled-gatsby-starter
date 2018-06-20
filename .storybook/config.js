import React from 'react';

import { configure, addDecorator } from '@storybook/react';
import { injectGlobal } from 'styled-components';
import 'sanitize.css/sanitize.css';

import ThemeProvider from '../src/components/ThemeProvider';
import theme from '../src/components/ThemeProvider/theme';

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    background: ${theme.colors.background};
    color: ${theme.colors.main};
    font-family: ${theme.font};
  }
`;

addDecorator((story) => (
  <ThemeProvider>
    {story()}
  </ThemeProvider>
));

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
