import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';

export const CurrentSession = () => {
  return (
    <Flex col className='bg-background h-full rounded-[20px] overflow-clip shadow-lg p-8'>
      <Text className='uppercase' size={15}>
        Информация о текущей сессии
      </Text>
      <Flex col className='h-full justify-center'>
        <Flex className='justify-between'>
          <Text size={15}>Осталось минут:</Text>
          <Text size={15} weight={700}>
            120 мин.{' '}
          </Text>
        </Flex>
        <Flex className='justify-between'>
          <Text size={15}>Сессия истекает:</Text>
          <Text className='uppercase' size={15} weight={700}>
            14.12.2020, 20:24
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
