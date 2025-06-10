import { Story } from '@storybook/react';

import { Suspense } from 'react';

export const FallbackDecorator = (StoryComponent: Story) => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <StoryComponent />
    </Suspense>
  );
};
