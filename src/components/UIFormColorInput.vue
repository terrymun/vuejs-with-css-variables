<template>
  <div class="color-input">
    <input
      type="color"
      class="color-input__native"
      ref="native"
      v-bind:id="id"
      v-bind:readonly="readonly"
      v-bind:value="color"
      v-on:input="onColorInput" />
    <UIFormInput
      ref="textInput"
      autocomplete="off"
      spellcheck="false"
      v-bind:readonly="readonly"
      v-bind:value="color"
      v-bind:live="false"
      v-on:input="onTextInput">
      <template
        v-slot:after
        v-if="!readonly">
        <UIFormLabel v-bind:for="id">
          <UIIcon name="colorpicker" />
        </UIFormLabel>
      </template>
    </UIFormInput>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Watch, Vue } from 'vue-property-decorator';
import UIFormInput from '@/components/UIFormInput.vue';
import UIFormLabel from '@/components/UIFormLabel.vue';
import UIIcon from '@/components/UIIcon.vue';
import tinycolor from 'tinycolor2';
import { ColorPickerIcon } from '@/assets/icons';

let count = 0;

@Component({
  name: 'UIFormColorInput',
  components: {
    UIFormInput,
    UIFormLabel,
    UIIcon,
    ColorPickerIcon,
  },
})
export default class UIFormColorInput extends Vue {
  public $refs!: {
    native: HTMLInputElement;
    textInput: UIFormInput;
  };

  @Prop({ type: String, default: '#000' })
  public readonly value!: string;

  @Prop({ type: Boolean })
  public readonly readonly!: boolean;

  @Prop({
    type: String,
    default: () => {
      count += 1;
      return `UIFormColorInput__${count}`;
    },
  })
  public readonly id!: string;

  /** @property */
  public get color(): string {
    return tinycolor(this.value).toString();
  }

  /** @method - lifecycle hook */
  public mounted(): void {
    this.onColorChange();
  }

  /** @method - watcher */
  @Watch('color')
  public onColorChange(): void {
    const color = tinycolor(this.color);
    const textColor = color.isDark() ? '#fff' : '#000';

    this.$refs.textInput.$el.style.setProperty('--background-color', color.toString());
    this.$refs.textInput.$el.style.setProperty('--app-input-text-color', textColor);
  }

  /** @method */
  @Emit('input')
  public onColorInput(e: Event): string {
    const color = tinycolor((e.currentTarget as HTMLInputElement).value);
    return color.toString();
  }

  /** @method */
  @Emit('input')
  public onTextInput(data: string): string {
    return tinycolor(data).toString();
  }

  /** @method */
  public onClick(): void {
    this.$refs.native.focus();
  }
}
</script>

<style lang="scss" scoped>
.color-input {
  display: flex;
}

.color-input__native {
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  border: 0;
  appearance: none;
  visibility: hidden;
  opacity: 0;
}
</style>
