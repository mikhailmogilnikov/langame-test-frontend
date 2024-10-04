import { PiCircleNotchBold } from 'react-icons/pi';
import { clsx } from 'clsx';

import { Flex } from './flex';

type Props = {
  fullscreen?: boolean;
};

export const Spinner = ({ fullscreen = false }: Props) => {
  const wrapperClassnames = clsx({
    'justify-center fixed inset-0': fullscreen,
    'justify-center mt-4': !fullscreen,
  });

  return (
    <Flex center className={wrapperClassnames}>
      <PiCircleNotchBold
        className='animate-spin origin-center flex-shrink-0'
        opacity={0.4}
        size={36}
      />
    </Flex>
  );
};
