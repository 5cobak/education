import { BuildOptions } from './types';
import { Configuration } from 'webpack-dev-server';
import path from 'path'
export function buildDevServer(options: BuildOptions): Configuration {
	const { port } = options;

	return {
		port,
		open: true
	}
}