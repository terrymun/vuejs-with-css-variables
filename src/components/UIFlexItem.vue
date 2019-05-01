<template>
  <div class="flex-item">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueCssStyleObject } from '@/types';

@Component({
  name: 'UIFlexItem',
})
export default class UIFlexItem extends Vue { }
</script>

<style lang="scss" scoped>
.flex-item {
  flex: var(--grow) var(--shrink) var(--basis);
  margin: calc(var(--spacing, 0px) * 0.5) calc(var(--gutter, 0px) * 0.5);
}
</style>
