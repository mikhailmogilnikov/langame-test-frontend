import { useState, useEffect } from 'react';

import { getCurrentTime } from '@/shared/lib/get-current-time';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';

export const Clock = () => {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Flex center className='absolute bottom-8 right-8' width='min-content'>
      <Flex center className='h-8 px-2 justify-center border-2 border-foreground/10  rounded-md'>
        <Text className='w-fit uppercase' size={15} weight={700}>
          en
        </Text>
      </Flex>
      <Text className='font-nitty w-fit leading-none' size={45} weight={700}>
        {time}
      </Text>
    </Flex>
  );
};
