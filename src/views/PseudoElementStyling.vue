<template>
  <div>
    <h1>Pseudo-element styling</h1>
    <span class="byline"><router-link to="/">Back</router-link></span>

    <h2>Color picker example</h2>
    <p>
      The color picker below uses computed CSS variables to set the position of the cursor and the
      base hue of the color in the background. <strong>Both are CSS generated content</strong>: no
      further trickery required!
    </p>
    <UIColorPicker />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UIColorPicker from '@/components/UIColorPicker.vue';

@Component({
  name: 'PseudoElementStyling',
  components: {
    UIColorPicker,
  },
})
export default class PseudoElementStyling extends Vue { }
</script>
