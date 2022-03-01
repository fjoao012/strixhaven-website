<script context="module">

  import { t } from '$lib/translations';

  let start_pitch = "start_pitch";
  let magic_display = "magic_display";
  let sentience = "sentience";
  let examinator_perception_of_magic = "examinator_perception_of_magic";

  let studentId = '';
  let admittedStudent = [];

  export async function load(ctx) {
    studentId = String(ctx.params.studentId);
    return { props: { studentId }};
  }

  function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
</script>

<script>
  import {onMount} from "svelte";
  import EmojiShower from "../../lib/EmojiShower.svelte";

  let admittedStudent = [];
  let maxScores = [];

  onMount(async function () {
    const response = await fetch("/students.json");
    const json = await response.json();
    admittedStudent = json["admitted"][studentId];
    maxScores = json["evaluation"];
  });


</script>

<svelte:head>
  <title>{$t('common.admissions.students.title')}</title>
</svelte:head>

<EmojiShower />

<div class="content">
  <h1 class="exquisite-small">{$t('common.admissions.students.status_ok')}</h1>

  <p>{@html $t('common.admissions.students.description', {student: admittedStudent['name']} )}</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>

  <h1 class="exquisite-small">{$t('common.admissions.students.details')}</h1>

  <ul>
    <li><button title="{$t('common.admissions.students.submitted')}" disabled="true">
      <span>&#9989;</span>
    </button>  {$t('common.admissions.students.application_submission')}</li>
    <li><button title="{$t('common.admissions.students.scheduled')}" disabled="true">
      <span>&#9201;</span>
    </button>  {$t('common.admissions.students.preliminary_interview')}</li>
    <ul>
      <li class="internal-li">
        {$t('common.admissions.students.interview.' + start_pitch)}:
          {#if admittedStudent[start_pitch] !== "" && admittedStudent[start_pitch] !== undefined}
            <b>{admittedStudent[start_pitch]} / {maxScores[start_pitch + '_max']}</b>
          {:else}
            <b>N/A</b>
          {/if}
      </li>
      <li class="internal-li">
        {$t('common.admissions.students.interview.' + magic_display)}:
          {#if admittedStudent[magic_display] !== "" && admittedStudent[magic_display] !== undefined}
            <b>{admittedStudent[magic_display]} / {maxScores[magic_display + '_max']}</b>
          {:else}
            <b>N/A</b>
          {/if}
      </li>
      <li class="internal-li">
        {$t('common.admissions.students.interview.' + sentience)}:
          {#if admittedStudent[sentience] !== "" && admittedStudent[sentience] !== undefined}
            <b>{admittedStudent[sentience]} / {maxScores[sentience + '_max']}</b>
          {:else}
            <b>N/A</b>
          {/if}
      </li>
      <li class="internal-li">
        {$t('common.admissions.students.interview.' + examinator_perception_of_magic)}:
          {#if admittedStudent[examinator_perception_of_magic] !== "" && admittedStudent[examinator_perception_of_magic] !== undefined}
            <b>{admittedStudent[examinator_perception_of_magic]} / {maxScores[examinator_perception_of_magic + '_max']}</b>
          {:else}
            <b>N/A</b>
          {/if}
      </li>
    </ul>
    <li><button title="{$t('common.admissions.students.unknown')}" disabled="true">
      <span>&#10067;</span>
    </button>  {$t('common.admissions.students.acceptance')}</li>
  </ul>

</div>

<style>
  ul {
    line-height: 2;
  }

</style>