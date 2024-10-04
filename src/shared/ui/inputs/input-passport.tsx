import { useMask } from '@react-input/mask';
import { CgTranscript } from 'react-icons/cg';

import { Input, InputProps } from './input';

export const InputPassport = (props: InputProps) => {
  const inputPhoneRef = useMask({
    mask: '____ ______',
    replacement: { _: /\d/ },
  });

  return (
    <Input
      ref={inputPhoneRef}
      icon={<CgTranscript opacity={0.5} size={22} />}
      type='tel'
      {...props}
    />
  );
};
