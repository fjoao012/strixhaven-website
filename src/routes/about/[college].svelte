<script context="module">
  import { page } from '$app/stores';
  import { t } from '$lib/translations';

  let college = '';

  export async function load(ctx) {
    college = String(ctx.params.college);
    return { props: { college }};
  }

  function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
</script>

<svelte:head>
  <title>{$t('common.about.colleges.' + college + '.title')}</title>
</svelte:head>

<div class="content">

  <h1 class="exquisite-small">{capitalizeFirstLetter($t('common.about.colleges.' + college + '.title'))}</h1>

  <p>
    {@html $t('common.about.colleges.' + college + '.p1')}
  </p>

  <p class="centered-symbol">
    <a href="https://mtg.fandom.com/wiki/{college}" title="{capitalizeFirstLetter(college)}"><i class="ms ms-school-{college} ms-duo ms-duo-color ms-cost ms-6x"></i></a>
  </p>
</div>

<style>
  .centered-symbol {
    text-align: center;
    font-size: 200%;
  }
</style>