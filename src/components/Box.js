import React from 'react';
import styled from 'styled-components';
import tag from 'clean-tag';
import {
  space,
  width,
  display,
  textAlign,
  height,
  top,
  left,
  right,
  bottom,
  position,
  color,
  fontSize,
  fontWeight,
  borderRadius,
  zIndex,
  border,
  borderBottom,
  borderColor,
  borderLeft,
  borderRight,
  borderTop,
  flex,
} from 'styled-system';

import blacklist from './utils/blacklist';
import injectProps from './utils/injectProps';

const Box = styled(tag)`
  ${space}
  ${width}
  ${display}
  ${height}
  ${color}
  ${fontSize}
  ${position}
  ${zIndex}
  ${textAlign}
  ${top}
  ${left}
  ${right}
  ${bottom}
  ${fontWeight}
  ${border}
  ${borderRight}
  ${borderLeft}
  ${borderBottom}
  ${borderTop}
  ${borderColor}
  ${flex}
  ${borderRadius}
  ${injectProps('overflow')}
  ${injectProps.responsive('transform')}
  ${injectProps('transition')}
  ${injectProps.responsive('opacity', { alias: 'alpha' })}
  ${injectProps('verticalAlign')}
  ${({ onClick }) => onClick && 'cursor: pointer;'}
`;

Box.defaultProps = {
  blacklist,
};

Box.inline = (props) => <Box is="span" display="inline-block" verticalAlign="middle" {...props} />;

export default Box;
