# strixhaven-website
Simple website of the Strixhaven university (DnD).


## Pre-requisites

This project requires NodeJS. It runs on [Svelte](https://svelte.dev/), through 
[SvelteKit](https://kit.svelte.dev/).


## About

This is a work in progress. Some things might feel rough or unfinished; I'm new to web 
development so feel free to adapt it and improve it!
 
Feel free to clone this project and use it for your campaigns and have fun!


## Translations

This project currently supports two languages: English (EN) and Portuguese (PT). To add a
new language, follow these steps:

1. create a JSON file for the language you want at `<src>/static/lang/` and (preferrably) use a 
two-letter code to identify it. Use the english version as base for translation

2. update the translations file at `<src>/lib/header/translations.js` by copying a structure in
{} to the end and updating it with the two-letter code of the new language and the path for
the file you just created


## Admitted students page

There's this page, accessible through the header of the webpage, called `Admissions`. This page
shows some input fields where your players can "login" to see their application status.

This project is prepared to read whatever the players insert into those fields and find a match
on the file `<src>/static/students.json`. Feel free to edit that file with the names of your players
and even set them with a score for potential admission exams they might take at Strixhaven!


## External APIs

For the news page (available at `<src>/routes/news.svelte`) I'm setting it up to use an external
news API that uses `strixahven` as search query. That API requires a key to work; if you want
that feature, create an account at [rapidapi.com](https://rapidapi.com/hub) and use your key on
the `news.svelte` file.


## Build

To build this project, use:
- `npm install`


To open it up locally, use:
- `npm run dev -- --open`


To create a build folder, use:
- `npm run build`


## Other helpful projects I used here

- [Mana Font](https://mana.andrewgioia.com/index.html)
- [rapidapi.com](https://rapidapi.com/hub)
- [sveltekit-i18n](https://github.com/sveltekit-i18n/lib)


## Screenshots

Home screen

![Home](/assets/images/home.png "Home screen")


Admissions screen

![Admissions](/assets/images/admissions.png "Admissions")


News screen

![News](/assets/images/news.png "News")


Events screen

![Events](/assets/images/events.png "Events")


About screen

![About](/assets/images/about.png "About")


Colleges screen

![Colleges](/assets/images/colleges.png "Colleges")