<script>
  import { t, locale } from '$lib/translations';
  import { onMount } from "svelte";

  const URL = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=strixhaven&pageNumber=1&pageSize=9`;
  let articles = [];

  onMount(async function() {
    const response = await fetch(URL, { method: 'GET', headers:{
        "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        "x-rapidapi-key": ""
      }});
    const json = await response.json();
    articles = json["value"];
  });
</script>

<script context="module">
  import { browser, dev } from '$app/env';

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;
</script>

<svelte:head>
  <title>{$t('common.news.title')}</title>
</svelte:head>

<div class="content">
  <h1 class="exquisite-small">{$t('common.header.news')}</h1>
</div>

{#if articles.length > 0}
  <div class="newsfeed">
  {#each articles as article}
    <div class="card">
      {#if article.image.url !== null}
        <img src="{article.image.url}">
      {:else}
          <img src="dnd.png">
      {/if}
      <div class="card-body">
        <h3>{article.title}</h3>
        <p> {article.description} </p>
        <a href="{article.url}">{$t('common.news.story')}</a>
      </div>
    </div>
  {/each}
  </div>
{:else}
    <p>{$t('common.news.nothing_here')}</p>
{/if}

<style>

.newsfeed {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(305px, 1fr));
  grid-gap: 15px;
}

.newsfeed > .card img {
  max-width: 100%;
  width: 300px;
  height: 200px;
  object-fit: cover;
}
</style>