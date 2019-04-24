<template>
  <div
    id="app"
    v-bind:style="rootCssStyleObject">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'App',
})
export default class App extends Vue {
  public readonly $el!: HTMLElement;

  public readonly theme: string = 'light';

  public isThemeReady: boolean = false;

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
    import(/* webpackChunkName: "theme" */ `@/themes/${this.theme}.ts`).then((module) => {
      const theme = module.default as { [key: string]: string };
      const properties = module.ThemeProperties as { [key: string]: string };

      Object.entries(properties).forEach((entry) => {
        const key = entry[0];
        const property = entry[1];

        this.$el.style.setProperty(property, theme[key]);
      });

      this.isThemeReady = true;
    });
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  padding: ($base-unit * 8) ($base-unit * 10);
  background-color: var(--background-color);
  color: var(--text-color);
  opacity: 0;
  transition: $base-transition;
}
</style>
