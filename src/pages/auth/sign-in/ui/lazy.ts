import { lazy } from 'react';

export const SignInPageLazy = lazy(() =>
  import('./index').then((mod) => ({ default: mod.SignInPage })),
);
