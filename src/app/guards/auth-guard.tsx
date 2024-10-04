import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const AuthGuard = () => {
  const isAuthenticated = Boolean(localStorage.getItem('access'));

  console.log(isAuthenticated);

  return isAuthenticated ? (
    <Suspense fallback={<p>Loading...</p>}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to='/auth/sign-in' />
  );
};
