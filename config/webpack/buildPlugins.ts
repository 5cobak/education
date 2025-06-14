import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { WebpackPluginInstance } from 'webpack';
import { BuildOptions } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
  const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({ template: paths.html }),
    new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].css' }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];

  if (isDev) {
    plugins.push(
      ...[new BundleAnalyzerPlugin({ openAnalyzer: false }), new webpack.ProgressPlugin()],
      new webpack.HotModuleReplacementPlugin()
    );
  }

  return plugins;
}
