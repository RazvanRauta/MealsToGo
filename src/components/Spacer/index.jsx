import React from 'react';
import styled, { useTheme } from 'styled-components/native';

const sizes = {
  small: 1,
  medium: 2,
  large: 3,
};

const positions = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

const getVariant = (position, size, theme) => {
  return `${positions[position]}:${theme.space[sizes[size]]}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

const Spacer = ({ position = 'top', size = 'small', children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};

export default Spacer;
