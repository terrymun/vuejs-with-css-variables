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
      <UIFlexBox>
        <UIFlexItem>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Gutter</UIFormLabel>
            </template>
            <UIFormNumberInput v-model="gutter" />
          </UIFormControlGroup>
        </UIFlexItem>
        <UIFlexItem>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Spacing</UIFormLabel>
            </template>
            <UIFormNumberInput v-model="spacing" />
          </UIFormControlGroup>
        </UIFlexItem>
        <UIFlexItem>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Direction</UIFormLabel>
            </template>
            <UIFormSelect v-model="direction">
              <option
                v-for="(direction, i) in directions"
                v-bind:key="i">
                {{ direction }}
              </option>
            </UIFormSelect>
          </UIFormControlGroup>
        </UIFlexItem>
      </UIFlexBox>
    </div>

    <p v-if="shouldShowHeightNotice">
      As flexbox will only behave as expected if an explicit height is given when using
      <code>flex-direction: column</code>, a height of <code>75vh</code> is given to the element
      when viewing in column format.
    </p>

    <div class="wrapper">
      <UIFlexBox
        class="demo-flex-box"
        wrap="wrap"
        v-bind:direction="direction"
        v-bind:gutter="gutter"
        v-bind:spacing="spacing">
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
        <UIFlexItem class="demo-flex-item">Amet</UIFlexItem>
      </UIFlexBox>
    </div>

    <h2>Customizable CSS grids</h2>
    <p>
      Another application of CSS variables is to not only (1) use it to set sane defaults for
      grid-based layouts, but also to (2) allow the grid parent to specify its own internal
      arrangement of grid children by proxy/inheritance.
    </p>

    <div class="wrapper">
      <UIFlexBox>
        <UIFlexItem>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Image start</UIFormLabel>
            </template>
            <UIFormNumberInput v-model="imageStart" />
          </UIFormControlGroup>

          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Image end</UIFormLabel>
            </template>
            <UIFormNumberInput v-model="imageEnd" />
          </UIFormControlGroup>
        </UIFlexItem>

        <UIFlexItem>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Text start</UIFormLabel>
            </template>
            <UIFormNumberInput v-model="textStart" />
          </UIFormControlGroup>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Text end</UIFormLabel>
            </template>
            <UIFormNumberInput v-model="textEnd" />
          </UIFormControlGroup>
        </UIFlexItem>

        <UIFlexItem>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Hero image start</UIFormLabel>
            </template>
            <UIFormNumberInput v-model="heroImageStart" />
          </UIFormControlGroup>
          <UIFormControlGroup layout="stacked">
            <template v-slot:label>
              <UIFormLabel>Hero image end</UIFormLabel>
            </template>
            <UIFormNumberInput v-model="heroImageEnd" />
          </UIFormControlGroup>
        </UIFlexItem>
      </UIFlexBox>
    </div>
 
    <UIGrid
      v-bind:style="gridCssStyleObject">
      <UIGridItem type="image">
        <img src="https://source.unsplash.com/Bs-zngH79Ds/600x400" />
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UIFlexBox, { Direction } from '@/components/UIFlexBox.vue';
import UIFlexItem from '@/components/UIFlexItem.vue';
import UIGrid from '@/components/UIGrid.vue';
import UIGridItem from '@/components/UIGridItem.vue';
import UIFormControlGroup from '@/components/UIFormControlGroup.vue';
import UIFormLabel from '@/components/UIFormLabel.vue';
import UIFormSelect from '@/components/UIFormSelect.vue';
import UIFormNumberInput from '@/components/UIFormNumberInput.vue';
import { VueCssStyleObject } from '@/types';

@Component({
  name: 'Layout',
  components: {
    UIFlexBox,
    UIFlexItem,
    UIGrid,
    UIGridItem,
    UIFormControlGroup,
    UIFormLabel,
    UIFormSelect,
    UIFormNumberInput,
  },
})
export default class Layout extends Vue {
  public gutter: number = 16;

  public spacing: number = 16;

  public directions = Direction;

  public direction: Direction = Direction.ROW;

  public imageStart: number = 1;

  public imageEnd: number = 7;

  public heroImageStart: number = 2;

  public heroImageEnd: number = 12;

  public textStart: number = 7;

  public textEnd: number = 13;

  /** @property */
  public get shouldShowHeightNotice(): boolean {
    return this.direction === Direction.COLUMN;
  }

  /** @property */
  public get gridCssStyleObject(): VueCssStyleObject {
    return {
      '--image-start': `${this.imageStart}`,
      '--image-end': `${this.imageEnd}`,
      '--text-start': `${this.textStart}`,
      '--text-end': `${this.textEnd}`,
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
}
</style>
