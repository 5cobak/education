import { Story } from '@storybook/react';
import { useEffect } from 'react';

import { Theme } from 'src/shared/lib/theme';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  useEffect(() => {
    document.body.classList.add(theme);
  });
  return (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
};
