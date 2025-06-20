import { Story } from '@storybook/react';
import i18n from 'config/i18Next/testConfig';

import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';

export const FallbackDecorator = (StoryComponent: Story) => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <I18nextProvider i18n={i18n}>
        <StoryComponent />
      </I18nextProvider>
    </Suspense>
  );
};
