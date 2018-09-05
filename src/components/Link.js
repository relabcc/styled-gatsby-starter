import React from 'react';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
  letterSpacing,
  display,
} from 'styled-system';
import tag from 'clean-tag';

import blacklist from './utils/blacklist';
import { getColorByPropKey } from './utils/getColor';

const LinkBase = styled(tag.a)`
  ${fontSize}
  ${space}
  ${color}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  ${display}
  text-decoration: none;
  &:hover {
    color: ${getColorByPropKey('hoverColor')};
  }
`;

LinkBase.defaultProps = {
  blacklist,
  color: 'text',
  hoverColor: 'blue',
  fontWeight: 'bold',
};

const Link = (props) => props.to ? (
  <LinkBase
    is={GatsbyLink}
    {...props}
  />
) : <LinkBase {...props} />;

Link.gatsby = (props) => (
  <Link is={GatsbyLink} {...props} />
);

export default Link;
