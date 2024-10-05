import { LogoutButton } from '@/features/auth/logout';
import { DeviceIcon } from '@/shared/assets/icons/device';
import { ProblemIcon } from '@/shared/assets/icons/problem';
import { SelectGameIcon } from '@/shared/assets/icons/select-game';
import { SessionIcon } from '@/shared/assets/icons/session';
import { BigButton } from '@/shared/ui/big-button';
import { Flex } from '@/shared/ui/flex';

export const DashboardControls = () => {
  return (
    <Flex className='h-48' gap={8}>
      <BigButton className='bg-[#F6FBFF]' icon={<DeviceIcon />}>
        Вернуться на рабочий стол
      </BigButton>
      <BigButton className='bg-[#F8F0FF]' icon={<SelectGameIcon />}>
        Выбрать игру
      </BigButton>
      <BigButton className='bg-[#FFFEEE]' icon={<ProblemIcon />}>
        Сообщить о проблеме
      </BigButton>
      <BigButton className='bg-[#F0FFF9]' icon={<SessionIcon />}>
        Продлить сессию
      </BigButton>
      <LogoutButton />
    </Flex>
  );
};
