import { clsx } from 'clsx';

type Props = {
  vertical?: boolean;
  className?: string;
};

export const Divider = ({ vertical = false, className }: Props) => {
  const dividerClassname = clsx(
    'text-foreground/15',
    {
      'w-px h-full': vertical,
      'h-px w-full': !vertical,
    },
    className,
  );

  return <hr className={dividerClassname} />;
};
