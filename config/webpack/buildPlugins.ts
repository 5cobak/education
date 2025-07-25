import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { WebpackPluginInstance } from 'webpack';
import { BuildOptions } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
export function buildPlugins({ paths, isDev, apiUrl, project }: BuildOptions): WebpackPluginInstance[] {
    const plugins: WebpackPluginInstance[] = [
        new HtmlWebpackPlugin({ template: paths.html }),
        new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].css' }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        // new BundleAnalyzerPlugin({ openAnalyzer: true }),
    ];

    if (isDev) {
        plugins.push(
            ...[new BundleAnalyzerPlugin({ openAnalyzer: false }), new webpack.ProgressPlugin()],
            new webpack.HotModuleReplacementPlugin(),
            new ReactRefreshWebpackPlugin()
        );
    }

    return plugins;
}
