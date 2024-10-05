import { DashboardInfo } from './info';
import { DashboardControls } from './controls';
import { DashboardFooter } from './footer';

import { Flex } from '@/shared/ui/flex';

export const Dashboard = () => {
  return (
    <Flex col className='h-svh justify-between p-10' gap={10} tag='section'>
      <DashboardInfo />
      <DashboardControls />
      <DashboardFooter />
    </Flex>
  );
};
