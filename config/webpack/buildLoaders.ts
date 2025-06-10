import webpack from 'webpack';
import { BuildOptions } from './types';
import { buildCssLoader } from './buildCssLoader';

export function buildRules({ isDev, paths }: Pick<BuildOptions, 'isDev' | 'paths'>): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.(?:ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'ru'],
              outputPath: `${paths.locales}/{{locale}}/translation.json`,
            },
          ],
        ],
      },
    },
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [babelLoader, typescriptLoader, buildCssLoader(isDev), svgLoader, fileLoader];
}
