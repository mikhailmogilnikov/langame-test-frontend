import { clsx } from 'clsx';
import { ReactElement } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import { PiCheckCircleFill, PiXCircleFill } from 'react-icons/pi';

export const inputWrapper = tv({
  base: 'relative w-full bg-default h-20 p-4 gap-4 flex items-center rounded-md transition-color ',
  variants: {
    isValid: {
      undefined: '',
      false: 'bg-background border-2 border-danger ring-4 ring-danger/15',
      true: 'bg-background border-2 border-success ring-4 ring-success/15',
    },
    isDisabled: {
      true: 'opacity-30',
    },
  },
  defaultVariants: {
    isValid: 'undefined',
  },
});

type InputWrapperVariants = VariantProps<typeof inputWrapper>;

export type InputWrapperProps = {
  icon?: ReactElement;
  children: ReactElement;
  name: string;
  message?: string;
} & InputWrapperVariants;

export const InputWrapper = (props: InputWrapperProps) => {
  const { icon, name, children, message, isValid } = props;

  const isInvalid = !isValid && typeof isValid !== 'undefined';

  const messageClassnames = clsx(
    'absolute -bottom-6 left-0 text-[9px] uppercase font-bold max-w-64',
    {
      'text-success': isValid,
      'text-danger': isInvalid,
      'text-default-foreground': typeof isValid === 'undefined',
    },
  );

  return (
    <div className={inputWrapper(props)}>
      {icon}
      <div className='w-full flex flex-col gap-1'>
        <label className='text-xs opacity-50'>{name}</label>
        <div className='flex gap-2'>{children}</div>
      </div>

      {isValid && <PiCheckCircleFill className='text-success flex-shrink-0' size={18} />}
      {isInvalid && <PiXCircleFill className='text-danger flex-shrink-0' size={18} />}

      {message && <p className={messageClassnames}>{message}</p>}
    </div>
  );
};
