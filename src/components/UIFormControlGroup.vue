<template>
  <div class="form-control-group">
    <div
      class="form-control-group__label"
      v-if="$slots.label">
      <slot name="label"></slot>
    </div>

    <div
      class="form-control-group__control"
      v-if="$slots.control">
      <slot name="control"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'UIFormControlGroup',
})
export default class UIFormControlGroup extends Vue {

}
</script>

<style lang="scss" scoped>
.form-control-group {
  display: flex;
  align-items: center;
  margin-bottom: $base-unit * 2;

  &:last-child {
    margin-bottom: 0;
  }
}

.form-control-group__label {
  flex: 0 0 ($base-unit * 25);
  margin-right: $base-unit * 2;
}

.form-control-group__control {
  flex: 0 0 auto;
}

.form-control-group__output {
  margin-left: $base-unit * 2;
}
</style>
