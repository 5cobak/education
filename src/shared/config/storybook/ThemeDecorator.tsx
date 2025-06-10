import { Story } from '@storybook/react';

import { Theme } from 'src/shared/lib/theme/ThemeContext';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  return (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
};
