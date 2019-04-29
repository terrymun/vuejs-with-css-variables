<template>
  <div class="dummy-color-picker">
    <div
      class="dummy-color-picker__canvas"
      ref="canvas"
      v-bind:style="canvasCssStyleObject"
      v-on:click="onClick"
      v-on:mousedown="onMouseDown"
      v-on:mousemove="onMouseMove"
      v-on:mouseup="onMouseUp">
    </div>

    <input
      class="dummy-color-picker__hue-slider"
      type="range"
      min="0"
      max="360"
      step="1"
      v-model.number="hue" />

    <UIFormColorInput
      readonly
      v-bind:value="color" />
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import UIFormColorInput from '@/components/UIFormColorInput.vue';
import tinycolor from 'tinycolor2';
import { clamp } from '@/framework/utils';
import { VueCssStyleObject } from '@/types';

@Component({
  name: 'DummyColorPicker',
  components: {
    UIFormColorInput,
  },
})
export default class DummyColorPicker extends Vue {
  public $refs!: {
    canvas: HTMLDivElement,
  };

  public isDragging: boolean = false;

  public color: string = '#ffffff';

  public hue: number = 0;

  public x: number = 0;

  public y: number = 0;

  /** @property */
  public get canvasCssStyleObject(): VueCssStyleObject {
    return {
      '--color-picker-hue': `hsl(${this.hue}, 100%, 50%)`,
      '--color-picker-cursor-x': `${this.x}px`,
      '--color-picker-cursor-y': `${this.y}px`,
    };
  }

  /** @method */
  public onClick(e: MouseEvent): void {
    this.x = clamp(e.offsetX, 0, this.$refs.canvas.clientWidth);
    this.y = clamp(e.offsetY, 0, this.$refs.canvas.clientHeight);

    this.setColor();
  }

  /** @method */
  public onMouseDown(): void {
    this.isDragging = true;
  }

  /** @method */
  public onMouseMove(e: MouseEvent): void {
    if (this.isDragging) {
      this.x = clamp(e.offsetX, 0, this.$refs.canvas.clientWidth);
      this.y = clamp(e.offsetY, 0, this.$refs.canvas.clientHeight);

      this.setColor();
    }
  }

  /** @method */
  public onMouseUp(): void {
    this.isDragging = false;
  }

  /** @method */
  @Watch('hue')
  private setColor(): void {
    const h = clamp(this.hue, 0, 360);
    const s = this.x / this.$refs.canvas.clientWidth;
    const v = clamp(-(this.y / this.$refs.canvas.clientHeight) + 1, 0, 1);

    this.color = tinycolor({ h, s, v }).toHexString();
  }
}
</script>

<style lang="scss" scoped>
.dummy-color-picker {
  width: $base-unit * 40;
  margin: ($base-unit * 3) 0;
  padding: $base-unit * 2;
  box-shadow: $base-box-shadow;
  background-color: #fff;
}

.dummy-color-picker__canvas {
  position: relative;
  height: $base-unit * 30;
  background-color: var(--color-picker-hue, hsl(0, 100%, 50%));

  // Gradients
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-image:
      linear-gradient(180deg, rgba(#000, 0), rgba(#000, 1)),
      linear-gradient(90deg, rgba(#fff, 1), rgba(#fff, 0));
    content: '';
  }

  // Cursor
  &::after {
    position: absolute;
    top: -$base-unit;
    left: -$base-unit;
    z-index: 2;
    display: block;
    width: $base-unit * 2;
    height: $base-unit * 2;
    border-radius: 50%;
    box-shadow:
      0 0 3px 1px rgba(#000, .5),
      inset 0 0 0 1px #fff;
    content: '';
    transform: translate(
      var(--color-picker-cursor-x, 0),
      var(--color-picker-cursor-y, $base-unit * 30)
    );
  }
}

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

.dummy-color-picker__hue-slider {
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
