import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Spinner } from '@/shared/ui/spinner';

export const AuthGuard = () => {
  const isAuthenticated = Boolean(localStorage.getItem('access'));

  return isAuthenticated ? (
    <Suspense fallback={<Spinner fullscreen />}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to='/auth/sign-in' />
  );
};
