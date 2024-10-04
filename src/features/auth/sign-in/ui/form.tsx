import { Link, useNavigate } from 'react-router-dom';
import { FiSmartphone } from 'react-icons/fi';
import { TbLock } from 'react-icons/tb';
import { FormEventHandler } from 'react';

import { Button } from '@/shared/ui/button';
import { Flex } from '@/shared/ui/flex';
import { InputPassword, InputPhone } from '@/shared/ui/inputs';

export const SignInForm = () => {
  const nav = useNavigate();

  const handleAuth: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    localStorage.setItem('access', 'true');
    nav('/profile/dashboard');
  };

  return (
    <form className='w-full flex flex-col gap-12' onSubmit={handleAuth}>
      <Flex center col gap={6}>
        <InputPhone
          icon={<FiSmartphone opacity={0.5} size={22} />}
          name='Номер телефона'
          placeholder='8 (932) 050 55 55'
          type='tel'
        />
        <InputPassword
          icon={<TbLock opacity={0.5} size={22} />}
          name='Пароль'
          placeholder='Введите пароль'
        />
        <Link className='text-xs' to='/'>
          Забыли пароль?
        </Link>
      </Flex>

      <Button color='primary' type='submit'>
        ВОЙТИ
      </Button>
    </form>
  );
};
