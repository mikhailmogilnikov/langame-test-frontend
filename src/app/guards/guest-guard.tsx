import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const GuestGuard = () => {
  const isAuthenticated = Boolean(localStorage.getItem('access'));

  return isAuthenticated ? (
    <Navigate to='/profile/dashboard' />
  ) : (
    <Suspense fallback={<p>Loading...</p>}>
      <Outlet />
    </Suspense>
  );
};
