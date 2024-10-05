import { PiMouse } from 'react-icons/pi';
import { GrTransaction } from 'react-icons/gr';
import { LuSlidersHorizontal } from 'react-icons/lu';
import { TbMessage2 } from 'react-icons/tb';

export const ProfileNavRoutes = [
  {
    name: 'История транзакций',
    icon: <GrTransaction opacity={0.3} size={24} />,
    href: '/profile/dashboard',
  },
  { name: 'Забронировать', icon: <PiMouse opacity={0.3} size={24} />, href: '/profile/dashboard' },
  {
    name: 'Настройки',
    icon: <LuSlidersHorizontal opacity={0.3} size={24} />,
    href: '/profile/dashboard',
  },
  {
    name: 'Поддержка',
    icon: <TbMessage2 opacity={0.3} size={24} />,
    focus: true,
    href: '/profile/dashboard',
  },
];
