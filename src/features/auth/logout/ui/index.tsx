import { useNavigate } from 'react-router-dom';

import { LogOutIcon } from '@/shared/assets/icons/log-out';
import { BigButton } from '@/shared/ui/big-button';

export const LogoutButton = () => {
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access');
    nav('/auth/sign-in');
  };

  return (
    <BigButton className='bg-[#FFEDED]' icon={<LogOutIcon />} onClick={handleLogout}>
      Завершить сессию
    </BigButton>
  );
};
