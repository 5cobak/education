import webpack from 'webpack';
import { buildConfig } from './config/webpack/buildConfig';
import { BuildEnv, BuildMode } from './config/webpack/types';
import path from 'path';

export default (env: BuildEnv): webpack.Configuration => {
  const mode = env.mode;
  const isDev = mode === BuildMode.development;

  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public/locales'),
    config: path.resolve(__dirname, 'config'),
  };

  const port = env.port;

  return buildConfig({ mode, paths, isDev, port });
};
