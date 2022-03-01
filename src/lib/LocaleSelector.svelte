<script>
  import { locale, locales } from '$lib/translations';
</script>

<style>
  .locale-selector {
    display: flex;
    justify-content: right;
  }
  .select {
    margin: 1rem 1rem 1rem;
  }
</style>

<div class="locale-selector">
  <div class="select">
    <select bind:value={$locale}>
      {#each $locales as locale}
        <option value={locale}>{locale}</option>
      {/each}
    </select>
  </div>
</div>