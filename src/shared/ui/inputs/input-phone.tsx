import { useMask } from '@react-input/mask';

import { Input, InputProps } from './input';

export const InputPhone = (props: InputProps) => {
  const inputPhoneRef = useMask({
    mask: '_ (___) ___ __ __',
    replacement: { _: /\d/ },
  });

  return <Input ref={inputPhoneRef} type='tel' {...props} />;
};
