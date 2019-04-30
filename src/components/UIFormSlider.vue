<template>
  <input
    class="form-slider"
    type="range"
    v-bind:min="min"
    v-bind:max="max"
    v-bind:step="step"
    v-bind:value="value"
    v-on:input="onInput" />
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'UIFormSlider',
})
export default class UIFormSlider extends Vue {
  public $el!: HTMLInputElement;

  @Prop({ type: Number, required: true })
  public readonly value!: number;

  @Prop({ type: Number, default: -Infinity })
  public readonly min!: number;

  @Prop({ type: Number, default: Infinity })
  public readonly max!: number;

  @Prop({ type: Number, default: 1 })
  public readonly step!: number;

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
  background-color: var(--app-input-border-color);
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

.form-slider {
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
