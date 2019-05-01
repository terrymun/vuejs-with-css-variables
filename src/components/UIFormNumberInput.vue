<template>
  <input
    class="form-number-input"
    ref="native"
    type="number"
    v-bind:value="value"
    v-on:blur="onBlur"
    v-on:focus="onFocus"
    v-on:input="onInput"
    v-on:keypress.enter="onKeypressEnter" />
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'UIFormNumberInput',
})
export default class UIFormNumberInput extends Vue {
  public $el!: HTMLDivElement;

  public $refs!: {
    native: HTMLInputElement,
  };

  @Prop({ type: Number })
  public readonly value!: number;

  @Prop({ type: Boolean, default: true })
  public readonly live!: boolean;

  @Prop({ type: String })
  public readonly autocomplete!: string;

  @Prop({ type: Boolean })
  public readonly readonly!: boolean;

  @Prop({ type: String })
  public readonly spellcheck!: string;

  /** @method */
  public onInput(): void {
    if (this.live) {
      this.$emit('input', +this.$refs.native.value);
    }
  }

  /** @method */
  @Emit('input')
  public onKeypressEnter(): number {
    return +this.$refs.native.value;
  }

  /** @method */
  @Emit('input')
  public onBlur(): number {
    this.$el.classList.remove('is-active');
    return +this.$refs.native.value;
  }

  /** @method */
  public onFocus(): void {
    this.$el.classList.add('is-active');
  }
}
</script>

<style lang="scss" scoped>
.form-number-input {
  --background-color: #fff;
  --text-color: var(--app-text-color);

  display: flex;
  width: 100%;
  height: $base-unit * 5;
  padding: 0 ($base-unit * 2);
  border: 1px solid var(--app-input-border-color);
  border-radius: $base-border-radius;
  background-color: var(--background-color);
  color: var(--text-color);
  @include font($base-font-size, $base-unit * 5);
  font-family: $base-font-family--monospace;
  overflow: hidden;

  &.is-active {
    box-shadow: 0 0 ($base-unit * 2) ($base-unit * 0.25) var(--app-input-border-color);
  }
}
</style>
