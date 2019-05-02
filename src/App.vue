<template>
  <main
    id="app"
    v-bind:style="rootCssStyleObject">
    <router-view/>

    <footer>
      By <a href="https://github.com/terrymun">Terry Mun</a> &middot; 2018.
      See the <a href="https://github.com/terrymun/vuejs-with-css-variables">GitHub repo</a>.
    </footer>
  </main>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { Theme, ThemeName, ThemePropertiesDictionary } from '@/themes/theme.types';

import { appState } from '@/store/modules/app';

@Component({
  name: 'App',
})
export default class App extends Vue {
  public readonly $el!: HTMLElement;

  public isThemeReady: boolean = false;

  /** @property */
  public get theme(): ThemeName {
    return appState.theme;
  }

  /** @property */
  public get rootCssStyleObject(): Partial<CSSStyleDeclaration> {
    const style: Partial<CSSStyleDeclaration> = {};

    if (this.isThemeReady) {
      style.opacity = '1';
    }

    return style;
  }

  /** @method - lifecycle hook */
  public created(): void {
    this.setTheme().then(() => {
      this.isThemeReady = true;
    });
  }

  /** @method - watcher */
  @Watch('theme')
  public onThemeChange(): void {
    this.setTheme();
  }

  /** @method */
  public async setTheme(): Promise<void> {
    return import(/* webpackChunkName: "theme" */ `@/themes/${this.theme}.ts`).then((module) => {
      const theme = module.default as Theme;

      Object.entries(ThemePropertiesDictionary).forEach((entry) => {
        const key = entry[0];
        const property = entry[1];

        this.$el.style.setProperty(property, theme[key]);
      });
    });
  }
}
</script>

<style lang="scss">
@import "@/styles/_reset.scss";
@import "@/styles/_typography.scss";

* {
  box-sizing: border-box;
}

#app {
  position: relative;
  min-height: 100vh;
  padding: ($base-unit * 8) ($base-unit * 10);
  background-color: var(--app-background-color);
  color: var(--app-text-color);
  opacity: 0;
  transition: $base-transition;
}

footer {
  position: absolute;
  bottom: 0;
  margin: 0 (-$base-unit * 10);
  padding: ($base-unit * 2) ($base-unit * 10);
  color: var(--app-text-color);
  @include font($base-font-size--sm, $base-line-height);
}

@media (max-width: 400px) {
  #app {
    padding: ($base-unit * 4) ($base-unit * 6);
  }

  footer {
    padding: ($base-unit * 2) ($base-unit * 6);
  }
}
</style>
