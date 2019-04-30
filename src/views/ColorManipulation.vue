<template>
  <div class="color-manipulation">
    <h1>Color manipulation</h1>
    <span class="byline"><router-link to="/">Back</router-link></span>

    <p>
      This isn't an example specific to VueJS, as the color variables are provided in
      fragments&mdash;namely <strong>hue</strong>, <strong>saturation</strong>, and
      <strong>lightness</strong> (HSV colors). VueJS is simply used to set these values from
      user input.
    </p>

    <div class="grid">
      <div class="grid__item">
        <div
          class="box"
          v-bind:style="boxStyleObject"></div>
        Solid
      </div>
      <div class="grid__item">
        <div
          class="box box--hue-shifted"
          v-bind:style="boxStyleObject"></div>
        Hue-shifted
      </div>
      <div class="grid__item">
        <div
          class="box box--shaded"
          v-bind:style="boxStyleObject"></div>
        Shaded
      </div>
      <div class="grid__item">
        <div
          class="box box--lightened"
          v-bind:style="boxStyleObject"></div>
        Lightened
      </div>
    </div>

    <UIFormControlGroup>
      <template v-slot:label>
        <UIFormLabel>Hue</UIFormLabel>
      </template>

      <UIHueSlider v-model="hue" />
    </UIFormControlGroup>

    <UIFormControlGroup>
      <template v-slot:label>
        <UIFormLabel>Saturation</UIFormLabel>
      </template>

      <UIFormSlider
        v-model="saturation"
        v-bind:min="0"
        v-bind:max="100" />
    </UIFormControlGroup>

    <UIFormControlGroup>
      <template v-slot:label>
        <UIFormLabel>Lightness</UIFormLabel>
      </template>

      <UIFormSlider
        v-model="lightness"
        v-bind:min="0"
        v-bind:max="100" />
    </UIFormControlGroup>

    <p>
      The shaded and lightened boxes simply have a linear gradient as their background image. The
      shaded/lightened colors are calculated by means of using <code>calc()</code>, e.g.:
    </p>

    <pre><code>--h-shifted: calc(var(--h) + 30);
--l-shaded: calc(var(--l) - 25%);
--l-lightened: calc(var(--l) + 35%);</code></pre>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import UIFormControlGroup from '@/components/UIFormControlGroup.vue';
import UIFormSlider from '@/components/UIFormSlider.vue';
import UIHueSlider from '@/components/UIHueSlider.vue';
import { VueCssStyleObject } from '@/types';

@Component({
  name: 'ColorManipulation',
  components: {
    UIFormControlGroup,
    UIFormSlider,
    UIHueSlider,
  },
})
export default class ColorManipulation extends Vue {
  public $el!: HTMLElement;

  public hue: number = 0;

  public saturation: number = 100;

  public lightness: number = 50;

  /** @property */
  public get boxStyleObject(): VueCssStyleObject {
    return {
      '--h': `${this.hue}`,
      '--s': `${this.saturation}%`,
      '--l': `${this.lightness}%`,
    };
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ($base-unit * 3) 0;
}

.grid__item {
  margin: 0 auto;
  font-weight: bold;
  text-align: center;
}

.box {
  width: 15vmin;
  height: 15vmin;
  margin-bottom: $base-unit * 2;
  border-radius: 50%;
  box-shadow: $base-box-shadow;
  background-color: hsl(var(--h, 0), var(--s, 0%), var(--l, 0%));
}

.box--hue-shifted {
  --h-shifted: calc(var(--h) + 30);
  background-color: hsl(var(--h-shifted, 0), var(--s, 0%), var(--l, 0%));
}

.box--shaded {
  --l-shaded: calc(var(--l) - 25%);
  background-image:  linear-gradient(
    45deg,
    hsl(var(--h, 0), var(--s, 0%), var(--l, 0%)) 15%,
    hsl(var(--h, 0), var(--s, 0%), var(--l-shaded, 0%)) 85%,
  );
}

.box--lightened {
  --l-lightened: calc(var(--l) + 35%);
  background-image: linear-gradient(
    45deg,
    hsl(var(--h, 0), var(--s, 0%), var(--l, 0%)) 15%,
    hsl(var(--h, 0), var(--s, 0%), var(--l-lightened, 0%)) 85%,
  );
}
</style>
