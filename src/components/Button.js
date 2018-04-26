import React from 'react';
import styled, { css } from 'styled-components';
import {
  themeGet,
  fontSize,
  space,
  color,
  width,
  border,
  borderColor,
  borderRadius,
  letterSpacing,
  fontWeight,
} from 'styled-system';
import tag from 'clean-tag';

import { getColorByPropKey } from './utils/getColor';

const active = css`
  color: ${getColorByPropKey('hoverColor')};
  background-color: ${getColorByPropKey('hoverBg')};
  border-color: ${getColorByPropKey('hoverBorder')};
`;

export const buttonStyle = css`
  padding: 0;
  border: none;
  font-family: inherit;
  line-height: 1;
  ${fontSize}
  ${space}
  ${color}
  ${width}
  ${border}
  ${borderColor}
  ${borderRadius}
  ${fontWeight}
  ${letterSpacing}
  appearance: none;
  transition: all ${themeGet('duration', 250)}ms;
  cursor: pointer;
  &:hover,
  &:focus {
    ${(props) => !props.disabled && active}
  }
  ${(props) => props.active && !props.disabled && active}
  ${(props) => props.disabled && `
    cursor: not-allowed;
    opacity: 0.5;
  `}
`;

const Button = styled(tag)`
  ${buttonStyle}
`;

Button.defaultProps = {
  is: 'button',
  f: '1em',
  border: '2px solid',
  borderColor: 'primary',
  bg: 'primary',
  color: 'white',
  hoverColor: 'primary',
  hoverBg: 'white',
  px: '1em',
  py: '0.5em',
  borderRadius: '0.25em',
  fontWeight: 'bold',
};

Button.secondary = (props) => (
  <Button
    bg="secondary"
    borderColor="secondary"
    hoverColor="secondary"
    {...props}
  />
);

export default Button;
