import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { ProfileNavBar } from './nav-bar';

import { Flex } from '@/shared/ui/flex';
import { Spinner } from '@/shared/ui/spinner';

export const ProfileLayout = () => {
  return (
    <Flex className='h-svh' gap={0} tag='main'>
      <ProfileNavBar />
      <Flex col className='bg-default rounded-[44px] overflow-clip h-full'>
        <Flex col className='overflow-y-scroll h-full'>
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </Flex>
      </Flex>
    </Flex>
  );
};
