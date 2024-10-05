import { Flex } from '@/shared/ui/flex';
import banner1 from '@/shared/assets/images/ADS.png';
import banner2 from '@/shared/assets/images/ADS2.png';

export const DashboardBanners = () => {
  return (
    <Flex gap={8}>
      <div className='bg-background aspect-[536/332] w-full h-min rounded-3xl overflow-clip'>
        <img alt='Баннер' className='w-full h-full object-cover' src={banner1} />
      </div>
      <div className='bg-background aspect-[536/332] w-full h-min rounded-3xl overflow-clip'>
        <img alt='Баннер2' className='w-full h-full object-cover' src={banner2} />
      </div>
    </Flex>
  );
};
