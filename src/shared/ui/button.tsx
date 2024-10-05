import { DetailedHTMLProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

export const button = tv({
  base: 'w-full flex gap-3 items-center justify-center rounded-full active:scale-95 transition-transform-color-opacity relative font-bold',
  variants: {
    color: {
      default: 'bg-default text-default-foreground',
      primary: 'bg-primary text-primary-foreground shadow-md shadow-primary/30',
    },
    variant: {
      solid: '',
      bordered: 'bg-transparent text-foreground border-[1px] border-foreground/30',
    },
    size: {
      sm: 'h-[37px] text-xs',
      md: 'h-[46px] text-sm',
    },
    isDisabled: {
      true: 'opacity-30 active:scale-100',
    },
  },
  defaultVariants: {
    color: 'default',
    variant: 'solid',
    size: 'md',
  },
});

type ButtonVariants = VariantProps<typeof button>;

type Props = {
  children?: ReactNode;
  startContent?: ReactNode;
  endContent?: ReactNode;
} & DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
  ButtonVariants;

export const Button = (props: Props) => {
  const { isDisabled, children, startContent, endContent } = props;

  return (
    <button className={button(props)} disabled={isDisabled} {...props}>
      {startContent && <div className='absolute left-4'>{startContent}</div>}
      {children}
      {endContent && <div className='absolute right-4'>{endContent}</div>}
    </button>
  );
};
