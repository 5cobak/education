import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export enum BuildMode {
    development = 'development',
    production = 'production',
}

export interface BuildPaths {
    entry: string;
    output: string;
    html: string;
    src: string;
    locales: string;
    config: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
    project: 'development' | 'jest' | 'storybook';
}
