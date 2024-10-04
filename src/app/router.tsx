import { createBrowserRouter, Navigate } from 'react-router-dom';

import { AuthGuard } from './guards/auth-guard';
import { GuestGuard } from './guards/guest-guard';

import { ProfileDashboardPage } from '@/pages/profile/dashboard';
import { SignInPage } from '@/pages/auth/sign-in';
import { SignUpPage } from '@/pages/auth/sign-up';
import { AuthLayout } from '@/widgets/layouts/auth-layout';
import { ProfileLayout } from '@/widgets/layouts/profile-layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthGuard />,
    errorElement: <p>Такого маршрута не существует</p>,
    children: [
      {
        path: '',
        element: <Navigate to='/profile/dashboard' />,
      },
      {
        path: 'profile',
        element: <Navigate to='/profile/dashboard' />,
      },
      {
        path: 'profile',
        element: <ProfileLayout />,
        children: [{ path: 'dashboard', element: <ProfileDashboardPage /> }],
      },
    ],
  },
  {
    path: '/auth',
    element: <GuestGuard />,
    children: [
      {
        path: '',
        element: <Navigate to='/auth/sign-in' />,
      },
      {
        path: '',
        element: <AuthLayout />,
        children: [
          { path: 'sign-in', element: <SignInPage /> },
          { path: 'sign-up', element: <SignUpPage /> },
        ],
      },
    ],
  },
]);
