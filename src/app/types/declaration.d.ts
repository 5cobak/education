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
