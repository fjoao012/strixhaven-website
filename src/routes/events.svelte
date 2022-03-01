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
</script>

<svelte:head>
  <title>{$t('common.events.title')}</title>
</svelte:head>

<div class="content">
  <h1 class="exquisite-small">{$t('common.header.events')}</h1>

  <div class="entry">
    <b>2022-03-20</b>
    <blockquote>{$t('common.events.e1')}</blockquote>
  </div>
  <br />

  <div class="entry">
    <b>2022-04-05</b>
    <blockquote>{$t('common.events.e2')}</blockquote>
  </div>
  <br />

  <div class="entry">
    <b>2022-04-25</b>
    <blockquote>{$t('common.events.e3')}</blockquote>
  </div>
  <br />

</div>

<style>
  .entry {
    border: 1px transparent solid;
    border-radius: 5px;
  }

  .entry:hover {
    transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
    border: 1px #edf0f8 solid;
    border-radius: 5px;

    background-color: #d2b092;
  }
</style>