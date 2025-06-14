import React, { ReactElement, ReactNode, Suspense } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'src/app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import i18nextConfig from 'config/i18Next/testConfig';
import { I18nextProvider } from 'react-i18next';

const ProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback="loading...">
      <I18nextProvider i18n={i18nextConfig}>
        <BrowserRouter basename="/">
          <ThemeProvider>{children}</ThemeProvider>
        </BrowserRouter>
      </I18nextProvider>
    </Suspense>
  );
};

const renderWithProviders = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: ProvidersWrapper, ...options });

export * from '@testing-library/react';

export { renderWithProviders };
