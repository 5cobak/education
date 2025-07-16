declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
declare module '*.png';
declare module '*.svg' {
    import React from 'react';
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'development' | 'jest' | 'storybook';

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;
