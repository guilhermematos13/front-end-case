import React from 'react';
import styled from 'styled-components';
import { HeadingProps } from './interface';
import { Sizes } from './sizes';

const e = React.createElement;

export const TextStyled = styled(({ tag, children, ...props }: HeadingProps) =>
  e(tag, props, children)
)`
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  font-size: ${(props) => Sizes?.[props.size]};
`;
