import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
export function buildResolvers({ paths: { src, config } }: BuildOptions): ResolveOptions {
  return {
    extensions: ['.ts', '.tsx', '.js'],
    preferAbsolute: true,
    alias: {
      src,
      config,
    },
    mainFiles: ['index'],
    plugins: [new TsconfigPathsPlugin()],
  };
}
