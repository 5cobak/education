import { addDecorator } from '@storybook/react';

import { Theme } from 'src/shared/lib/theme';
import { MainDecorator } from 'src/shared/config/storybook/decorators/MainDecorator';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
addDecorator(ThemeDecorator(Theme.Light));
addDecorator(MainDecorator());
