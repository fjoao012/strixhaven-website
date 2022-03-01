import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],

	preprocess: [
		preprocess({
		}),
	],

	kit: {
		adapter: adapter({ out: 'build' }),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
