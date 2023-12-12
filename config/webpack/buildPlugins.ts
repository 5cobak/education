import HtmlWebpackPlugin from 'html-webpack-plugin';
import  webpack, { WebpackPluginInstance }  from 'webpack';
import { BuildOptions } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
export function buildPlugins({paths}: BuildOptions): WebpackPluginInstance[] {
	return [new HtmlWebpackPlugin({template: paths.html}), new webpack.ProgressPlugin(), new MiniCssExtractPlugin({filename: 'css/[name].[contenthash].css'})]
}