import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '..//webpack/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const src = path.resolve(__dirname, '../../src');
    const appConfig = path.resolve(__dirname, '../../config');

    config.resolve?.modules?.push(src);
    config.resolve?.modules?.push(appConfig);

    if (config.resolve?.alias) {
        config.resolve.alias = { src, config: appConfig };
    }

    config.resolve?.extensions?.push('.ts', '.tsx');

    if (config.module?.rules) {
        config.module.rules = config.module.rules.map((rule) => {
            const ruleSet = rule as RuleSetRule;

            if (/svg/.test(ruleSet.test as string)) {
                return { ...ruleSet, exclude: /\.svg$/i };
            }

            return ruleSet;
        });
    }

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module?.rules?.push(buildCssLoader(true));

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        })
    );

    return config;
};
