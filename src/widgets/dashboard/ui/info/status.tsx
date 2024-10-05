import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';

export const DashboardStatus = () => {
  return (
    <Flex col className='bg-background h-full rounded-2xl overflow-clip justify-center p-6' gap={2}>
      <Flex className='justify-between'>
        <Text size={15}>Текущий статус:</Text>
        <Text className='uppercase' size={15} weight={700}>
          Standart
        </Text>
      </Flex>
      <Flex className='justify-between'>
        <Text size={15}>До смены статуса осталось:</Text>
        <Text size={15} weight={700}>
          10 часов 23 минуты
        </Text>
      </Flex>
    </Flex>
  );
};
