import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/ui/button';

export const SignInButton = () => {
  const nav = useNavigate();

  const handleAuth = () => {
    localStorage.setItem('access', 'true');
    nav('/profile/dashboard');
  };

  return (
    <Button color='primary' onClick={handleAuth}>
      ВОЙТИ
    </Button>
  );
};
