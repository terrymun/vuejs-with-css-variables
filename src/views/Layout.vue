<template>
  <div class="layout">
    <h1>Layout</h1>
    <span class="byline"><router-link to="/">Back</router-link></span>

    <h2>Inheritance with atomic design</h2>
    <p>
      We can take advantage of the cascading behavior of CSS variables and avoid having to
      iteratively pass down styling-related properties. An example will be a configurable
      flexbox container whose gutter widths can be adjusted.
    </p>

    <div class="wrapper">
      <UIFlexBox class="controls">
        <UIFlexItem>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Gutter</UIFormLabel>
            </template>
            <UIFormNumberInput
              v-model="gutter"
              min="0"
              step="8" />
          </UIFormControlGroup>
        </UIFlexItem>
        <UIFlexItem>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Spacing</UIFormLabel>
            </template>
            <UIFormNumberInput
              v-model="spacing"
              min="0"
              step="8" />
          </UIFormControlGroup>
        </UIFlexItem>
        <UIFlexItem>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Grow</UIFormLabel>
            </template>
            <UIFormNumberInput
              v-model="grow"
              min="0" />
          </UIFormControlGroup>
        </UIFlexItem>
        <UIFlexItem>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Shrink</UIFormLabel>
            </template>
            <UIFormNumberInput
              v-model="shrink"
              min="0" />
          </UIFormControlGroup>
        </UIFlexItem>
        <UIFlexItem>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Basis</UIFormLabel>
            </template>
            <UIFormInput v-model="basis" />
          </UIFormControlGroup>
        </UIFlexItem>
      </UIFlexBox>
    </div>

    <div class="wrapper">
      <UIFlexBox
        class="demo-flex-box"
        v-bind:style="demoFlexBoxCssStyleObject">
        <UIFlexItem class="demo-flex-item">Lorem</UIFlexItem>
        <UIFlexItem class="demo-flex-item">Ipsum</UIFlexItem>
        <UIFlexItem class="demo-flex-item">Dolor</UIFlexItem>
        <UIFlexItem class="demo-flex-item">Sit</UIFlexItem>
        <UIFlexItem class="demo-flex-item">Amet</UIFlexItem>
        <UIFlexItem class="demo-flex-item">Consectetur</UIFlexItem>
        <UIFlexItem class="demo-flex-item">Adipiscing</UIFlexItem>
        <UIFlexItem class="demo-flex-item">Elit</UIFlexItem>
        <UIFlexItem class="demo-flex-item">Donec</UIFlexItem>
        <UIFlexItem class="demo-flex-item">Condimentum</UIFlexItem>
        <UIFlexItem class="demo-flex-item">Magna</UIFlexItem>
        <UIFlexItem class="demo-flex-item">Quisque</UIFlexItem>
        <UIFlexItem class="demo-flex-item">Sollicitudin</UIFlexItem>
        <UIFlexItem class="demo-flex-item">Ullamcorper</UIFlexItem>
        <UIFlexItem class="demo-flex-item">Lorem</UIFlexItem>
        <UIFlexItem class="demo-flex-item">Ipsum</UIFlexItem>
        <UIFlexItem class="demo-flex-item">Dolor</UIFlexItem>
        <UIFlexItem class="demo-flex-item">Sit</UIFlexItem>
        <UIFlexItem
          class="demo-flex-item is-target"
          v-bind:style="targetFlexItemCssStyleObject">Target child</UIFlexItem>
      </UIFlexBox>
    </div>

    <p>
      Since CSS variables are inherited all the down to the flex child, we can override inherited
      values on a specific item should we wish to:
    </p>

    <div class="wrapper is-target">
      <UIFlexBox class="controls">
        <UIFlexItem>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Grow</UIFormLabel>
            </template>
            <UIFormNumberInput
              v-model="targetFlexChildGrow"
              min="0" />
          </UIFormControlGroup>
        </UIFlexItem>
        <UIFlexItem>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Shrink</UIFormLabel>
            </template>
            <UIFormNumberInput
              v-model="targetFlexChildShrink"
              min="0" />
          </UIFormControlGroup>
        </UIFlexItem>
        <UIFlexItem>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Basis</UIFormLabel>
            </template>
            <UIFormInput v-model="targetFlexChildBasis" />
          </UIFormControlGroup>
        </UIFlexItem>
      </UIFlexBox>
    </div>

    <h2>Customizable CSS grids</h2>
    <p>
      Another application of CSS variables is to not only (1) use it to set sane defaults for
      grid-based layouts, but also to (2) allow the grid parent to specify its own internal
      arrangement of grid children by proxy/inheritance.
    </p>

    <div class="wrapper">
      <UIFlexBox class="controls">
        <UIFlexItem>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Grid gap</UIFormLabel>
            </template>
            <UIFormNumberInput
              v-model="gridGap"
              min="0"
              step="8" />
          </UIFormControlGroup>

          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Column count</UIFormLabel>
            </template>
            <UIFormNumberInput
              v-model="columnCount"
              min="1" />
          </UIFormControlGroup>
        </UIFlexItem>

        <UIFlexItem>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Image start</UIFormLabel>
            </template>
            <UIFormNumberInput
              v-model="imageStart"
              min="1"
              v-bind:max="columnCount + 1" />
          </UIFormControlGroup>

          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Image end</UIFormLabel>
            </template>
            <UIFormNumberInput
              v-model="imageEnd"
              min="1"
              v-bind:max="columnCount + 1" />
          </UIFormControlGroup>
        </UIFlexItem>

        <UIFlexItem>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Text start</UIFormLabel>
            </template>
            <UIFormNumberInput
            v-model="textStart"
              min="1"
              v-bind:max="columnCount + 1" />
          </UIFormControlGroup>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Text end</UIFormLabel>
            </template>
            <UIFormNumberInput
              v-model="textEnd"
              min="1"
              v-bind:max="columnCount + 1" />
          </UIFormControlGroup>
        </UIFlexItem>
      </UIFlexBox>
    </div>

    <UIGrid
      v-bind:style="gridCssStyleObject">
      <UIGridItem type="image">
        <img src="https://source.unsplash.com/Bs-zngH79Ds/800x400" />
      </UIGridItem>
      <UIGridItem>
        <h3>Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum sollicitudin
          tortor quis porttitor. Suspendisse varius nulla ut est tincidunt fermentum. Quisque
          imperdiet ultrices elit vel auctor.
        </p>
        <p>
          Nunc pretium porttitor arcu, non efficitur lacus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus nisi nunc, tincidunt id metus ut, tristique consequat metus.
        </p>
      </UIGridItem>

      <UIGridItem
        type="image"
        v-bind:style="heroImageCssStyleObject">
        <img src="https://source.unsplash.com/oCyMED0yyck/1200x500" />
      </UIGridItem>
    </UIGrid>

    <p>
      The hero image above here is specifically targeted so that we can directly manipulate its
      <code>grid-column</code> value:
    </p>

    <div class="wrapper is-target">
      <UIFlexBox class="controls">
        <UIFlexItem>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Hero image start</UIFormLabel>
            </template>
            <UIFormNumberInput
              v-model="heroImageStart"
              min="1"
              v-bind:max="columnCount + 1" />
          </UIFormControlGroup>
        </UIFlexItem>
        <UIFlexItem>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Hero image end</UIFormLabel>
            </template>
            <UIFormNumberInput
              v-model="heroImageEnd"
              min="1"
              v-bind:max="columnCount + 1" />
          </UIFormControlGroup>
        </UIFlexItem>
      </UIFlexBox>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UIFlexBox from '@/components/UIFlexBox.vue';
import UIFlexItem from '@/components/UIFlexItem.vue';
import UIGrid from '@/components/UIGrid.vue';
import UIGridItem from '@/components/UIGridItem.vue';
import UIFormControlGroup from '@/components/UIFormControlGroup.vue';
import UIFormLabel from '@/components/UIFormLabel.vue';
import UIFormInput from '@/components/UIFormInput.vue';
import UIFormNumberInput from '@/components/UIFormNumberInput.vue';
import { Nullable, VueCssStyleObject } from '@/types';
import { clamp } from '@/framework/utils';

@Component({
  name: 'Layout',
  components: {
    UIFlexBox,
    UIFlexItem,
    UIGrid,
    UIGridItem,
    UIFormControlGroup,
    UIFormLabel,
    UIFormInput,
    UIFormNumberInput,
  },
})
export default class Layout extends Vue {
  public gutter: number = 16;

  public spacing: number = 16;

  public grow: number = 1;

  public shrink: number = 1;

  public basis: string = 'auto';

  public targetFlexChildGrow: number = 1;

  public targetFlexChildShrink: number = 1;

  public targetFlexChildBasis: string = 'auto';

  public gridGap: number = 32;

  public columnCount: number = 12;

  public imageStart: number = 1;

  public imageEnd: number = 7;

  public heroImageStart: number = 2;

  public heroImageEnd: number = 12;

  public textStart: number = 7;

  public textEnd: number = 13;

  /** @property */
  public get demoFlexBoxCssStyleObject(): VueCssStyleObject {
    return {
      '--gutter': `${this.gutter}px`,
      '--spacing': `${this.spacing}px`,
      '--grow': `${this.grow}`,
      '--shrink': `${this.shrink}`,
      '--basis': `${this.basis}`,
      '--wrap': 'wrap',
    };
  }

  /** @property */
  public get targetFlexItemCssStyleObject(): VueCssStyleObject {
    return {
      '--grow': `${this.targetFlexChildGrow}`,
      '--shrink': `${this.targetFlexChildShrink}`,
      '--basis': `${this.targetFlexChildBasis}`,
    };
  }

  /** @property */
  public get gridCssStyleObject(): VueCssStyleObject {
    const { columnCount } = this;
    const maxGridLine = columnCount + 1;

    return {
      '--grid-gap': `${clamp(this.gridGap, 0, Infinity)}px`,
      '--column-count': `${columnCount}`,
      '--image-start': `${clamp(this.imageStart, 1, maxGridLine)}`,
      '--image-end': `${clamp(this.imageEnd, 1, maxGridLine)}`,
      '--text-start': `${clamp(this.textStart, 1, maxGridLine)}`,
      '--text-end': `${clamp(this.textEnd, 1, maxGridLine)}`,
    };
  }

  /** @property */
  public get heroImageCssStyleObject(): VueCssStyleObject {
    return {
      '--image-start': `${this.heroImageStart}`,
      '--image-end': `${this.heroImageEnd}`,
    };
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: ($base-unit * 3) 0;
  overflow: hidden;
}

h3 {
  margin-top: 0;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.controls {
  --gutter: #{$base-unit * 2};
  --grow: 1;
  --shrink: 1;
  --basis: 100%;
}

.demo-flex-box {
  background: repeating-linear-gradient(
    -45deg,
    var(--app-input-border-color),
    var(--app-input-border-color) $base-unit,
    transparent $base-unit,
    transparent ($base-unit * 2)
  );
}

.demo-flex-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $base-unit ($base-unit * 2);
  border-radius: $base-border-radius;
  background-color: var(--app-text-color);
  color: var(--app-background-color);
  @include font($base-font-size--sm, $base-line-height);
  font-weight: bold;
  text-align: center;

  &.is-target {
    background-color: $base-color-red;
    color: #fff;
    padding: 0;
  }
}

.is-target {
  padding: $base-unit * 2;
  border-radius: $base-border-radius;
  background-color: $base-color-red;
  color: #fff;
}
</style>
