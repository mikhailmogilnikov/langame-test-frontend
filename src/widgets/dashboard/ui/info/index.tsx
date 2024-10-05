import { MockRates } from '../../config/rates';

import { DashboardAvatar } from './avatar';
import { Balance } from './balance';
import { DashboardBanners } from './banners';
import { CurrentSession } from './current-session';
import { DashboardRates } from './rates';
import { DashboardStatus } from './status';

import { Flex } from '@/shared/ui/flex';

export const DashboardInfo = () => {
  return (
    <Flex className='h-full' gap={8}>
      <Flex col className='' gap={8}>
        <Flex className='h-1/5' gap={8}>
          <DashboardAvatar />
          <DashboardStatus />
        </Flex>
        <Flex className='h-2/5' gap={8}>
          <CurrentSession />
          <Balance />
        </Flex>
        <DashboardBanners />
      </Flex>

      <DashboardRates rates={MockRates} />
    </Flex>
  );
};
