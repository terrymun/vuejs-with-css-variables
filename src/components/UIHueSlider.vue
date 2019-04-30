<template>
  <input
    class="hue-slider"
    type="range"
    min="0"
    max="360"
    step="1"
    v-bind:value="value"
    v-on:input="onInput" />
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'UIHueSlider',
})
export default class UIHueSlider extends Vue {
  public $el!: HTMLInputElement;

  @Prop({ type: Number, required: true })
  public readonly value!: number;

  /** @method */
  @Emit('input')
  public onInput(): number {
    return +this.$el.value;
  }
}
</script>

<style lang="scss" scoped>
@mixin track() {
  width: 100%;
  height: $base-unit * 2;
  border-radius: $base-border-radius;
  background-image:
    linear-gradient(
      90deg,
      #f00,
      #ff0 17%,
      #0f0 33%,
      #0ff 50%,
      #00f 67%,
      #f0f 83%,
      #f00
    );
  cursor: pointer;
}

@mixin thumb() {
  width: $base-unit;
  height: $base-unit * 3;
  margin-top: -$base-unit * 0.5;
  border: 1px solid rgba(#000, .25);
  border-radius: $base-border-radius;
  box-shadow: $base-box-shadow;
  appearance: none;
  background-color: #fff;
}

.hue-slider {
  width: 100%;
  height: $base-unit * 3;
  margin: $base-unit * 2 0;
  border-radius: $base-border-radius;
  appearance: none;
  background: transparent;

  &::-moz-range-track {
    @include track();
  }
  &::-ms-track {
    @include track();
  }
  &::-webkit-slider-runnable-track {
    @include track();
  }

  &::-moz-range-thumb {
    @include thumb();
  }
  &::-ms-thumb {
    @include thumb();
  }
  &::-webkit-slider-thumb {
    @include thumb();
  }
}
</style>
