<template>
  <div class="form-input">
    <input
      class="form-input__native"
      ref="native"
      type="text"
      v-bind:autocomplete="autocomplete"
      v-bind:spellcheck="spellcheck"
      v-bind:value="value"
      v-on:blur="onBlur"
      v-on:focus="onFocus"
      v-on:input="onInput"
      v-on:keypress.enter="onKeypressEnter" />

    <div
      v-if="$slots.after"
      class="form-input__after">
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'UIFormInput',
})
export default class UIFormInput extends Vue {
  public $el!: HTMLDivElement;

  public $refs!: {
    native: HTMLInputElement,
  };

  @Prop({ type: String })
  public readonly value!: string;

  @Prop({ type: Boolean, default: true })
  public readonly live!: boolean;

  @Prop({ type: String })
  public readonly autocomplete!: string;

  @Prop({ type: String })
  public readonly spellcheck!: string;

  /** @method */
  public onInput(): void {
    if (this.live) {
      this.$emit('input', this.$refs.native.value);
    }
  }

  /** @method */
  @Emit('input')
  public onKeypressEnter(): string {
    return this.$refs.native.value;
  }

  /** @method */
  @Emit('input')
  public onBlur(): string {
    this.$el.classList.remove('is-active');
    return this.$refs.native.value;
  }

  /** @method */
  public onFocus(): void {
    this.$el.classList.add('is-active');
  }
}
</script>

<style lang="scss" scoped>
.form-input {
  --background-color: #fff;
  --text-color: var(--app-text-color);

  display: flex;
  border: 1px solid var(--app-input-border-color);
  border-radius: $base-border-radius;
  background-color: var(--background-color);
  overflow: hidden;

  &.is-active {
    box-shadow: 0 0 ($base-unit * 2) ($base-unit * 0.25) var(--app-input-border-color);
  }
}

.form-input__native {
  display: block;
  height: $base-unit * 5;
  padding: 0 ($base-unit * 2);
  border: none;
  background-color: transparent;
  color: var(--text-color);
  @include font($base-font-size, $base-unit * 5);
  font-family: $base-font-family--monospace;
}

.form-input__after {
  display: flex;
  align-items: center;
  padding: 0 $base-unit;
  color: var(--text-color);
}
</style>
