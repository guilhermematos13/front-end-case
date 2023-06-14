import React, { ForwardedRef, SelectHTMLAttributes } from 'react';
import { Container, IconWrapper, Select, SelectTitle } from './styles';
import { CaretDown } from '@phosphor-icons/react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  placeholder: string;
  options: { value: string; label: string }[];
  title: string;
}

export const SelectTalkToRI = React.forwardRef(
  (
    { placeholder, title, options, ...props }: SelectProps,
    ref: ForwardedRef<never>
  ) => (
    <Container>
      <SelectTitle>{title}</SelectTitle>
      <div>
        <Select defaultValue="" placeholder={placeholder} {...props} {...ref}>
          <option disabled value="">
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <IconWrapper>
          <CaretDown size={32} />
        </IconWrapper>
      </div>
    </Container>
  )
);
