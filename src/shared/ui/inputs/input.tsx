import { forwardRef } from 'react';

import { InputWrapper, InputWrapperProps } from './wrapper';

export type InputProps = Omit<InputWrapperProps, 'children'> &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, InputProps>((props, ref) => {
  return (
    <InputWrapper {...props}>
      <input
        ref={ref}
        className='w-full bg-transparent outline-none font-bold'
        disabled={props.isDisabled}
        {...props}
      />
    </InputWrapper>
  );
});
