import { useNavigate } from 'react-router-dom';
import { FormEventHandler } from 'react';
import { PiUserCircleBold } from 'react-icons/pi';

import { Button } from '@/shared/ui/button';
import { Flex } from '@/shared/ui/flex';
import { Input, InputDate, InputPassword, InputPhone } from '@/shared/ui/inputs';
import { InputPassport } from '@/shared/ui/inputs/input-passport';

export const SignUpFormFull = () => {
  const nav = useNavigate();

  const handleAuth: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    localStorage.setItem('access', 'true');
    nav('/profile/dashboard');
  };

  return (
    <form className='w-full flex flex-col gap-12' onSubmit={handleAuth}>
      <Flex center col gap={8}>
        <Input
          icon={<PiUserCircleBold opacity={0.5} size={22} />}
          label='ФИО'
          placeholder='Введите полное имя'
        />
        <div className='grid grid-cols-2 gap-8'>
          <InputPhone label='Номер телефона' placeholder='8 (932) 050 55 55' type='tel' />
          <InputDate label='Дата рождения' selectedDate={new Date()} onChange={() => {}} />
          <InputPhone label='Номер телефона' placeholder='8 (932) 050 55 55' type='tel' />
          <InputPassport
            autoComplete='off'
            label='Укажите 10 цифр серия и номер'
            placeholder='4125 231424'
            type='text'
          />

          <InputPassword autoComplete='off' label='Укажите пароль' placeholder='Пароль' />
          <InputPassword autoComplete='off' label='Повторите пароль' placeholder='Пароль' />
        </div>
      </Flex>

      <Button color='primary' type='submit'>
        ЗАРЕГИСТРИРОВАТЬСЯ
      </Button>
    </form>
  );
};
