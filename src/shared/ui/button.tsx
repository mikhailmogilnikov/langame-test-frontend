import { DetailedHTMLProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

export const button = tv({
  base: 'w-full px-4 py-1.5 rounded-full active:scale-95 transition-transform text-sm font-bold',
  variants: {
    color: {
      default: 'bg-default text-default-foreground ',
      primary: 'bg-primary text-primary-foreground shadow-md shadow-primary/30',
    },
    variant: {
      solid: '',
      bordered: 'bg-transparent border-2',
    },
    size: {
      sm: 'h-[37px]',
      md: 'h-[46px]',
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
} & DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
  ButtonVariants;

export const Button = (props: Props) => {
  const { isDisabled, children } = props;

  return (
    <button className={button(props)} disabled={isDisabled} {...props}>
      {children}
    </button>
  );
};
