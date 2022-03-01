<script>
  import { onMount } from "svelte";
  import { browser } from '$app/env';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import {t} from '$lib/translations';

  let lastName = browser ? window.sessionStorage.getItem('lastName') ?? '' : '';
  let firstName = browser ? window.sessionStorage.getItem('firstName') ?? '' : '';
  let admittedStudents = [];

  onMount(async function() {
    const response = await fetch("/students.json");
    const json = await response.json();
    admittedStudents = json["admitted"];
  });

  function sessionStore(field, value) {
    if (browser) {
      window.sessionStorage.setItem(field, value);
    }
  }

  function clearForm() {
    if (browser) {
      sessionStorage.removeItem('lastName');
      sessionStorage.removeItem('firstName');
    }

    lastName = '';
    firstName = '';
  }

  function handleSubmit() {
    let name = firstName + " " + lastName;
    let outputPage = '';

    for(let [key, value] of Object.entries(admittedStudents)) {
      if (value['name'] === name) {
        outputPage = key;
        break;
      }
    }

    console.log("outputPage=" + outputPage);

    if (outputPage !== '' && outputPage !== undefined) {
      clearForm();
      goto($page.url.pathname + `/${outputPage}`);
    } else {
      alert($t('common.admissions.error', {student: name}));
    }

  }
</script>


<form on:submit|preventDefault={handleSubmit}>
  <input bind:value={lastName}
         on:update={function(event) {
            sessionStore('lastName', event.detail);
          }}
         placeholder={$t('common.admissions.last_name')}>
  <input bind:value={firstName}
         on:update={function(event) {
            sessionStore('firstName', event.detail);
         }}
         placeholder={$t('common.admissions.first_name')}>

  <p>&nbsp;</p>
  <button disabled={!lastName || !firstName} type=submit>
    {$t('common.admissions.check_application')}
  </button>
</form>


<style>
  form {
    text-align: center;
  }

  input {
    font-family: 'Ranup', sans-serif;
    text-align: center;
    flex-grow: 1;
    color: #444444;
    font-size: 1.8rem;
    line-height: 2.4rem;
    vertical-align: middle;
  }

  button{
    text-align: center;
    display:inline-block;
    padding:0.3em 1.2em;
    margin:0 0.1em 0.1em 0;
    border:0.16em solid rgba(255,255,255,0);
    border-radius:2em;
    box-sizing: border-box;
    text-decoration:none;
    font-weight:300;
    color:#FFFFFF;
    background-color: #996515;

    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
    text-align:center;
    transition: all 0.2s;
  }

  button:hover{
    border-color: #EFAD58;
  }

  button:disabled {
    color:#FFFFFF;
    background-color: #efad58;
    border-color: #efad58;
  }

  p {
    line-height: 0.5;
  }
</style>