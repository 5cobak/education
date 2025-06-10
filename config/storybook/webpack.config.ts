import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '..//webpack/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const src = path.resolve(__dirname, '../../src');
  const appConfig = path.resolve(__dirname, '../../config');

  config.resolve.modules.push(src);
  config.resolve.modules.push(appConfig);

  config.resolve.alias = { src, config: appConfig };

  config.resolve.extensions.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module.rules.push(buildCssLoader(true));

  return config;
};
