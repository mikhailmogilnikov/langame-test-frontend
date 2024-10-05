import { TbCalendarMonth } from 'react-icons/tb';

import { InputWrapper } from './wrapper';
import { InputProps } from './input';

export const InputDate = (props: InputProps) => {
  return (
    <InputWrapper icon={<TbCalendarMonth opacity={0.5} size={22} />} {...props}>
      <div className='flex items-center'>
        <input className='bg-transparent outline-none w-28' type='date' {...props} />
      </div>
    </InputWrapper>
  );
};
