import { lazy } from 'react';

export const ProfileDashboardPageLazy = lazy(() =>
  import('./index').then((mod) => ({ default: mod.ProfileDashboardPage })),
);
