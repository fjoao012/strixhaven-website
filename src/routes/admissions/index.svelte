<script>
	import {t} from '$lib/translations';
	import CollegeIcons from "$lib/CollegeIcons.svelte";
	import CharacterForm from "$lib/CharacterForm.svelte";

</script>

<svelte:head>
	<title>{$t('common.admissions.title')}</title>
</svelte:head>

<div class="content">
	<h1 class="exquisite-small">{$t('common.header.admissions')}</h1>

	<p>{$t('common.admissions.intro_text')}</p>

	<CollegeIcons />

	<p>&nbsp;</p>
	<h1 class="exquisite-small">{$t('common.admissions.heading1')}</h1>

	<CharacterForm />
</div>

