import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const AuthGuard = () => {
  const isAuthenticated = false;

  return isAuthenticated ? (
    <Suspense fallback={<p>Loading...</p>}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to='/auth/sign-in' />
  );
};
