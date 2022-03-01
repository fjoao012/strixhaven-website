<script>
	import { t } from '$lib/translations';
</script>

<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

	let colleges = ["lorehold", "prismari", "quandrix", "silverquill", "witherbloom"];

	function capitalizeFirstLetter(str) {
		return str[0].toUpperCase() + str.slice(1);
	}
</script>

<svelte:head>
	<title>{$t('common.about.title')}</title>
</svelte:head>

<div class="content">
	<h1 class="exquisite-small">{$t('common.about.university')}</h1>

	<p>
		{@html $t('common.about.p1')}
	</p>

	<p>
		{@html $t('common.about.p2')}
	</p>

	<p>
		{@html $t('common.about.p3')}
	</p>

	<p>
		{@html $t('common.about.p4')}
	</p>

	<p>&nbsp;</p>

	<h1 class="exquisite-small">{$t('common.about.colleges.title')}</h1>

	{#each colleges as college}
		<ul><i class="ms ms-school-{college} ms-duo ms-duo-color ms-cost"></i> <a sveltekit:prefetch href="about/{college}">{capitalizeFirstLetter(college)}</a></ul>
	{/each}

</div>
