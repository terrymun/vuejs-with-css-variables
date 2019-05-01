<template>
  <div
    class="flex-box"
    v-bind:style="rootCssStyleObject">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueCssStyleObject } from '@/types';
import { dictionaryValueChecker } from '@/framework/utils';

/** @enum */
export enum Direction {
  ROW = 'row',
  COLUMN = 'column',
}

@Component({
  name: 'UIFlexBox',
})
export default class UIFlexBox extends Vue {
  @Prop({ type: String, default: 'nowrap' })
  public readonly wrap!: string;

  @Prop({ type: Number, default: 16 })
  public readonly gutter!: number;

  @Prop({ type: Number, default: 16 })
  public readonly spacing!: number;

  @Prop({ type: String, default: Direction.ROW, validator: dictionaryValueChecker(Direction) })
  public readonly direction!: Direction;

  public get rootCssStyleObject(): VueCssStyleObject {
    return {
      '--gutter': `${this.gutter}px`,
      '--spacing': `${this.spacing}px`,
      flexDirection: this.direction,
      flexWrap: this.wrap,
      height: this.direction === Direction.ROW ? 'auto' : '75vh',
    };
  }
}
</script>

<style lang="scss" scoped>
.flex-box {
  display: flex;
  margin: calc(var(--spacing) * -0.5) calc(var(--gutter) * -0.5);
}
</style>
