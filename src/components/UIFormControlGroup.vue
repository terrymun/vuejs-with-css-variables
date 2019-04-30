<template>
  <div class="form-control-group">
    <div
      class="form-control-group__label"
      v-if="$slots.label">
      <slot name="label"></slot>
    </div>

    <div
      class="form-control-group__control"
      v-if="$slots.default">
      <slot></slot>
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
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
}

.form-control-group__label {
  flex: 0 0 ($base-unit * 25);
  margin-right: $base-unit * 2;
  text-align: right;
}

.form-control-group__control {
  flex: 1 1 ($base-unit * 35);
}

.form-control-group__output {
  margin-left: $base-unit * 2;
}

@media (max-width: 768px) {
  .form-control-group {
    flex-wrap: wrap;
  }

  .form-control-group__label,
  .form-control-group__control {
    flex: 1 1 100%;
  }

  .form-control-group__label {
    margin-right: 0;
    text-align: left;
  }
}
</style>
