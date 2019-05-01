<template>
  <div
    class="flex-item"
    v-bind:style="rootCssStyleObject">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueCssStyleObject } from '@/types';

@Component({
  name: 'UIFlexItem',
})
export default class UIFlexItem extends Vue {
  @Prop({ type: String, default: '1' })
  public readonly grow!: string;

  @Prop({ type: String, default: '0' })
  public readonly shrink!: string;

  @Prop({ type: String, default: 'auto' })
  public readonly basis!: string;

  /** @property */
  public get rootCssStyleObject(): VueCssStyleObject {
    return {
      flex: `${this.grow} ${this.shrink} ${this.basis}`,
    };
  }
}
</script>

<style lang="scss" scoped>
.flex-item {
  margin: calc(var(--spacing) * 0.5) calc(var(--gutter) * 0.5);
}
</style>
