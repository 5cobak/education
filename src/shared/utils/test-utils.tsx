import React, { ReactNode, Suspense } from 'react';

import { ThemeProvider } from 'src/app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import i18nextConfig from 'config/i18Next/testConfig';
import { I18nextProvider } from 'react-i18next';
import { StoreProvider } from 'src/app/providers/StoreProvider';

import { GlobalState } from 'src/app/providers/StoreProvider/types';

const renderComponent = (children: ReactNode, initialState?: GlobalState) => {
  return (
    <StoreProvider state={initialState}>
      <Suspense fallback="loading...">
        <I18nextProvider i18n={i18nextConfig}>
          <BrowserRouter basename="/">
            <ThemeProvider>{children}</ThemeProvider>
          </BrowserRouter>
        </I18nextProvider>
      </Suspense>
    </StoreProvider>
  );
};

export * from '@testing-library/react';

export { renderComponent };
