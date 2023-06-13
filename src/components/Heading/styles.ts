import React from 'react';
import styled from 'styled-components';
import { HeadingProps } from './interface';
import { Sizes } from './sizes';

const e = React.createElement;

export const HeadingStyled = styled(
  ({ tag, children, ...props }: HeadingProps) => e(tag, props, children)
)`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  font-size: ${(props) =>
    props.display === 'true' ? '3.25rem' : Sizes?.[props.tag] || '1rem'};
`;
