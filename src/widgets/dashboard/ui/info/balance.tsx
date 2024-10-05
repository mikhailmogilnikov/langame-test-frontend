import { FiRefreshCw } from 'react-icons/fi';

import { Button } from '@/shared/ui/button';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';
import { formatCurrency } from '@/shared/lib/format-currency';

export const Balance = () => {
  return (
    <Flex
      col
      className='bg-background h-full rounded-[20px] overflow-clip shadow-lg p-8 justify-between'
    >
      <Flex className='justify-between'>
        <Text className='uppercase' size={15}>
          Основной счёт
        </Text>
        <button>
          <FiRefreshCw size={20} />
        </button>
      </Flex>

      <Flex center>
        <Text size={34}>{formatCurrency(15000)}</Text>
        <Flex col className='p-3 bg-default rounded-xl' gap={1} width={102}>
          <Text className='leading-none' size={15} weight={700}>
            {formatCurrency(1200)}
          </Text>
          <Text className='leading-none' size={9} weight={700}>
            Бонусный счёт
          </Text>
        </Flex>
      </Flex>
      <Button color='primary'>ПОПОЛНИТЬ</Button>
    </Flex>
  );
};
