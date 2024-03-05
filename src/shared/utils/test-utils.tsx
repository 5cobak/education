import React, { ReactElement, Suspense } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'src/app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import 'config/i18Next/testConfig';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback="loading...">
      <ThemeProvider>
        <BrowserRouter basename="/"></BrowserRouter>
        {children}
      </ThemeProvider>
    </Suspense>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
