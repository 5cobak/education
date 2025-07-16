import type { Config } from 'jest';

const config: Config = {
    globals: {
        __IS_DEV__: true,
        __API__: '',
        __PROJECT__: 'jest',
    },
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
    rootDir: '../../',
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    modulePaths: ['<rootDir>'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>config/jest/utils/mockFile.ts',
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
    moduleDirectories: ['node_modules', 'utils', __dirname],
};

export default config;
