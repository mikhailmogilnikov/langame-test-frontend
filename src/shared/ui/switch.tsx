import { clsx } from 'clsx';
import { PiCheckBold, PiXBold } from 'react-icons/pi';

type Props = {
  isEnabled: boolean;
  onChange: VoidFunction;
};

export const Switch = ({ isEnabled, onChange }: Props) => {
  const indicatorClassname = clsx(
    'inline-block h-6 w-6 transform flex items-center justify-center rounded-full bg-white transition-transform-color',
    {
      'translate-x-7 bg-primary': isEnabled,
      'translate-x-1 bg-default-foreground': !isEnabled,
    },
  );

  return (
    <button
      className='relative bg-default inline-flex h-8 w-14 items-center rounded-full transition-colors'
      onClick={onChange}
    >
      <span className={indicatorClassname}>
        {isEnabled ? (
          <PiCheckBold className='text-primary-foreground' size={14} />
        ) : (
          <PiXBold className='text-primary-foreground' size={14} />
        )}
      </span>
    </button>
  );
};
