<template>
  <div class="flex-box">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueCssStyleObject } from '@/types';
import { dictionaryValueChecker } from '@/framework/utils';

@Component({
  name: 'UIFlexBox',
})
export default class UIFlexBox extends Vue { }
</script>

<style lang="scss" scoped>
.flex-box {
  display: flex;
  flex: var(--grow, 0) var(--shrink, 1) var(--basis, auto);
  flex-wrap: var(--wrap, nowrap);
  margin: calc(var(--spacing, 0px) * -0.5) calc(var(--gutter, 0px) * -0.5);
}
</style>
