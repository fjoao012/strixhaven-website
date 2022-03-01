<script>
	import { t } from '$lib/translations';
</script>

<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>{$t('common.home.title')}</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		<p class="exquisite">Strixhaven</p>
		<p>{$t('common.home.intro')}</p>
	</h1>
</section>

<style>

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		margin:auto;
		position: relative;
		width: 20%;
		height: 0;
		padding: 0 0 calc(100% * 25 / 128) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

</style>
