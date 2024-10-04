import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';

export const Room = () => {
  return (
    <Flex center col className='absolute top-16 left-16' gap={2} width='min-width'>
      <Text className=' leading-none font-nitty' size={154} tag='h2' weight={700}>
        23
      </Text>
      <Text className='tracking-widest font-nitty' size={39} tag='h3' weight={700}>
        Стандарт
      </Text>
    </Flex>
  );
};
