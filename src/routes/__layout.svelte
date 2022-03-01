<script>
	import '../app.css';
	import { t } from '$lib/translations';
	import Header from '$lib/header/Header.svelte';
</script>

<script context="module">
	import { locale, loadTranslations } from '$lib/translations';

	export const load = async ({ url }) => {
		const { pathname } = url;

		const defaultLocale = 'en';
		const initLocale = locale.get() || defaultLocale;
		await loadTranslations(initLocale, pathname);

		return {};
	}
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	{$t('common.footer.text')} <a href="https://mtg.fandom.com/wiki/Strixhaven">{$t('common.footer.placeholder')}</a>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
