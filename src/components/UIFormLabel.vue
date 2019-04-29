<template>
  <label class="form-label">
    <slot></slot>
  </label>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'UIFormLabel',
})
export default class UIFormLabel extends Vue {

}
</script>

<style lang="scss" scoped>
.form-label {
  display: block;
  @include font($base-font-size--sm, $base-line-height);
  font-weight: bold;
  opacity: 0.75;
  letter-spacing: 2px;
  text-transform: uppercase;

  &[for] {
    cursor: pointer;
  }
}
</style>
