import { Outlet } from 'react-router-dom';

import { AuthLayoutFooter } from './footer';

import BgSvgBottom from '@/shared/assets/svg/bg-elem-bottom.svg';
import BgSvgTop from '@/shared/assets/svg/bg-elem-top.svg';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';

export const AuthLayout = () => {
  return (
    <Flex center col className='justify-center h-[100svh]' tag='main'>
      <BgSvgBottom className='absolute -bottom-16 left-0 w-72 h-96 text-primary' />
      <BgSvgTop className='absolute -top-16 right-0 w-72 h-96 text-primary' />

      <Flex center col className='absolute top-16 left-16' gap={2} width='min-width'>
        <Text className=' leading-none font-nitty' size={154} tag='h2' weight={700}>
          23
        </Text>
        <Text className='tracking-widest font-nitty' size={39} tag='h3' weight={700}>
          Стандарт
        </Text>
      </Flex>

      <Outlet />

      <AuthLayoutFooter />
    </Flex>
  );
};
