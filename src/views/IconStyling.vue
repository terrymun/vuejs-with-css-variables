<template>
  <section>
    <h1>Icon Styling</h1>
    <span class="byline"><router-link to="/">Back</router-link></span>

    <p>
      In some cases, we don&rsquo;t want to create multiple identical icons that differ only in
      their appearances. Here, CSS variables presents itself as a great way to abide by the DRY
      philosophy.
    </p>

    <h2>Updating icon path fills</h2>
    <p>With he example below, a few base colors can be extrapolated into additional
      colors, with color manipulation done using
      <a
        href="https://github.com/bgrins/TinyColor"
        title="TinyColor">TinyColor</a>.
    </p>
    <p>
      Credit: Icon made by
      <a
        href="https://www.freepik.com/"
        title="Freepik">Freepik</a>
      from
      <a
        href="https://www.flaticon.com/"
        title="Flaticon">www.flaticon.com</a>,
      and is licensed by
      <a
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0">CC 3.0 BY</a>.
      The icon has been modified to inject CSS variables into the <code>fill</code> attribute.
    </p>

    <div class="icon-editor">
      <div class="icon-editor__stage">
        <UIIcon
          ref="lightBulbIcon"
          name="lightbulb"
          size="lg"
          v-bind:style="lightBulbIconCssStyleObject" />
      </div>
      <div class="icon-editor__controls">
        <template v-for="(lightBulbIconCssVar, i) in lightBulbIconCssVars">
          <UIFormControlGroup v-bind:key="i">
            <template v-slot:label>
              <UIFormLabel v-bind:for="lightBulbIconCssVar.name">
                {{ prettifyCssVar(lightBulbIconCssVar.name) }}
              </UIFormLabel>
            </template>
            <template v-slot:control>
              <UIFormColorInput
                v-bind:id="lightBulbIconCssVar.name"
                v-model="lightBulbIconCssVar.value" />
            </template>
          </UIFormControlGroup>
        </template>
      </div>
    </div>

    <h2>One more: highlighting grid items</h2>
    <p>
      Let&rsquo;s say we want to use the same icon to indicate a grid-like layout where the
      user may have to interact with. We can then selectively highlight individual grid items
      in the icon to indicate their active states.
    </p>
    <p>
      Disclaimer: The icon below is modified from Google Material icons with CSS variables injected
      into the <code>fill</code> attribute.
    </p>
    <div class="icon-editor">
      <div class="icon-editor__stage">
        <UIIcon
          ref="gridIcon"
          name="dashboard"
          size="lg"
          v-bind:style="gridIconCssStyleObject" />
      </div>
      <div class="icon-editor__controls">
        <div class="grid">
          <div
            class="grid__item"
            contenteditable
            autocomplete="off"
            spellcheck="false"
            v-for="(gridItem, i) in gridItems"
            v-bind:key="i"
            v-bind:class="gridItemCssClassObject(gridItem)"
            v-on:focus="onGridItemFocus(gridItem)"
            v-on:blur="onGridItemBlur">{{ gridItem }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import UIFormControlGroup from '@/components/UIFormControlGroup.vue';
import UIFormLabel from '@/components/UIFormLabel.vue';
import UIFormColorInput from '@/components/UIFormColorInput.vue';
import UIIcon from '@/components/UIIcon.vue';
import { VueCssStyleObject } from '@/types';
import { toSentenceCase } from '@/framework/utils';
import tinycolor from 'tinycolor2';

/** @interface */
interface CssVariable {
  name: string;
  value?: string;
}

/** @enum */
enum GridItemPosition {
  TOP_LEFT = 'topLeft',
  TOP_RIGHT = 'topRight',
  BOTTOM_RIGHT = 'bottomRight',
  BOTTOM_LEFT = 'bottomLeft',
}

@Component({
  name: 'IconStyling',
  components: {
    UIFormControlGroup,
    UIFormLabel,
    UIFormColorInput,
    UIIcon,
  },
})
export default class IconStyling extends Vue {
  public $refs!: {
    lightBulbIcon: UIIcon;
    gridIcon: UIIcon;
  };

  public lightBulbIconCssVars: CssVariable[] = [
    {
      name: '--background',
      value: '#E83709',
    },
    {
      name: '--bulb',
      value: '#F1C40F',
    },
    {
      name: '--base',
      value: '#58301E',
    },
  ];

  public gridItems = Object.values(GridItemPosition);

  public activeGridItem: GridItemPosition | null = null;

  /** @property */
  public get lightBulbIconCssStyleObject(): VueCssStyleObject {
    const style = {} as VueCssStyleObject;

    this.lightBulbIconCssVars.forEach((variable) => {
      const color = tinycolor(variable.value);

      // Set bright variant as base color
      style[variable.name] = color.toString();

      // Set darker variant as shadow color
      style[`${variable.name}--dark`] = color.darken(15).toString();
    });

    return style;
  }

  /** @property */
  public get gridIconCssStyleObject(): VueCssStyleObject {
    return {
      '--top-left-item-fill': this.activeGridItem === GridItemPosition.TOP_LEFT ? '#4682b4' : null,
      '--top-right-item-fill': this.activeGridItem === GridItemPosition.TOP_RIGHT ? '#4682b4' : null,
      '--bottom-right-item-fill': this.activeGridItem === GridItemPosition.BOTTOM_RIGHT ? '#4682b4' : null,
      '--bottom-left-item-fill': this.activeGridItem === GridItemPosition.BOTTOM_LEFT ? '#4682b4' : null,
    };
  }

  /** @method */
  public prettifyCssVar(variableName: string): string {
    return toSentenceCase(variableName.split('-').join(' ').trim());
  }

  /** @method */
  public gridItemCssClassObject(position: GridItemPosition): string {
    return `grid__item--${position}`;
  }

  /** @method */
  public onGridItemFocus(position: GridItemPosition): void {
    this.activeGridItem = position;
  }

  /** @method */
  public onGridItemBlur(): void {
    this.activeGridItem = null;
  }
}
</script>

<style lang="scss">
.icon {
  width: $base-unit * 15;
  height: $base-unit * 15;
  fill: #999;
}

.icon-editor {
  display: flex;
  margin: ($base-unit * 8) 0;
}

.icon-editor__stage {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $base-border-radius;
  padding: 0 $base-unit * 4;
}

.icon-editor__controls {
  flex: 1 1 100%;
}

.grid {
  display: grid;
  grid-template-areas:
    "topLeft topRight"
    "topLeft bottomRight"
    "bottomLeft bottomRight";
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, $base-unit * 15);
  grid-gap: $base-unit * 2;
}

.grid__item {
  padding: $base-unit * 2;
  background-color: #999;
  color: #eee;
  cursor: pointer;

  &:active,
  &:focus {
    background-color: #4682b4;
    transition: $base-transition;
    cursor: text;
  }
}

$gridItemPositions: topLeft topRight bottomRight bottomLeft;

@each $gridItemPosition in $gridItemPositions {
  .grid__item--#{$gridItemPosition} {
    grid-area: $gridItemPosition;
  }
}

@media (max-width: 768px) {
  .icon-editor {
    flex-wrap: wrap;
  }

  .icon-editor__stage,
  .icon-editor__controls {
    width: 100%;
  }

  .icon-editor__stage {
    margin-bottom: $base-unit * 3;
  }
}

@media (orientation: landscape) and (max-width: 812px) {
  .grid {
    grid-template-rows: repeat(3, 1fr);
    height: 75vh;
  }
}
</style>
