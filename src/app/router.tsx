import { createBrowserRouter, Navigate } from 'react-router-dom';

import { AuthGuard } from './guards/auth-guard';
import { GuestGuard } from './guards/guest-guard';

import { ProfileDashboardPage } from '@/pages/profile/dashboard';
import { SignInPage } from '@/pages/auth/sign-in';
import { SignUpPage } from '@/pages/auth/sign-up';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthGuard />,
    children: [
      {
        path: '',
        element: <Navigate to='/profile/dashboard' />,
      },
      {
        path: 'profile',
        children: [{ path: 'dashboard', element: <ProfileDashboardPage /> }],
      },
    ],
  },
  {
    path: '/sign-in',
    element: <GuestGuard />,
    children: [{ path: '', element: <SignInPage /> }],
  },
  {
    path: '/sign-up',
    element: <GuestGuard />,
    children: [{ path: '', element: <SignUpPage /> }],
  },
]);
