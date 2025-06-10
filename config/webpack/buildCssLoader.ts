import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (isDev: boolean) => {
  const cssLoader = {
    loader: 'css-loader',
    options: {
      modules: {
        auto: (resourcePath: string) => !resourcePath.endsWith('main.scss'),
        localIdentName: isDev ? '[local]__[hash:base64:5]' : '[hash:base64:5]',
      },
    },
  };

  return {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoader,
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };
};
