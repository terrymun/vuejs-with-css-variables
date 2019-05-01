<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'UIGrid',
})
export default class UIGrid extends Vue {

}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(var(--column-count, 12), 1fr);
  grid-auto-rows: minmax($base-unit * 15, auto);
  grid-gap: var(--grid-gap, $base-unit * 4);
  margin: ($base-unit * 4) 0;
}
</style>
