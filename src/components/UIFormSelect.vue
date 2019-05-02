<template>
  <select
    class="form-select"
    v-bind:value="value"
    v-on:input="onInput">
    <slot></slot>
  </select>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'UIFormSelect',
})
export default class UIFormSelect extends Vue {
  public $el!: HTMLSelectElement;

  @Prop({ type: String })
  public readonly value!: string;

  /** @method */
  @Emit('input')
  public onInput(): string {
    return this.$el.value;
  }
}
</script>

<style lang="scss" scoped>
.form-select {
  width: 100%;
  height: $base-unit * 5;
  padding: 0 ($base-unit * 5) 0 ($base-unit * 2);
  border: 1px solid var(--app-input-border-color);
  border-radius: $base-border-radius;
  appearance: none;
  background-color: #fff;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position: center right;
  color: var(--app-input-text-color);
  @include font($base-font-size, $base-unit * 5);
  transition: $base-transition;
  outline: none;

  &:-moz-focusring {
    color: transparent;  /* hides that darn border... and the options */
    text-shadow: 0 0 0 #000;   /* "unhide" the options */
  }

  &:active,
  &:focus {
    box-shadow: 0 0 ($base-unit * 2) ($base-unit * 0.25) var(--app-input-border-color);
  }
}
</style>
