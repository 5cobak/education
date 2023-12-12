import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types';

export function buildResolvers({ paths: { src } }: BuildOptions): ResolveOptions {
  return {
    extensions: ['.ts', '.tsx', '.js'],
    preferAbsolute: true,
    alias: {
      src,
    },
    mainFiles: ['index'],
  };
}
