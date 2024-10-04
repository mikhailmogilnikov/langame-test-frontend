import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { AuthLayoutFooter } from './footer';
import { Clock } from './clock';
import { Room } from './room';

import BgSvgBottom from '@/shared/assets/svg/bg-elem-bottom.svg';
import { Flex } from '@/shared/ui/flex';
import { BgElemTop } from '@/shared/assets/svg/bg-elem-top';
import { Spinner } from '@/shared/ui/spinner';

export const AuthLayout = () => {
  return (
    <Flex center col className='relative justify-center h-[100svh]' tag='main'>
      <BgSvgBottom className='absolute -bottom-16 left-0 w-72 h-96 text-primary' />
      <div className='absolute top-0 right-0'>
        <BgElemTop />
      </div>

      <Room />

      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>

      <Clock />
      <AuthLayoutFooter />
    </Flex>
  );
};
