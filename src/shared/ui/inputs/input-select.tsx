import { TbCalendarMonth } from 'react-icons/tb';

import { InputWrapper, InputWrapperProps } from './wrapper';

type Props = Omit<InputWrapperProps, 'children'> &
  React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

export const InputSelect = (props: Props) => {
  return (
    <InputWrapper icon={<TbCalendarMonth opacity={0.5} size={22} />} {...props}>
      <div className='flex items-center'>
        <select {...props} className='bg-transparent outline-none -ml-1'>
          <option value=''>Выберите документ</option>
          <option value='otherOption'>Паспорт РФ</option>
        </select>
      </div>
    </InputWrapper>
  );
};
