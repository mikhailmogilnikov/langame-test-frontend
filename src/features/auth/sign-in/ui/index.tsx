import { Link } from 'react-router-dom';

import { SignInForm } from './form';

import { LogoLogin } from '@/shared/assets/svg/logo-login';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';
import { DownloadGoogle } from '@/shared/assets/svg/download-google';
import { DownloadApple } from '@/shared/assets/svg/dowload-apple';

export const SignInFormBody = () => {
  return (
    <Flex center col className='max-w-80' gap={12}>
      <LogoLogin />

      <SignInForm />

      <Flex center col gap={0}>
        <Text size={13}>У вас ещё нет аккаунта?</Text>
        <Link className='text-primary font-bold' to='/auth/sign-up'>
          Зарегистрируйтесь
        </Link>
      </Flex>

      <Flex center col>
        <Text size={14}>Установите приложение.</Text>
        <Flex className='justify-center'>
          <Link to='/'>
            <DownloadGoogle />
          </Link>
          <Link to='/'>
            <DownloadApple />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
