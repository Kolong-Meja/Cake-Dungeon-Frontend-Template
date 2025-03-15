import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: '127.0.0.1',
		port: 3000,
		strictPort: true,
		cors: {
			origin: true,
			methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
			credentials: true,
			allowedHeaders: ['Content-Type', 'X-Auth-Token', 'Origin', 'Authorization'],
			maxAge: 86400
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	preview: {
		host: '127.0.0.1',
		port: 3002,
		strictPort: true,
		cors: {
			origin: true,
			methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
			credentials: true,
			allowedHeaders: ['Content-Type', 'X-Auth-Token', 'Origin', 'Authorization'],
			maxAge: 86400
		}
	}
});
