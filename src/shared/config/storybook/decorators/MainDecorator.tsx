import { Story } from '@storybook/react';
import i18n from 'config/i18Next/testConfig';

import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'src/app/providers/StoreProvider';
import 'src/app/styles/main.scss';

export const MainDecorator = () => (StoryComponent: Story) => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <StoreProvider>
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <StoryComponent />
          </I18nextProvider>
        </BrowserRouter>
      </StoreProvider>
    </Suspense>
  );
};
