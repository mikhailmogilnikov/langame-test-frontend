import { clsx } from 'clsx';
import { ReactElement, ReactNode } from 'react';

type Props = {
  icon?: ReactElement;
  children?: ReactNode;
  className?: string;
  textClassname?: string;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const BigButton = ({ icon, children, className, textClassname, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={clsx(
        'w-full flex flex-col gap-4 items-center justify-center rounded-3xl shadow-lg active:scale-95 transition-transform',
        className,
      )}
    >
      {icon}
      {children && <p className={clsx('font-bold text-sm uppercase', textClassname)}>{children}</p>}
    </button>
  );
};
