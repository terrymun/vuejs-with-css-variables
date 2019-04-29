<template>
  <component
    class="icon"
    v-bind:is="icon"
    v-bind:class="rootCssClassObject" />
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { Dictionary } from '@/types';
import { dictionaryValueChecker } from '@/framework/utils';

/** @enum */
export enum IconSize {
  LARGE = 'lg',
}

@Component({
  name: 'UIIcon',
})
export default class UIIcon extends Vue {
  public $el!: SVGElement;

  @Prop({ type: String })
  public readonly name!: string;

  @Prop({ type: String, validator: dictionaryValueChecker(IconSize) })
  public readonly size!: string;

  /** @property */
  public get rootCssClassObject(): Dictionary<boolean> {
    return {
      'icon--size-lg': this.size === 'lg',
    };
  }

  /** @method - lifecycle hook */
  public mounted(): void {
    this.icon().then(() => {
      this.$nextTick(() => {
        this.$emit('ready');
      });
    });
  }

  /** @method */
  public icon(): Promise<void> {
    return import(/* webpackChunkName: "icon" */ `@/assets/icons/${this.name}.icon.svg`).then(module => module.default);
  }
}
</script>

<style lang="scss" scoped>
.icon {
  display: block;
  width: $base-unit * 3;
  height: $base-unit * 3;
  fill: currentColor;
}

.icon--size-lg {
  width: $base-unit * 12;
  height: $base-unit * 12;
}
</style>
