import { TbCalendarMonth } from 'react-icons/tb';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale/ru';
import { BiSolidDownArrow } from 'react-icons/bi';

import { InputWrapper } from './wrapper';

import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  label: string;
  selectedDate: Date;
  onChange: (value: Date) => void;
};

export const InputDate = ({ label, selectedDate, onChange }: Props) => {
  registerLocale('ru', ru);

  return (
    <InputWrapper icon={<TbCalendarMonth opacity={0.5} size={22} />} label={label}>
      <div className='flex items-center'>
        <DatePicker
          className='bg-transparent outline-none w-24'
          locale='ru'
          selected={selectedDate}
          onChange={onChange}
        />
        <BiSolidDownArrow opacity={0.3} size={12} />
      </div>
    </InputWrapper>
  );
};
