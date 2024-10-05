import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';
import avatar from '@/shared/assets/images/avatar.png';

export const DashboardAvatar = () => {
  return (
    <Flex center className='h-full pr-12'>
      <img alt='Аватар' className='object-cover rounded-full' height={53} src={avatar} width={53} />
      <Text className='w-full' size={17} weight={700}>
        Алексей Костылев Николаевич
      </Text>
    </Flex>
  );
};
