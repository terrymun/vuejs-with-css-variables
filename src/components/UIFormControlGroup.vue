<template>
  <div
    class="form-control-group"
    v-bind:class="rootCssClassObject">
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
import { Component, Prop, Vue } from 'vue-property-decorator';
import { dictionaryValueChecker } from '@/framework/utils';
import { VueCssClassObject } from '@/types';

/** @enum */
export enum Width {
  FULL = 'full',
  NORMAL = 'normal',
}

/** @enum */
export enum Layout {
  GRID = 'grid',
  STACKED = 'stacked',
}

@Component({
  name: 'UIFormControlGroup',
})
export default class UIFormControlGroup extends Vue {
  @Prop({ type: String, default: Width.NORMAL, validator: dictionaryValueChecker(Width) })
  public readonly width!: Width;

  @Prop({ type: String, default: Layout.GRID, validator: dictionaryValueChecker(Layout) })
  public readonly layout!: Layout;

  /** @property */
  public get rootCssClassObject(): VueCssClassObject {
    return {
      'width--normal': this.width === Width.NORMAL,
      'width--full': this.width === Width.FULL,
      'layout--grid': this.layout === Layout.GRID,
      'layout--stacked': this.layout === Layout.STACKED,
    };
  }
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

  // Modifier: full width
  &.width--full {
    .form-control-group__control {
      flex-grow: 1;
    }
  }

  // Modifier: stacked
  &.layout--stacked {
    display: block;

    .form-control-group__label {
      text-align: left;
    }
  }
}

.form-control-group__label {
  flex: 0 0 ($base-unit * 25);
  margin-right: $base-unit * 2;
  text-align: right;
}

.form-control-group__control {
  flex: 0 1 ($base-unit * 25);
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
