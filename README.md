# Supercharging VueJS with CSS variables

**[View the demo page](https://terrymun.github.io/vuejs-with-css-variables/)**.

This repository contains a Vue CLI-powered application used to demonstrate how you can use CSS variables with VueJS.

The slides from my talk at the Aarhus Vue.js event on May 2, 2019 [can be found here](http://slides.com/terrymun/vuejs-with-css-variables).

## Note

If you want to test this repo out, you can simply do:

```
npm install
npm run serve
```

If you're planning to deploy this page to your own GitHub pages (by running `npm run deploy`), please remember to do the following **if you are renaming this repo**, as that changes the absolute file path injected into the production build:

* Update the `publicPath` property in `vue.config.js`
* Update the `base` property in `router.ts`