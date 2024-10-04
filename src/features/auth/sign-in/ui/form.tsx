import { Link } from 'react-router-dom';

import { SignInButton } from './button';

import { LogoLogin } from '@/shared/assets/svg/logo-login';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';
import { DownloadGoogle } from '@/shared/assets/svg/download-google';
import { DownloadApple } from '@/shared/assets/svg/dowload-apple';

export const SignInForm = () => {
  return (
    <Flex center col className='max-w-80' gap={12}>
      <LogoLogin />

      <Flex center col gap={6}>
        <Flex className='w-full h-20 bg-default rounded-md'> </Flex>
        <Flex className='w-full h-20 bg-default rounded-md'> </Flex>
        <Link className='text-xs' to='/'>
          Забыли пароль?
        </Link>
      </Flex>

      <SignInButton />

      <Flex center col gap={0}>
        <Text size={13}>У вас ещё нет аккаунта?</Text>
        <Link className='text-primary font-bold' to='/auth/sign-up'>
          Зарегистрируйтесь
        </Link>
      </Flex>

      <Flex center col>
        <Text size={14}>Установите приложение.</Text>
        <Flex className='justify-center'>
          <DownloadGoogle />
          <DownloadApple />
        </Flex>
      </Flex>
    </Flex>
  );
};
