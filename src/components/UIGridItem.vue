<template>
  <component
    class="grid__item"
    v-bind:is="tag"
    v-bind:class="rootCssClassObject">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueCssClassObject } from '@/types';
import { dictionaryValueChecker } from '@/framework/utils';

/** @enum */
export enum ItemType {
  TEXT = 'text',
  IMAGE = 'image',
}

@Component({
  name: 'UIGridItem',
})
export default class UIGridItem extends Vue {
  @Prop({ type: String, default: ItemType.TEXT, validator: dictionaryValueChecker(ItemType) })
  public readonly type!: ItemType;

  /** @property */
  public get tag(): string {
    switch (this.type) {
      case ItemType.IMAGE:
        return 'figure';

      default:
        return 'div';
    }
  }

  /** @property */
  public get rootCssClassObject(): VueCssClassObject {
    return {
      'grid__item--image': this.type === ItemType.IMAGE,
      'grid__item--text': this.type === ItemType.TEXT,
    };
  }
}
</script>

<style lang="scss" scoped>
.grid__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.grid__item--image {
  grid-column: var(--image-start, 1) / var(--image-end, 7);
}

.grid__item--text {
  grid-column: var(--text-start, 7) / var(--text-end, 13);
}
</style>
