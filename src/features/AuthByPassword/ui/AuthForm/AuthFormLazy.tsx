import { lazy } from 'react';

export const AuthModalLazy = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./AuthForm')), 0);
    })
);
