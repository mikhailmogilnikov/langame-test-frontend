import { lazy } from 'react';

export const SignUpPageLazy = lazy(() =>
  import('./index').then((mod) => ({ default: mod.SignUpPage })),
);
