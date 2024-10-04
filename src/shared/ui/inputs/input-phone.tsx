import { useMask } from '@react-input/mask';
import { FiSmartphone } from 'react-icons/fi';

import { Input, InputProps } from './input';

export const InputPhone = (props: InputProps) => {
  const inputPhoneRef = useMask({
    mask: '_ (___) ___ __ __',
    replacement: { _: /\d/ },
  });

  return (
    <Input
      ref={inputPhoneRef}
      icon={<FiSmartphone opacity={0.5} size={22} />}
      type='tel'
      {...props}
    />
  );
};
