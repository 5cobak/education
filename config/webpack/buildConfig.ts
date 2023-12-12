import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildRules } from './buildLoaders';
import { BuildOptions } from './types';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildRules(options),
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    resolve: buildResolvers(options),
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
