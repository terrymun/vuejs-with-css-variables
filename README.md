# Supercharging VueJS with CSS variables

This repository contains a Vue CLI-powered application used to demonstrate how you can use CSS variables with VueJS.

The slides from my talk at the Aarhus Vue.js event [can be found here](http://slides.com/terrymun/vuejs-with-css-variables).

If you&rsquo;re looking for the pages, [they are right over here](https://terrymun.github.io/vuejs-with-css-variables/).

## Note

If you're planning to deploy this page to your own GitHub pages (by running `npm run deploy`), please remember to do the following **if you are renaming this repo**, as that changes the absolute file path injected into the production build:

* Update the `publicPath` property in `vue.config.js`
* Update the `base` property in `router.ts`