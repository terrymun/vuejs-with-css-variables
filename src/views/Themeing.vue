<template>
  <section>
    <h1>Themeing</h1>
    <span class="byline"><router-link to="/">Back</router-link></span>

    <h2>Fetching a theme asynchronously</h2>
    <p>
      The dropdown below fetches a pre-defined <code>ts</code> file containing theme-related
      variables.
    </p>

    <UIFormControlGroup>
      <template v-slot:label>
        <UIFormLabel>App theme</UIFormLabel>
      </template>

      <UIFormSelect
        v-model="activeTheme">
        <option
          v-for="(theme, i) in themes"
          v-bind:key="i"
          v-bind:value="theme.value"
          >
          {{ theme.label }}
        </option>
      </UIFormSelect>
    </UIFormControlGroup>

    <h2>How does it work?</h2>
    <p>
      A VueX store module called <code>app</code> is set up to store a theme name, and allow
      components to dispatch <a href="https://vuex.vuejs.org/guide/actions.html">actions</a> that
      will update the theme reference.
    </p>
    <p>
      The <code>App.vue</code> file simply listen to changes in the theme. When a change is
      detected, the compoent will then asynchronously and dynamically load the relevant
      <code>.ts</code> file.
    </p>
    <p>
      The theme's <code>.ts</code> file exports a module containing a key-value pair of CSS
      variable names and their corresponding values. This dictionary is enumerated to set
      all CSS variables contained inside it.
    </p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Theme, ThemeLabel, ThemeName, ThemePropertiesDictionary } from '@/themes/theme.types';
import UIFormControlGroup from '@/components/UIFormControlGroup.vue';
import UIFormLabel from '@/components/UIFormLabel.vue';
import UIFormSelect from '@/components/UIFormSelect.vue';

import { appState } from '@/store/modules/app';

/** @interface */
interface ThemeOption {
  label: string;
  value: ThemeName;
}

@Component({
  name: 'Themeing',
  components: {
    UIFormControlGroup,
    UIFormLabel,
    UIFormSelect,
  },
})
export default class Themeing extends Vue {
  /** @property */
  public get activeTheme(): ThemeName {
    return appState.theme;
  }

  /** @property */
  public set activeTheme(themeName: ThemeName) {
    appState.setTheme(themeName);
  }

  /** @property */
  public get themes(): ThemeOption[] {
    const options: ThemeOption[] = [];

    Object.values(ThemeName).forEach((themeName) => {
      options.push({
        label: ThemeLabel[themeName],
        value: themeName,
      });
    });

    return options;
  }
}
</script>
